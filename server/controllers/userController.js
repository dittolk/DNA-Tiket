const db = require('../models')
const User = db.User
const { Op } = require('sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    registerUser: async (req, res) => {
        try{
            const {name, username, email, password} = req.body
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
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
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
                    include: {
                        model: Referral,
                        required: true,
                        attributes: ["kode_referral"]
                    }
                })
            }else{
                const {username} = req.query;
                userLogin = await User.findOne({
                    where:{
                        username: username
                    },
                    include: {
                        model: Referral,
                        required: true,
                        attributes: ["kode_referral"]
                    }
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
            const token = jwt.sign(payload, 'thisisdnatiket', {expiresIn: '2h'})
            
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
                include: {
                    model: Referral,
                    required: true,
                    attributes: ["kode_referral"]
                }
            })
            console.log("USER findOne:", user);
            res.status(200).send({message: "Keep login", user})
        }catch(err){
            res.status(400).send({err: err.message})
        }
    }
}