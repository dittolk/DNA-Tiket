const db = require('../models')
const Event = db.Event
const User = db.User
const Transaksi = db.Transaksi

module.exports = {
    createTransaction: async (req, res) => {
        try{
            const transactionData = req.body;
            transactionData.UserId = req.user.id
            
                const result = await Transaksi.create(
                    {
                        biaya_layanan: transactionData.biaya_layanan,
                        diskon: transactionData.diskon,
                        email: transactionData.email,
                        metode_pembayaran: transactionData.metode_pembayaran,
                        nama_lengkap: transactionData.nama_lengkap,
                        telp: transactionData.telp,
                        total_bayar: transactionData.total_bayar,
                        total_harga_tiket: transactionData.total_harga_tiket,
                        EventId: transactionData.EventId,
                        UserId: transactionData.UserId
                    },
                )
            res.status(200).send('Transaction success')
        }catch(err){
            console.log(err);
            res.status(400).send({message: err.message})
        }
    },
    getTransaction: async(req, res) => {
        try{
            const result = await Transaction.findOne({
                // where:{
                //     id:
                // }
            })
        }catch(err){
            console.log(err);
            res.status(400).send({message: err.message})
        }
    }
}