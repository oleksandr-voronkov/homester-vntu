import { html, LitElement } from "lit-element";

export class HomeComponent extends LitElement {
    render() {
        return html`
            <div>
                Hello, home page
            </div>
        `;
    }
}

customElements.define('app-home-view', HomeComponent);