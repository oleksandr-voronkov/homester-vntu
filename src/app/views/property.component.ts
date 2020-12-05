import { html, LitElement } from "lit-element";

export class PropertyComponent extends LitElement {
    render() {
        return html`
            <div>
                Hello, home page
            </div>
        `;
    }
}

customElements.define('app-property-view', PropertyComponent);