import { html, LitElement } from "lit-element";
import { outlet } from "lit-element-router";

export class DefaultLayoutComponent extends outlet(LitElement) {
    render() {
        return html`
            <div class="wrapper">
                <app-navbar></app-navbar>
                <slot></slot>
            </div> 
        `;
    }
}

customElements.define('app-default-layout', DefaultLayoutComponent)