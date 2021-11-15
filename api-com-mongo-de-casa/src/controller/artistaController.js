const artistaSchema = require('../models/artistaSchema')
const mongoose = require('mongoose')


//GET ALL
const getAll = async (req, res) => {
    try {
        const artistas = await artistaSchema.find()
        res.status(200).json(artistas)

    } catch (error) {
        res.status(500).json({
            mensagem: error.message,
        })
    }
}
//GETTING ONE
const artistaPorId = async (req, res) => {
    try {
      const artistaEncontrado = await artistaSchema.findById(req.params.id)
          res.status(200).json(artistaEncontrado)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
//CREATING ONE
const createArtist = async (req, res) => {
    try {
        const artista = new artistaSchema({
            artista: req.body.artista,
            likes: req.body.likes,
            deslikes: req.body.deslikes,
            musicas: req.body.musicas,
            _id: new mongoose.Types.ObjectId()
        })

        const artistaSalvo = await artista.save()
        res.status(201).json({
            artista: artistaSalvo,
        })

    } catch(error) {
        res.status(400).json({
            mensagem: error.message,
        })
    }
}
//UPDATING ONE
const updateArtistById = async (req, res) => {
    try {
        const artistaEncontrado = await artistaSchema.findById(req.params.id)

        if (artistaEncontrado) {
            artistaEncontrado.artista = req.body.artista || artistaEncontrado.artista
            artistaEncontrado.likes = req.body.likes || artistaEncontrado.likes
            artistaEncontrado.deslikes = req.body.deslikes || artistaEncontrado.deslikes
            artistaEncontrado.musicas = req.body.musicas || artistaEncontrado.musicas

            const artistaSalvo = await artistaEncontrado.save()
            res.status(200).json({
                artista: artistaSalvo
            })
        }

        res.status(400).json({
            mensagem: "Desculpe, mas não conseguimos encontrar essa banda e/ou artista"
        })
    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}
//DELETING ONE

const deleteArtistById = async (req, res) => {
    try {
        const artistaEncontrado = await artistaSchema.findById(req.params.id)

       await artistaEncontrado.delete()

       res.status(200).json({
           mensagem: `Artista/banda '${artistaEncontrado.titulo}' deletado com sucesso!`
       })

    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }
}


module.exports = {
    getAll,
    createArtist,
    artistaPorId,
    updateArtistById,
    deleteArtistById
}