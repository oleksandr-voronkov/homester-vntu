import { html, LitElement } from "lit-element";

export class FoldersComponent extends LitElement {
    render() {
        return html`
            <div>
                Hello, folders page
            </div>
        `;
    }
}

customElements.define('app-folders-view', FoldersComponent);