import { LitElement, html, css, property } from 'lit-element';

class AppLogin extends LitElement {
  @property({ type: Boolean }) isLoggedIn = false;

  static styles = css`
    /* Estilos CSS para el formulario de inicio de sesión */
  `;

  render() {
    if (this.isLoggedIn) {
      return html`<p>Bienvenido</p>`;
    } else {
      return html`
        <form @submit="${this.login}">
          <label for="username">Usuario:</label>
          <input type="text" id="username" required>
          <br>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" required>
          <br>
          <button type="submit">Iniciar sesión</button>
        </form>
      `;
    }
  }

  login(event) {
    event.preventDefault();
    const username = this.shadowRoot.querySelector('#username').value;
    const password = this.shadowRoot.querySelector('#password').value;
    // Realiza la validación del inicio de sesión aquí.
    // Por simplicidad, asumimos que la validación es exitosa.
    this.isLoggedIn = true;
    this.dispatchEvent(new CustomEvent('login', { detail: { isLoggedIn: true } }));
  }
}

customElements.define('app-login', AppLogin);
