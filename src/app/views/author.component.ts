import { html, LitElement } from "lit-element";

export class AuthorComponent extends LitElement {
    render() {
        return html`
            <div>
                Hello, author page
            </div>
        `;
    }
}

customElements.define('app-author-view', AuthorComponent);