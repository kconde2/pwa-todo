import { LitElement, html, css } from 'lit-element';

export default class AppTodoItem extends LitElement {

    constructor() {
        super();

        this.name = "";
        this.status = false;
    }

    static get properties() {
        return {
            name: { type: String },
            status: { status: Boolean }
        }
    }

    static get styles() {
        return css`
      :host {
        display: block;
      }
    `;
    }

    initTodoItem(name) {
        this.name = name;
        this.status = false;
    }

    render() {
        return html`
        <div class="${this.status == true ? 'done' : 'todo'}">${this.name}</div>
    `;
    }
}

customElements.define('app-todo-item', AppTodoItem);
