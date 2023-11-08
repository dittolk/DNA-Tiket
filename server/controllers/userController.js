const db = require('../models')
const User = db.User
const Referral = db.Referral
const Wallet = db.Wallet
const { Op } = require('sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const transporter = require('../middleware/transporter')
const fs = require('fs')
const handlebars = require('handlebars')

module.exports = {
    registerUser: async (req, res) => {
        try{
            const {name, username, email, password, kode_referral} = req.body

            function generateReferralCode(name){
                if (name.length >= 2) {
                    // Ambil dua karakter pertama dari nama pengguna
                    const words = name.split(' ')
                    const userChars = words
                    .map((word) => word.charAt(0).toUpperCase())
                      .join('');
              
                    // Generate empat karakter acak untuk kode referal sisanya
                    const randomChars = Math.random().toString(36).substring(2, 6).toUpperCase();
              
                    // Gabungkan karakter dari nama pengguna dan karakter acak
                    const generatedCode = `${userChars}${randomChars}`;
              
                    // Simpan kode referal yang dihasilkan
                    return generatedCode;
                  } else {
                    // alert('Nama pengguna harus memiliki minimal 2 karakter.');
                    console.log('Nama pengguna harus memiliki minimal 2 karakter.');
                  }
            }

            const referral = generateReferralCode(name);

            const findUser = await User.findOne({
                where:{
                    [Op.or]:[
                        {username:username},
                        {email:email}
                    ]
                }
            })

            if(findUser == null){
                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(password, salt)

                const result = await User.create({
                    name: name,
                    username: username,
                    email: email,
                    password: hashPassword,
                })

                await Referral.create({
                    UserId: result.id,
                    kode_referral: referral
                })


                await Wallet.create({
                        balance: 500000,
                        UserId: result.id
                })

                if(kode_referral){
                    const findReferral = await Referral.findOne({
                        where:{
                            kode_referral: kode_referral
                        }
                    })
                    if(findReferral){
                        await User.increment('point', { by: 5, where:{id: result.id} })
                        await User.increment('point', { by: 10, where:{id: findReferral.UserId} })          
                    }
                }

                const data = fs.readFileSync("./template.html", "utf-8");
                const tempCompile = await handlebars.compile(data);
                const tempResult = tempCompile({ createdAt: result.createdAt, name: name, username: username }) ;
        
                await transporter.sendMail({
                  from: "vaditto@protonmail.com",
                  to: email,
                  subject: "Email Confirmation",
                  html: tempResult,
                });

            }else{
                res.send(400).send("User already exist")
            }
            res.status(200).send('Register Success')
        }catch (err){
            console.log(err);
            res.status(400).send({message: err.message})
        }
    },
    userLogin: async(req, res) => {
        try{
            let userLogin;
            const {password} = req.query;

            if(req.query.email){
                const {email} = req.query;
                userLogin = await User.findOne({
                    where:{
                        email: email
                    },
                    include: [
                        {
                            model: Referral,
                            required: true,
                            attributes: ["kode_referral"]
                        },
                        {
                            model: Wallet,
                            required: true,
                            attributes: ["balance"]
                        }
                    ]
                })
            }else{
                const {username} = req.query;
                userLogin = await User.findOne({
                    where:{
                        username: username
                    },
                    include: [
                        {
                            model: Referral,
                            required: true,
                            attributes: ["kode_referral"]
                        },
                        {
                            model: Wallet,
                            required: true,
                            attributes: ["balance"]
                        }
                    ]
                })
            }

            if(userLogin == null){
                return res.status(409).send({
                    message: 'User not found'
                })
            }

            const isValid = await bcrypt.compare(password, userLogin.password)
            if(!isValid){
                return res.status(400).send({
                    message: 'Incorrect password'
                })
            }

            //data yang mau disimpan di token
            let payload = {id: userLogin.id}
            const token = jwt.sign(payload, 'thisisdnatiket')
            
            res.status(200).send({
                message: "Login success",
                userLogin,
                token
            })
        }catch(err){
            console.log(err);
            res.status(400).send({message: err.message})
        }
    },
    keepLogin: async(req, res) => {
        try{
            console.log("Object REQ", req.user);
            const user = await User.findOne({
                where:{
                    id: req.user.id
                },
                include: [
                    {
                        model: Referral,
                        required: true,
                        attributes: ["kode_referral"]
                    },
                    {
                        model: Wallet,
                        required: true,
                        attributes: ["balance"]
                    }
                ]
            })
            console.log("USER findOne:", user);
            res.status(200).send({message: "Keep login", user})
        }catch(err){
            res.status(400).send({err: err.message})
        }
    },
    updateUser: async(req, res) => {
        try{
            const {name, username, password} = req.body;
            const id = req.user.id;

            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)

            const updateFields = {};

            if (name) {
            updateFields.name = name;
            }

            if (username) {
            updateFields.username = username;
            }

            if (password) {
                const salt = await bcrypt.genSalt(10);
                const hashPassword = await bcrypt.hash(password, salt);
                updateFields.password = hashPassword;
            }

            await User.update(
                updateFields,
                {
                    where:{
                        id: id
                    }
                }
            )
            res.status(200).send({message: "Data updated"})
        }catch(err){
            console.log(err);
            res.status(400).send({message: err.message})
        }
    },
    deleteUser: async(req, res) => {
        try{
            const userId = req.user.id; // Replace this with your actual authentication method
            // Find the user in the database
            const user = await User.findOne({
                where:{
                    id: userId
                }
            })

            if (!user) {
                return res.status(404).send({
                    message: 'User not found',
                });
            }

            // If the user is found, delete the user's account
            await user.destroy();

            res.status(200).send({
                message: 'Account successfully deleted',
            });
        }catch(err){
            res.status(400).send
        }
    }
}