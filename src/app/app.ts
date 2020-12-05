import {
    LitElement, html
} from 'lit-element';
import { router } from 'lit-element-router'

import './components';
import './views'
import './layouts';
import { routes } from './app.routes';
import { IRoute } from './core/interfaces/route.interface';

export class AppComponent extends router(LitElement) {
    private route: string;
    private params: any;
    private query: any;

    static get properties() {
        return {
            route: { type: String },
            params: { type: Object },
            query: { type: Object }
        };
    }

    static get routes(): IRoute[] {
        return routes
    }

    constructor() {
        super();
        this.route = '';
        this.params = {};
        this.query = {};
    }

    router(route, params, query, data) {
        this.route = route;
        this.params = params;
        this.query = query;
    }

    render() {
        return html`
        <app-default-layout active-route="${this.route}">
            <app-home-view route="home"></app-home-view>
            <app-folders-view route="folders"></app-folders-view>
            <app-folder-view route="folder"></app-folder-view>
            <app-property-view route="property"></app-property-view>
            <app-author-view route="author"></app-author-view>
        </app-default-layout>
        `;
    }
}

customElements.define('app-root', AppComponent);
