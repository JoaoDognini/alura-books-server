const fs = require("fs")

function getTodosFavoritos() {
	return JSON.parse(fs.readFileSync("favoritos.json"));
}

function adicionaFavorito(id) {
	const livros = JSON.parse(fs.readFileSync("livros.json"));
	const favoritos = JSON.parse(fs.readFileSync("favoritos.json"));
	
	const livroFavoritado = livros.find(livro => livro.id === id)

	const ehFavorito = favoritos.find(favorito => favorito.id === livroFavoritado.id)
	if (ehFavorito) return;
	const novaListaFavoritos = [...favoritos, livroFavoritado]

	fs.writeFileSync("favoritos.json", JSON.stringify(novaListaFavoritos))
}

function deletaFavorito(id) {
	const livros = JSON.parse(fs.readFileSync("favoritos.json"));
	const livrosFiltrados = livros.filter(livro => livro.id !== id)

	fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
}

module.exports = {
	getTodosFavoritos,
	adicionaFavorito,
	deletaFavorito
}