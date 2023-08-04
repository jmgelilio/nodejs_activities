const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


let books = [
    { id: 1, title: 'Book 1', author: 'Author 1'},
    { id: 2, title: 'Book 2', author: 'Author 2'}
]

async function findBook(bookId){
    return new Promise((resolve, reject) => {
        const book = books.find((book) => (book.id === bookId) );
        if(book){
            resolve(book);
        } else {
            reject(new Error('Book not found'));
        }
    });
}
async function findBookById(bookId) {
    return new Promise((resolve, reject) => {
        const book = books.find((book) => book.id === bookId);
        if (book) {
            resolve(book);
        } else {
            reject(new Error('Book not found'));
        }
    });
}

// app.get('/books', async(req,res) =>{
//     res.json(books);
// });

app.get('/book', async (req,res) => {
    try {
        const bookId = parseInt(req.query.id);
        const book = await findBookById(bookId);
        res.json(book);
    } catch (error) {
        res.status(404).json({message : "Book not found"})
    }
});

app.listen(port, ()=>{
    console.log("Server running");
})