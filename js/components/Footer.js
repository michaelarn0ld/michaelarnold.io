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
                <p>Notice a 🪲  bug? Submit an issue 
                <a href="https://github.com/michaelarn0ld/michaelarnold.io/issues/new"
                target="_blank">
                here</a>.</p>
                <p>Copyright © 2022 Michael Arnold.</p>
            </footer>
        `
    }
}

customElements.define('footer-component', Footer)
