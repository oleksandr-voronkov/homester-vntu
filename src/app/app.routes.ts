import { IRoute } from "./core/interfaces/route.interface";

export const routes: IRoute[] = [{
    name: 'home',
    pattern: ''
}, {
    name: 'property',
    pattern: 'property/:id'
}, {
    name: 'folders',
    pattern: 'folders'
}, {
    name: 'folder',
    pattern: 'folders/:id'
}, {
    name: 'author',
    pattern: 'author/:id'
}]