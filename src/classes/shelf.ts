import { IShelfItem } from '../interfaces';

export default class Shelf<T extends IShelfItem> {
    private items: T[] = [];

    add(...items: T[]): void {
        this.items.push(...items);
    };

    getFirst(): T {
        return this.items[0];
    };

    find(title: string): T {
        return this.items.find(item => item.title === title);
    };

    printTitles(): void {
        console.log(this.items.forEach(item => console.log(item.title)));
    };
}
