const db = require('../models')
const Event = db.Event
const Tiket = db.Tiket
const Promosi = db.Promosi

module.exports = {
    registerEvent: async (req, res) => {
        try{

            const eventData = req.body;
            console.log("ini evenData", eventData);

            const findEvent = await Event.findOne({
                where:{
                    nama_event: eventData.nama_event
                }
            })

            if(findEvent == null){
                eventData.UserId = req.user.id
                const result = await Event.create(eventData)

                await Tiket.create({
                    harga_tiket: eventData.harga_tiket,
                    kuota: eventData.kuota,
                    tanggal_akhir: eventData.akhir_penjualan,
                    jumlah_tiket: eventData.jumlah_tiket,
                    EventId: result.id
                })

                if(eventData.promosi == 1){
                    await Promosi.create({
                        kode_promo: eventData.kode_promo,
                        cost_point: eventData.cost_point,
                        discount: eventData.discount,
                        EventId: result.id
                    })
                }
            }
            res.status(200).send('Register event success')
        }catch(err){
            console.log(err);
            res.status(400).send({message: err.message})
        }
    },
    getEvent: async(req, res) => {
        try{
            const result = await Event.findAll(
                {
                    //include tabel User
                    include: {
                        model: Tiket,
                        required: true,
                        attributes: ["harga_tiket", "kuota", "jumlah_tiket"]
                    }
                }
            );
            res.status(200).send({result})
        }catch(err){
            console.log(err);
            res.status(400).send({message: err.message})
        }
    },
    getRecentEvent: async(req, res) => {
        try{
            const result = await Event.findAll({
                order: [
                    ['createdAt', 'DESC']
                ], // Order by the 'tanggal_mulai' column in descending order
                include: {
                    model: Tiket,
                    required: true,
                    attributes: ["harga_tiket", "kuota", "jumlah_tiket"]
                },
                limit: 4, // Limit the results to 3 rows
            })
            res.status(200).send({result})
        }catch(err){
            console.log(err);
            res.status(400).send({message: err.message})
        }
    },
    getEventByFormat: async(req, res) => {
        try{
            const {format_event} = req.query
            const {topik_event} = req.query
            const {kota} = req.query
            
            if(format_event){
                const result = await Event.findAll({
                    where:{
                        format_event: format_event
                    },
                    include: {
                        model: Tiket,
                        required: true,
                        attributes: ["harga_tiket", "kuota", "jumlah_tiket"]
                    },
                })
                res.status(200).send({result})
            }
            if(topik_event){
                const result = await Event.findAll({
                    where:{
                        topik_event: topik_event
                    },
                    include: {
                        model: Tiket,
                        required: true,
                        attributes: ["harga_tiket", "kuota", "jumlah_tiket"]
                    },
                })
                res.status(200).send({result})
            }
            if(kota){
                const result = await Event.findAll({
                    where:{
                        kota: kota
                    },
                    include: {
                        model: Tiket,
                        required: true,
                        attributes: ["harga_tiket", "kuota", "jumlah_tiket"]
                    },
                })
                res.status(200).send({result})
            }
        }catch(err){
            console.log(err);
            res.status(400).send({message: err.message})
        }
    },
    getEventById: async(req, res) => {
        try{
            const id = req.params
            const {topik_event} = req.query
            const result = await Event.findAll({
                where:{
                    id: id
                },
                include: {
                    model: Tiket,
                    required: true,
                    attributes: ["harga_tiket", "kuota", "jumlah_tiket"]
                },
            })
            console.log(result);
            res.status(200).send({result})
        }catch(err){
            console.log(err);
            res.status(400).send({message: err.message})
        }
    }
}
