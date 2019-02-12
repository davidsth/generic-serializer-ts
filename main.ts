import {Author, Book} from './Book'

const author = new Author('Dennis', 'Richie')
const book = new Book('The C Programming Language', 1978, 'O Rielly Media', author)

const output = book.serialize(book)
