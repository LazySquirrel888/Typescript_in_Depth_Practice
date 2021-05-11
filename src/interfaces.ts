import { Category } from './enums';

interface IBook {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
}

interface IDamageLogger {
    (str: string): void;
}

interface IPerson {
    name: string;
    email: string;
}

interface IAuthor extends IPerson {
    numBooksPublished: number;
}

interface ILibrarian extends IPerson {
    department: string;
    assistCustomer: (custName: string) => void;
}

interface IMagazine {
    title: string;
    publisher: string;
}

interface IShelfItem {
    title: string;
}

interface ILibMgrCallback {
    (err: Error, titles: string[]): void;
}

interface ICallback<T> {
    (err: Error, data: T): void;
}

export { IBook, IDamageLogger as ILogger, IPerson, IAuthor, ILibrarian, IMagazine, IShelfItem, ILibMgrCallback, ICallback };

// Task 06.02

// 2. IBook, IDamageLogger as ILogger, IPerson, IAuthor, ILibrarian interfaces moved here from app.ts
// interfaces exported

