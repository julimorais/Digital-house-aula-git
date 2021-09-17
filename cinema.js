let catalogo = [
    {
        codigo: 1,
        titulo: "A Hora do Rush",
        anoDeLancamento: 1998,
        duracao:2.1,
        emCartas: false,
        faturamento:31398966,
    },
    {
        codigo: 2,
        titulo: "Velozes e Furiosos 9",
        anoDeLancamento: 2021,
        duracao:2.1,
        emCartas: true,
        faturamento:3138898966,
    },
    {
        codigo: 3,
        titulo: "Homem Aranha",
        anoDeLancamento: 2021,
        duracao:2.1,
        emCartas: true,
        faturamento:0,
    }
];

function adicionarFilme( codigo, titulo, anoDeLancamento, emCartas) {
    catalogo.push({
        codigo,
        titulo,
        anoDeLancamento,
        emCartas: FilmeEstaEmCartas

    });
    console.log("Filme Adicionado");
    console.log(catalogo);
}
function buscarFilme() {

}
function alterarStatusEmCartas() {

}


function listarTodosFilmes(){
    catalogo.forEach((item,index) => console.log(item.titulo + ", " + item.anoDeLancamento + ", Duração:" + item.duracao));
} 

function listarFilmesLongos(){
    let FilmesLongos = catalogo.filter((item) => item.duracao > 2 );
    FilmesLongos.forEach((item,index) => console.log(item.titulo + ", " + item.anoDeLancamento + ", Duração:" + item.duracao));
}

function listarTodosFilmes2(){
    let filmesResumo =catalogo.map(item => {
        return{
            resumo: item.titulo + ", " + item.anoDeLancamento + ", Duração:" + item.duracao,
            ...item
        }
    });
    filmesResumo.forEach(item => console.log(item.resumo));
}
function buscarFilmePeloCodigo(codigo){
    let {titulo} = catalogo.find(item => item.codigo === codigo);
    console.log(titulo);
}



module.exports = {
    adicionarFilme,
    buscarFilme,
    alterarStatusEmCartas,
    listarTodosFilmes,
    listarFilmesLongos
};
