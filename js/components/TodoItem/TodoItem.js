import { LitElement, html, css } from "/node_modules/lit-element/lit-element.js";
export default class AppTodoItem extends LitElement {

  constructor() {
    super();

    this.id = 0;
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
        display: flex;
        padding: 10px 20px;
        border: 1px solid #eee;
      }

      .item.done {
        text-decoration: line-through;
      }

      .item span {
          margin-left: auto;
      }
    `;
  }

  initTodoItem(id, name) {
    this.id = id;
    this.name = name;
    this.status = false;
  }

  switch(event) {
    this.status = !this.status;
  }

  render() {
    return html`
        <div class="item ${this.status == true ? 'done' : 'todo'}" @click=${this.switch}>
            ${this.name}
          <span class="delete-item" data-id="${this.id}">&times;</span>
        </div>
    `;
  }
}

customElements.define('app-todo-item', AppTodoItem);
