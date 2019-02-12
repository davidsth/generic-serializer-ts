import {Serializer, transform} from './Serializer'
import {SerializerHelper} from './SerializerHelper'

export class Author {
    constructor(public firstName: string,
                public lastName: string,
    ) {
    }
}

export class Book implements Serializer<Book> {
    constructor(public title: string,
                public year: number,
                public publisher: string,
                public author: Author,
    ) {
    }

    public deserialize(data: any): Book {
        const author = new Author(data.author.first_name, data.author.last_name)

        return new Book(data.title, data.year, data.publisher, author)
    }

    @transform(SerializerHelper.upCase)
    public serialize(data: Book): any {
        console.log((data as any).test)
        return {
            title: data.title,
            author_attributes: {
                first_name: data.author.firstName,
                last_name: data.author.lastName,
            },
            year: data.year,
            publisher: data.publisher,
        }
    }

}
