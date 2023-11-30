const { Router } = require("express");
const { getFavoritos, deleteFavorito, postFavorito } = require("../controllers/favorito");

const router = Router()

router.get('/', getFavoritos)

router.post('/:id', postFavorito)

router.delete('/:id', deleteFavorito)

module.exports = router;