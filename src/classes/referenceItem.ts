/* eslint-disable no-underscore-dangle */
import { timeout } from '../decorators';

export abstract class ReferenceItem {
    readonly #id: number;
    _publisher: string;
    static department: string = 'Classic Literature';

    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating new ReferenceItem...');
        this.#id = id;
    };

    getID() {
        return this.#id;
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    @timeout(5000)
    printItem() {
        console.log(`${this.title} was published in ${this.year}`);
        console.log('Department: ', ReferenceItem.department);
    };

    abstract printCitation(): void;
}
