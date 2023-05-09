


const booksByCategory = [
    { //primeiro elemento do array booksByCategory
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    { //segundo elemento do array booksByCategory
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

console.log(booksByCategory); //array inteiro 
const total_category = booksByCategory.length;
console.log(total_category); //numero de categorias exercicio1; sao 2 
let contador1, contador2, contador3, contador4;


for(let category of booksByCategory){
    console.log("total de livros da categoria ", category.category); //se tivesse so category ia mostrar a category junto ao array books
    contador1 = category.books.length; //contagem de livros de cada uma das categorias exercicio1
    console.log("temos: ", contador1, "livros");

/*
    for(let i=0; i<contador1; i++) {     //contando o numero de livros e autores; 
        contador2 = category.books[i];  //se eu presumir que cada livro tenha um autor exercicio2
        console.log(contador2)         //livros do mesmo autor contam como 2 autores
    }
*/
/*
    let authors = [];
    for(let book of category.books){ //contar o nuero de autores conhecidos podendo existir livros sem autores 
        if(authors.indexOf(book.author) == -1) { //e livros do mesmo autor nao conta como 2 autores
            authors.push(book.author);
        }
    }
    console.log(authors);
*/
}



function coantagemAutores(){
    let autores = [];
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(autores.indexOf(book.author) == -1) { 
                autores.push(book.author);
            }  
        }
    }
    console.log("total de autores diferentes: ", autores.length)
}
coantagemAutores();

function buscaAutores(author){
    let books = [];
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author == author) { 
                books.push(book.title)
            }  
        }
    }
    console.log(`total de livros do autor ${author}:  ${books.join(", ")}`)
}
buscaAutores("Augusto Cury");
