import { Property } from "./property.model";

export class Author {
    constructor(public id: string, public name: string, public pictureUrl: string, public properties: Property[]) { }
}