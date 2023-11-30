const fs = require("fs");

function getTodosLivros() {
	return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroPorId(id) {
	const livros = JSON.parse(fs.readFileSync("livros.json"));
	const livro = livros.find(livro => livro.id === id);
	return livro;
}

function insereLivro(livroNovo) {
	const livros = JSON.parse(fs.readFileSync("livros.json"));
	const novaListaLivros = [...livros, livroNovo]

	fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros))
}

function atualizaLivro(alteracoes, id) {
	let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
	const indiceAtualizar = livrosAtuais.findIndex(livro => livro.id === id)

	const conteudoAlterado = { ...livrosAtuais[indiceAtualizar], ...alteracoes }
	livrosAtuais[indiceAtualizar] = conteudoAlterado
	fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivro(id) {
	const livros = JSON.parse(fs.readFileSync("livros.json"))
	const livrosFiltrados = livros.filter(livro => livro.id !== id)

	fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}

module.exports = {
	getTodosLivros,
	getLivroPorId,
	insereLivro,
	atualizaLivro,
	deletaLivro
}