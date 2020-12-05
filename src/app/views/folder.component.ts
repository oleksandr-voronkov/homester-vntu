import { html, LitElement } from "lit-element";

export class FolderComponent extends LitElement {
    render() {
        return html`
            <div>
                Hello, folder page
            </div>
        `;
    }
}
customElements.define('app-folder-view', FolderComponent);