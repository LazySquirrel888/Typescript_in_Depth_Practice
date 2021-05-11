import { IPerson, IBook, IAuthor } from './interfaces';

type BookProperties = keyof IBook;
type PersonBook = IPerson & IBook;
type BookOrUndefined = IBook | undefined;
type Library = {
    lib: string;
    books: number;
    avgPagesPerBook: number;
};

type BookRequiredFields = Required<IBook>;
type UpdatedBook = Partial<IBook>;
type AuthorWoEmail = Omit<IAuthor, 'email'>;
type CreateCustomerFunctionType = (name: string, age?: number, city?: string) => void;

export { BookProperties, PersonBook, BookOrUndefined, Library, BookRequiredFields, UpdatedBook, AuthorWoEmail, CreateCustomerFunctionType };

// Task 06.02

// 4. BookProperties, PersonBook, BookOrUndefined types moved here from app.ts
// interfaces imported
// types exported
