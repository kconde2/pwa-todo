import { LitElement, html, css } from "/node_modules/lit-element/lit-element.js";
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

      .item {
        padding: 10px 20px;
        border: 1px solid #eee;
      }

      .item.done {
        text-decoration: line-through;
      }
    `;
    }

    initTodoItem(name) {
        this.name = name;
        this.status = false;
    }

    render() {
        return html`
        <div class="item ${this.status == true ? 'done' : 'todo'}">${this.name}</div>
    `;
    }
}

customElements.define('app-todo-item', AppTodoItem);
