/* eslint-disable no-redeclare */
import { Category } from './enums';
import { getBooksByCategoryPromise, logSearchResults } from './functions';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// Task 02.01
// 1.
// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };

// enum Category { JavaScript, CSS, HTML, TypeScript, Angular}

// const getAllBooks = (): ReadonlyArray<IBook> => {
//     const books = <const>[
//         { id: 1, category: Category.JavaScript, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
//         { id: 2, category: Category.JavaScript, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
//         { id: 3, category: Category.CSS, title: 'CSS Secrets', author: 'Lea Verou', available: true },
//         { id: 4, category: Category.JavaScript, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
//     ];
//     return books;
// };

// 2.
// const logFirstAvailable = (books: readonly Book[] = getAllBooks()): void => {
//     const numBooks: number = books.length;
//     const bookTitle: string = books.find(book => book.available)?.title;
//     console.log(`Number of books: ${numBooks}; first available: ${bookTitle}`);
// };

// 3.
// logFirstAvailable(getAllBooks());

// 4.
// enum Category { JavaScript, CSS, HTML, TypeScript, Angular}

// 5. category added to objects in getAllBooks() function
// 6.
// const getBookTitlesByCategory = (category: Category = Category.JavaScript): Array<string> => {
//     const books: ReadonlyArray<Book> = getAllBooks();
//     return books.filter(book => book.category === category).map(book => book.title);
// };

// 7.
// const logBookTitles = (titles: string[]): void => {
//     titles.forEach(title => console.log(title));
// };

// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

// 8.
// const getBookAuthorByIndex = (i: number): [string, string]  => {
//     const books: ReadonlyArray<Book> = getAllBooks();
//     const { title, author } = books[i];
//     return [title, author];
// };

// getBookAuthorByIndex(1);

// 9.
// type Library = {
//     lib: string;
//     books: number;
//     avgPagesPerBook: number;
// };

// const libraries: ReadonlyArray<Library> = [{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 }, { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 }, { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];
// const calcTotalPages = (libraries: ReadonlyArray<Library>): bigint => libraries.reduce((total: bigint, lib) => total + BigInt(lib.books * lib.avgPagesPerBook), 0n);

// console.log('Total pages: ', calcTotalPages(libraries));

// Task 02.02
// 1. const assertions added to Book[]
// 2. readonly modifier added to logFirstAvailable() argument

// Task 03.01
// 1.
// const createCustomerID  = (name: string, id: number): string => `${name}-${id}`;

// 2.
// const myID: string = createCustomerID('Ann', 10);
// console.log('My ID: ', myID);

// 3.
// let idGenerator: (name: string, id: number) => string = (name: string, id: number) => `${name}-${id}`;

// 4.
// idGenerator = createCustomerID;
// console.log(idGenerator('myName', 32));

// Task 03.02

// 1.
// const createCustomer  = (name: string, age?: number, city?: string): void => {
//     console.log(`Customer: ${name}`);
//     if (age) {
//         console.log(`Age: ${age}`);
//     }
//     if (city) {
//         console.log(`City: ${city}`);
//     }
// };

// console.log(createCustomer('Billy'));
// console.log(createCustomer('Billy', 25));
// console.log(createCustomer('Billy', 25, 'NY'));

// 2.
// console.log(getBookTitlesByCategory());

// 3.
// console.log(logFirstAvailable());

// 4.
// const getBookByID  = (id: number): BookOrUndefined => getAllBooks().find(book => book.id === id);
// console.log(getBookByID(1));

// 5.
// const checkoutBooks  = (customer: string, ...bookIDs: number[]): string[] => {
//     const books: Book[] = bookIDs.map((id: number): Book => getBookByID(id));
//     const titles = books.filter(book => book.available === true).map(book => book.title);
//     console.log('Customer: ', customer);
//     console.log('Titles: ', titles);
//     return titles;
// };

// 6.
// let myBooks = checkoutBooks('Ann', 1, 2, 4);
// console.log('myBooks: ', myBooks);

// Task 03.03

// 1. added ESLint option /* eslint-disable no-redeclare */
// 2.
// function getTitles(author: string): string[];
// function getTitles(available: boolean): string[];
// function getTitles(id: number, available: boolean): string[];
// function getTitles(...props: any[]): string[] {
//     if (props.length === 1 && typeof props[0] === 'string') {
//         return getAllBooks().filter(book => book.author === props[0]).map(book => book.title);
//     }
//     if (props.length === 1 && typeof props[0] === 'boolean') {
//         return getAllBooks().filter(book => book.available === props[0]).map(book => book.title);
//     }
//     if (props.length === 2 && typeof props[0] === 'number' && typeof props[1] === 'boolean') {
//         return getAllBooks().filter(book => book.id === props[0] && book.available === props[0]).map(book => book.title);
//     }
// }

// 3.
// let checkedOutBooks = getTitles(false);
// console.log('checkedOutBooks: ', checkedOutBooks);

// Task 03.04

// 1.
// function assertStringValue (value: any): asserts value is string {
//     if (typeof value !== 'string') {
//         throw new Error('value should have been a string');
//     }
// }

// 2.
// const bookTitleTransform = (title: any): string => {
//     assertStringValue(title);
//     return [...title].reverse().join('');
// };

// 3.
// console.log('bookTitleTransform with string: ', bookTitleTransform('Javascript'));
// console.log('bookTitleTransform with number: ', bookTitleTransform(4));

// Task 04.01

// 1.
// interface IBook {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
//     pages?: number;
//     markDamaged?: IDamageLogger;
// }

// 2. modified getAllBooks() - interface Book used
// 3. modified getAllBooks() - interface Book | undefined used
// 4.
// const printBook = (book: IBook): void => {
//     console.log(`${book.title} by ${book.author}`);
// };

// 5.
// const myBook: IBook = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
// markDamaged: (reason: string) => {
//     console.log(`Damaged: ${reason}`);
// }
// };

// 6.
// console.log(printBook(myBook));

// 7. optional property 'pages: number' added to IBook interface
// 8. IBook interface explicitly used for myBook variable
// 9.
// myBook.markDamaged('missing back cover');

// Task 04.02

// 1.
// interface ILogger {
//     (str: string): void;
// }
// 2. ILogger interface is used within IBook

// 3.
// const logDamage: IDamageLogger = (value: string) => {
//     console.log('Logged Damage: ', value);
// };
// logDamage('some pages are missing');

// Task 04.03

// 1.
// interface IPerson {
//     name: string;
//     email: string;
// }

// 2.
// interface IAuthor extends IPerson {
//     numBooksPublished: number;
// }

// 3.
// interface ILibrarian extends IPerson {
//     department: string;
//     assistCustomer: (custName: string) => void;
// }

// 4.
// const favoriteAuthor: IAuthor = {
//     name: 'F.S. Fitzgerald',
//     email: 'fsf@gmail.com',
//     numBooksPublished: 42
// };
// 5.
// const favoriteLibrarian: ILibrarian = {
//     name: 'Billy',
//     email:'billy@bob.com',
//     department: 'Science Books',
//     assistCustomer: function (custName) {
//         console.log(`Let me help you, ${custName}`);
//     }
// };

// Task 04.04

// 1.
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// 2.
// console.log('offer?.magazine? ', offer?.magazine);
// console.log('offer?.magazine?.getTitle() ', offer?.magazine?.getTitle());
// console.log('offer?.book?.getTitle() ', offer?.book?.getTitle());
// console.log('offer?.book?.authors[0] ', offer?.book?.authors[0]);

// Task 04.05

// 1.
// type BookProperties = keyof IBook;

// 2.
// const getProperty = (book: IBook, prop: BookProperties): any => {
//     return book[prop];
// };

// 3.
// console.log('key title: ', getProperty(myBook, 'title'));
// console.log('key markDamaged: ', getProperty(myBook, 'markDamaged'));
// console.log('key isbn: ', getProperty(myBook, 'isbn'));

// Task 05.01

// 1.
// abstract class ReferenceItem {
//     readonly #id: number;
//     _publisher: string;
//     static department: string = 'Classic Literature';
//
//     constructor(id: number, public title: string, protected year: number) {
//         console.log('Creating new ReferenceItem...');
//         this.#id = id;
//     };
//
//     getID() {
//         return this.#id;
//     }
//
//     get publisher(): string {
//         return this._publisher.toUpperCase();
//     }
//
//     set publisher(newPublisher: string) {
//         this._publisher = newPublisher;
//     }
//
//     printItem() {
//         console.log(`${this.title} was published in ${this.year}`);
//         console.log('Department: ', ReferenceItem.department);
//     };
//
//     abstract printCitation(): void;
// }

// // 2.
// const ref = new ReferenceItem(3, 'War and Peace', 1869);
// ref.printItem();

// // 3. public title: string, private year: number added to the constructor
// // 4. soft private _publisher: string property, getter & setter added to the class
// ref.publisher = 'Alpine Book House';
// console.log('Publisher: ', ref.publisher);
//
// // 5. hard private #id: number property added to the class
// console.log(ref);
// ref.getID();

// 6. static property 'department' added to the class

// Task 05.02

// 1.
// class Encyclopedia extends ReferenceItem {
//     constructor(id: number, title: string, year: number, public edition: number) {
//         super(id, title, year);
//     }
//
//     printItem(): void {
//         super.printItem();
//         console.log('Encyclopedia ', `Edition: ${this.edition} ${this.year}`);
//     }
//
//     printCitation(): void {
//         console.log(`${this.title} - ${this.year}`);
//     }
// }

// // 2.
// const refBook: RefBook = new RefBook(5, 'I love Typescript', 2021, 3);
// console.log(refBook);
// refBook.printItem();

// 3. printItem() is redefined in Encyclopedia; printItem() modifier in ReferenceItem changed to 'protected'

// Task 05.03

// 1. ReferenceItem made abstract

// 2. abstract printCitation() method signature implemented in ReferenceItem
// 3. printCitation() method implemented in Encyclopedia
// 4.
// const refBook: RefBook = new RefBook(5, 'I love Typescript', 2021, 3);
// refBook.printCitation();

// Task 05.04

// 1.
// class UniversityLibrarian implements ILibrarian {
//     department: string;
//     email: string;
//     name: string;
//
//     assistCustomer(custName: string): void {
//         console.log(`${this.name} is assisting ${custName}`);
//     }
// }
// 2.
// const favoriteLibrarian: ILibrarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Alice';
// favoriteLibrarian.assistCustomer('Bob');

// Task 05.05
// 1.
// type PersonBook = IPerson & Book;

// 2.
// const PersonBook: PersonBook = {
//     name: 'Alice',
//     email: 'alice@mail.com',
//     id: 2,
//     author: 'Alice',
//     available: false,
//     category: Category.HTML,
//     title: 'I love HTML',
// };
// console.log('PersonBook: ', PersonBook);

// 3.
// type BookOrUndefined = Book | undefined;
// 4. return type of getBookByID changed to BookOrUndefined

// Task 06.02
// 1-5. enums, types, interfaces, classes, functions moved to separate files
// 6. required import statements added

// Task 06.05
// 1 - 2 Reader class implemented in reader.ts
// 3. Dynamic import implemented
// const flag = true;
// if (flag) {
//     import('./classes')
//         .then(m => {
//             const reader = new m.Reader();
//             reader.name = 'Alice';
//             reader.take(getAllBooks()[2]);
//             console.log('Reader: ', reader);
//         });
// }

// Task 06.06

// 1 - 3. Library class implemented and imported as type and as class
// 4.
// let libObj: Library;
// const libObj2: Library = new Lib();

// Task 07.01

// 1 - 3. Generic function purge() created in functions.ts; import added
// 4.
// const inventory: IBook[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// 5.
// console.log('Inventory Books: ', purge(inventory));
// 6.
// console.log('Inventory Numbers: ', purge([1, 2, 3, 4, 5]));

// Task 07.02

// 1 - 5 Shelf generic class implemented, exported and imported
// 6.
// const bookShelf: Shelf<IBook> = new Shelf<IBook>();
// bookShelf.add(...inventory);
// console.log('Book Shelf: ', bookShelf);
// console.log('First book on the shelf: ', bookShelf.getFirst());

// 7.
// const magazines = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// 8.
// const magazineShelf: Shelf<IMagazine> = new Shelf<IMagazine>();
// magazineShelf.add(...magazines);
// console.log('Magazine Shelf: ', magazineShelf);
// console.log('First magazine on the shelf: ', magazineShelf.getFirst());

// Task 07.03

// 1 - 3. find() and printTitles() method added to Shelf class; IShelfItem interface defined
// 4.
// magazineShelf.printTitles();
// 5.
// const found = magazineShelf.find('Five Points');
// console.log('Found magazine: ', found);
// 6.
// console.log(getProperty(magazines[0], 'title'));
// console.log(getProperty(getAllBooks()[0], 'author'));

// Task 07.04

// 1. BookRequiredFields type declared using Required
// 2.
// const book: BookRequiredFields = {
//     id: 1,
//     title: 'Bob Recipes',
//     author: 'Bob',
//     available: true,
//     category: Category.Angular,
//     pages: 200
// };
// 3. UpdatedBook alias declared using Partial
// 4.
// const updatedBook: UpdatedBook = {
//     title: 'Only title'
// };
// 5. AuthorWoEmail alias declared using Omit
// 6. CreateCustomerFunctionType alias declared for createCustomer functional type
// 7.
// const params: Parameters<CreateCustomerFunctionType> = ['Anna', 30];
// createCustomer(...params);

// Task 08.01

// 1. @sealed class decorator created
// 2. @sealed class decorator applied to UniversityLibrarian
// 3.
// const obj = new UniversityLibrarian();
// UniversityLibrarian.A = '123';

// Task 08.02

// 1 - 5. @logger decorator created
// 6.
// console.log(obj);

// 7.
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// fLibrarian.printLibrarian();

// Task 08.03

// 1 - 3. @writable decorator created; assistFaculty() and teachCommunity() added to UniversityLibrarian
// 4.
// obj.assistFaculty = null;
// obj.teachCommunity = null;
// console.log(obj);

// Task 08.04

// 1 - 3. @timeout decorator implemented and applied to printItem() in ReferenceItem
// 4.
// const enc = new RefBook(1, 'I love Typescript', 2021, 3);
// enc.printItem();

// Task 08.05

// 1 - 4. @logParameter & @logMethod decorators created and applied to assistCustomer() in UniversityLibrarian
// 5.
// const librarian = new UniversityLibrarian();
// librarian.name = 'Alice';
// librarian.assistCustomer('Bob');
// console.log(librarian);

// Task 08.06

// 1 - 4. property decorator @format created and applied to property 'name' of UniversityLibrarian
// 5.
// const librarian = new UniversityLibrarian();
// librarian.name = 'Alice';
// console.log(librarian.name);

// Task 08.07

// 1 - 3. accessors decorator @positiveInteger() created and applied to getter and setter for _copies in Encyclopedia
// 4.
// const enc = new RefBook(1, 'I love Typescript', 2021, 3);
// enc.copies = - 10;
// enc.copies = 0;
// enc.copies = 4.5;
// enc.copies = 5;

// Task 09.01

// 1. ICallback interface created
// 2 - 4 getBooksByCategory() & logCategorySearch() implemented
// 5.
// console.log('Start');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('Finished');


// Task 09.02

// 1 - 2. getBooksByCategoryPromise() implemented
// 3 - 4
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(data => {
//         return data.length;
//     })
//     .then(len => console.log('Found books: ', len))
//     .catch(err => console.log(err))
//     .finally(()=> console.log('Finished'));
//
// getBooksByCategoryPromise(Category.Software)
//     .then(data => {
//         return data.length;
//     })
//     .then(len => console.log('Found books: ', len))
//     .catch(err => console.log(err))
//     .finally(()=> console.log('Finished'));

// Task 09.03

// 1. async logSearchResults() implemented
// 2.
console.log('Start');
logSearchResults(Category.JavaScript)
    .then(data => console.log(data.length))
    .catch(err => console.log(err));

logSearchResults(Category.Software)
    .then(data => console.log(data.length))
    .catch(err => console.log(err));
