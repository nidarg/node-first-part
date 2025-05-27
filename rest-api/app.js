
const express = require('express')

const app = express()

// middleware
app.use(express.json())

let books = [
    {
        id:1,
        title:'Book 1'
    },
    {
        id:2,
        title:'Book 2'
    },
    {
        id:3,
        title:'Book 3'
    },
]

// intro route
app.get('/', (req,res)=>{
    res.json({message:"Welcome to our bookstore api"})
})
// get all books
 app.get('/books', (req, res)=>{
     res.json(books).status(200)
 })

//  get single book
app.get('/books/:id', (req, res)=>{
    const bookId = req.params.id
    const book = books.find(b=>b.id === +bookId)
    if(!book){
       return res.status(404).json({message:`No book with this id ${bookId}`})
    }else{
       return  res.status(200).json(book)
    }
})

// post-add a new book

app.post('/books',(req, res)=>{
    const {title} = req.body
    const newBook = {
        id:Date.now(),
        title,
    }
    books.push(newBook)
    res.status(201).json({data:newBook,message:'New book added'})
})

app.patch('/books/update/:id',(req, res)=>{
    const foundedBook = books.find(b=>b.id === +req.params.id)
    if(foundedBook){
        foundedBook.title = req.body.title || foundedBook.title
        res.status(200).json({message:`Book with id ${foundedBook.id} successfully updated`, data:foundedBook})
    }else{
        res.status(404).json({message:`Book with id ${req.params.id} wasn't found`})
    }
})

app.delete('/books/delete/:id', (req,res)=>{
    const findIndex = books.findIndex(b=>b.id === +req.params.id)
    if(findIndex !== -1){
        const deletedBook = books.splice(findIndex,1)
        console.log('deleted book ', deletedBook);
        
        res.status(200).json({message:'book was deleted', data:deletedBook[0]})
    }else{
        res.status(404).json({message:'book not founded'})
    }
})

 const PORT = 3000
 app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))
 