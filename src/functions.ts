/* eslint-disable no-redeclare */
import { IBook, ICallback, ILibMgrCallback, ILogger } from './interfaces';
import { BookOrUndefined, BookProperties, Library } from './types';
import { Category } from './enums';

export function getAllBooks(): ReadonlyArray<IBook> {
    const books = <const>[
        { id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
        { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
    ];
    return books;
};

export function logFirstAvailable(books: readonly IBook[] = getAllBooks()): void {
    const numBooks: number = books.length;
    const bookTitle: string = books.find(book => book.available)?.title;
    console.log(`Number of books: ${numBooks}; first available: ${bookTitle}`);
};

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const books: ReadonlyArray<IBook> = getAllBooks();
    return books.filter(book => book.category === category).map(book => book.title);
};

export function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
};

export function getBookAuthorByIndex(i: number): [string, string] {
    const books: ReadonlyArray<IBook> = getAllBooks();
    const { title, author } = books[i];
    return [title, author];
};

export function calcTotalPages(libraries: ReadonlyArray<Library>): bigint {
    return libraries.reduce((total: bigint, lib) => total + BigInt(lib.books * lib.avgPagesPerBook), 0n);
}

export function createCustomerID(name: string, id: number): string {
    return `${name}-${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer: ${name}`);
    if (age) {
        console.log(`Age: ${age}`);
    }
    if (city) {
        console.log(`City: ${city}`);
    }
}

export function getBookByID(id: number): BookOrUndefined {
    return getAllBooks().find(book => book.id === id);
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    const books: IBook[] = bookIDs.map((id: number): IBook => getBookByID(id));
    const titles = books.filter(book => book.available === true).map(book => book.title);
    console.log('Customer: ', customer);
    console.log('Titles: ', titles);
    return titles;
};

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...props: any[]): string[] {
    if (props.length === 1 && typeof props[0] === 'string') {
        return getAllBooks().filter(book => book.author === props[0]).map(book => book.title);
    }
    if (props.length === 1 && typeof props[0] === 'boolean') {
        return getAllBooks().filter(book => book.available === props[0]).map(book => book.title);
    }
    if (props.length === 2 && typeof props[0] === 'number' && typeof props[1] === 'boolean') {
        return getAllBooks().filter(book => book.id === props[0] && book.available === props[0]).map(book => book.title);
    }
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
};

export function printBook(book: IBook): void {
    console.log(`${book.title} by ${book.author}`);
};

export function logDamage(value: string) {
    console.log('Logged Damage: ', value);
};

// export const getProperty = (book: IBook, prop: BookProperties): any => {
//     if (typeof book[prop] === 'function') {
//         return (book[prop] as Function).name;
//     }
//     return book[prop];
// };

export function getProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    if (typeof obj[prop] === 'function') {
        return obj[prop]['name'];
    }
    return obj[prop];
};

export function purge<T>(inventory: T[]): T[] {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: ICallback<string[]>): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch(error) {
            callback(error, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });
    return p;
}

export async function logSearchResults(category: Category): Promise<string[]> {
    const result = await getBooksByCategoryPromise(category);
    console.log(result);
    return result;
}

// Task 06.02

// 5. All functions moved here from app.ts
// required interface/type/enum etc. imports added
// functions exported
