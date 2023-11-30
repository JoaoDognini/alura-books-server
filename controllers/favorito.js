const fs = require("fs")
const { getTodosFavoritos, adicionaFavorito, deletaFavorito } = require("../services/favorito")

function getFavoritos(req, res) {
	try {
		const favoritos = getTodosFavoritos();
		res.send(favoritos)
	} catch (error) {
		res.status(500)
		res.send(error.message)
	}
}

function postFavorito(req, res) {
	try {
		const id = req.params.id;

		adicionaFavorito(id)
		res.status(201)
		res.send("Favorito adicionado com sucesso")
	} catch (error) {
		res.status(500)
		res.send(error.message)
	}
}

function deleteFavorito(req, res) {
	try {
		const id = req.params.id

		if (id && Number(id)) {
			deletaFavorito(id)
			res.status(200)
			res.send("Favorito deletado com sucesso")
		} else {
			res.status(422)
			res.send("Id inválido")
		}
	} catch (error) {
		res.status(500)
		res.send(error.message)
	}
}

module.exports = {
	getFavoritos,
	postFavorito,
	deleteFavorito
}