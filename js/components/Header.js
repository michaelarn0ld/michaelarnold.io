/* ---------------------------------------
 *  Header is a reusable Navbar Component
 * --------------------------------------- */

class Header extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <a href="#">michaelarnold<span>.</span>io</a>
                <section>
                    <div>
                        <img src="./img/gitlab.svg" alt="">
                        <a href="">GitLab</a>
                    </div>
                    <div>
                        <img src="./img/linkedin.svg" alt="">
                        <a href="">LinkedIn</a>
                    </div>
                </section>
                <nav class="nav-links">
                    <a href="">Work</a>
                    <a href="">About</a>
                    <a href="">Blog</a>
                    <a href=""><div>Contact Me</div></a>
                </nav>
                <div class="burger">
                    <div></div>
                </div>
            </header>
        
        `
    }
}

export { Header }
