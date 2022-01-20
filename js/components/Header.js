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
                <a href="/">michaelarnold<span>.</span>io</a>
                <section>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.254" height="27.072" viewBox="0 0 29.254 27.072">
                          <path id="Icon_feather-gitlab" data-name="Icon feather-gitlab" d="M28.24,18.272,15.087,27.831,1.934,18.272a1.037,1.037,0,0,1-.371-1.161L3.07,12.443,6.084,3.168a.519.519,0,0,1,.136-.2.531.531,0,0,1,.716,0,.519.519,0,0,1,.136.222l3.013,9.25h10L23.1,3.168a.519.519,0,0,1,.136-.2.531.531,0,0,1,.716,0,.519.519,0,0,1,.136.222L27.1,12.468l1.568,4.644a1.037,1.037,0,0,1-.432,1.161Z" transform="translate(-0.485 -1.759)" fill="none" stroke="#62fa88" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        </svg>
                        <a href="https://gitlab.com/michaelarn0ld" target="_blank">GitLab</a>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                          <path id="Icon_ionic-logo-linkedin" data-name="Icon ionic-logo-linkedin" d="M27.5,4.5H6.636A2.039,2.039,0,0,0,4.5,6.447v20.91A2.2,2.2,0,0,0,6.636,29.5H27.494A2.088,2.088,0,0,0,29.5,27.358V6.447A1.917,1.917,0,0,0,27.5,4.5ZM12.249,25.339H8.668V14.2h3.582ZM10.582,12.51h-.026a1.838,1.838,0,0,1-1.889-1.921A1.85,1.85,0,0,1,10.6,8.668a1.845,1.845,0,0,1,1.915,1.921A1.849,1.849,0,0,1,10.582,12.51ZM25.339,25.339H21.757V19.25c0-1.459-.521-2.455-1.817-2.455A1.96,1.96,0,0,0,18.1,18.117,2.411,2.411,0,0,0,17.98,19v6.343H14.4V14.2H17.98v1.55a3.625,3.625,0,0,1,3.23-1.81c2.351,0,4.129,1.55,4.129,4.891v6.506Z" transform="translate(-4.5 -4.5)" fill="#62fa88"/>
                        </svg>
                        <a href="https://www.linkedin.com/in/michaelarnoldcpp/" target="_blank">LinkedIn</a>
                    </div>
                </section>
                <nav class="nav-links">
                    <a href="/work.html">Work</a>
                    <a href="/about.html">About</a>
                    <a href="/blog/blog.html">Zettels</a>
                    <a href="/contact.html"><div>Contact Me</div></a>
                </nav>
                <div class="burger">
                    <div></div>
                </div>
            </header>
        
        `
    }
}

customElements.define('header-component', Header)
