import { html, LitElement } from "lit-element";

export class NavbarComponent extends LitElement {
    render() {
        return html`
            <div class="navbar">
                <div class="navbar__logo">
                    <app-link href="/">
                        Homester
                    </app-link>
                </div>

                <ul class="navbar__menu">
                    <li>
                        <app-link href="/folders">Folders</app-link>
                    </li>
                </ul>
            </div>
        `;
    }
}

customElements.define('app-navbar', NavbarComponent)