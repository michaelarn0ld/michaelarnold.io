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
                        <svg xmlns="http://www.w3.org/2000/svg" width="25.397" height="27.028" viewBox="0 0 25.397 27.028">
                          <path id="Icon_feather-github" data-name="Icon feather-github" d="M11.323,22.893C5.378,24.676,5.378,19.921,3,19.326M19.645,26.46v-4.6a4.007,4.007,0,0,0-1.118-3.1c3.733-.416,7.657-1.831,7.657-8.323A6.467,6.467,0,0,0,24.4,5.975a6.028,6.028,0,0,0-.108-4.483s-1.4-.416-4.649,1.76a15.908,15.908,0,0,0-8.323,0c-3.246-2.176-4.649-1.76-4.649-1.76a6.028,6.028,0,0,0-.107,4.482,6.468,6.468,0,0,0-1.783,4.494c0,6.444,3.924,7.859,7.657,8.323a4.007,4.007,0,0,0-1.118,3.068v4.6" transform="translate(-1.787 -0.432)" fill="none" stroke="#62fa88" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        </svg>
                        <a href="https://github.com/michaelarn0ld" target="_blank">GitHub</a>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                          <path id="Icon_ionic-logo-linkedin" data-name="Icon ionic-logo-linkedin" d="M27.5,4.5H6.636A2.039,2.039,0,0,0,4.5,6.447v20.91A2.2,2.2,0,0,0,6.636,29.5H27.494A2.088,2.088,0,0,0,29.5,27.358V6.447A1.917,1.917,0,0,0,27.5,4.5ZM12.249,25.339H8.668V14.2h3.582ZM10.582,12.51h-.026a1.838,1.838,0,0,1-1.889-1.921A1.85,1.85,0,0,1,10.6,8.668a1.845,1.845,0,0,1,1.915,1.921A1.849,1.849,0,0,1,10.582,12.51ZM25.339,25.339H21.757V19.25c0-1.459-.521-2.455-1.817-2.455A1.96,1.96,0,0,0,18.1,18.117,2.411,2.411,0,0,0,17.98,19v6.343H14.4V14.2H17.98v1.55a3.625,3.625,0,0,1,3.23-1.81c2.351,0,4.129,1.55,4.129,4.891v6.506Z" transform="translate(-4.5 -4.5)" fill="#62fa88"/>
                        </svg>
                        <a href="https://www.linkedin.com/in/michaelarnoldcpp/" target="_blank">LinkedIn</a>
                    </div>
                </section>
                <nav class="nav-links">
                    <a href="/work.html">Porjects</a>
                    <a href="/about.html">About</a>
                    <a href="/zettels/zettels.html">Zettels</a>
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
