let titulo = ["Biografia1", "Biografia2", "Biografia3", "Biografia4", "Biografia5"]
let autoras = ["Cristiane", "Sara", "Fabiana", "Ligia", "Bianca"]
let anos = [2022, 2021, 2019, 2018, 2016]
let idiomas = ["Italiano", "Portugues", "Ingles", "Portugues", "Italiano"]

// BuscarLivroAutor("Sara")
// buscarLivroAno(2016)
// buscarPorAutorAnoMinimo("Ligia", 2018)
// buscarLivroPeloTitulo("Biografia2")
buscarPeloIdioma("Italiano")

function BuscarLivroAutor(parametroAutor) {
    let livrosAux = []
    autoras.forEach((autoras, index) => {
        if (autoras == parametroAutor) {
            livrosAux[livrosAux.length] = titulo[index]
        }
    })
    console.log("Autora:", parametroAutor)
    livrosAux.forEach(livro => console.log(livro))
}

function buscarLivroAno(parametroAno) {
    let livroAux = []
    anos.forEach((anos, index) => {
        if (anos == parametroAno) {
            livroAux[livroAux.length] = titulo[index]
        }
    })
    console.log("Ano:", parametroAno)
    livroAux.forEach(livro => console.log(livro))
}

function buscarPorAutorAnoMinimo(autorParametro, anoParametro) {
    let livroAux = []
    autoras.forEach((autoras, index) => {
        if (autoras == autorParametro && anos[index] >= anoParametro) {
            livroAux[livroAux.length] = titulo[index]
        }
    })
    console.log("Autoras", autorParametro, "Ano", anoParametro)
    livroAux.forEach(livro => console.log(livro))
}

function buscarLivroPeloTitulo(tituloParametro) {
    let livroAux = []
    let idiomasAux = []
    titulo.forEach((x, index) => {
        if (x == tituloParametro) {
            livroAux[livroAux.length] = x
            idiomasAux[idiomasAux.length] = idiomas[index]
        }
    })
    console.log("Titulo", tituloParametro)
    livroAux.forEach((livro, index) => console.log(livro, " ", idiomasAux[index]))
}

function buscarPeloIdioma(idiomaParametro) {
    let livroAux = []
    idiomas.forEach((idiomas, index) => {
        if (idiomas == idiomaParametro) {
            livroAux[livroAux.length] = titulo[index]
        }
    })
    console.log("idiomas:", idiomaParametro)
    livroAux.forEach(livro => console.log(livro))
}