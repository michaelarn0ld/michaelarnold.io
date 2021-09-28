/* ---------------------------------------
 *  Footer is a reusable Navbar Component
 * --------------------------------------- */

class Footer extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>Copyright © 2021 Michael Arnold.</p>
            </footer>
        `
    }
}

customElements.define('footer-component', Footer)
