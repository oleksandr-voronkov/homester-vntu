import { Property } from "./property.model";

export class Folder {
    constructor(
        public id: string,
        public title: string,
        public properties: Property[]
    ) { }

    getCount(): number {
        return this.properties.length;
    }

    addProperty(property: Property) {
        this.properties.push(property);
    }

    removeProperty(id: string) {
        this.properties = this.properties.filter(property => property.id !== id);
    }
}