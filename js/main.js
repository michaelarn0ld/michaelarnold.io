/* ----------------
 *  Module Imports
 * ---------------- */
 
import { MobileNavbarView } from './modules/MobileNavbarView.js'
import { Typewriter } from './modules/Typewriter.js'
import { HeroGSAP } from './modules/HeroGSAP.js'
import { EmailContactService } from './modules/EmailContactService.js'
import { IssueService } from './modules/IssueService.js'
import { Zettelkasten } from './modules/Zettelkasten.js'


/* -----------------------
 *  Variable Declarations
 * ----------------------- */

// Get the current page so we only run the functions pertaining to that page
const url = location.href
const pageName = url.substring(url.lastIndexOf('/')+1)

// HTML element, cursor, and array of strings for Typewriter module
const heroSpan = document.querySelector("#hero-txt")    
const heroCursor = document.querySelector(".hero-cursor")
const heroWords = [                                    
    'an Autodidact',
    'a Technologist',
    'a Polyglot',
    'an Engineer'
]


/* ------
 *  Main
 * ------ */

const main = () => {
    
    // Mobile Navbar View allows the navbar layout to change on mobile screens
    MobileNavbarView()

    // Hero GSAP calls Typewriter after it finishes the animation
    pageName == "" && HeroGSAP(() => Typewriter(heroSpan, heroCursor, heroWords))

    // Zettelkasten for blog
    pageName == "zettels.html" && Zettelkasten()

    // Email Contact Service send emails from contact form submission
    pageName == "contact.html" && EmailContactService()

    // Issue Service to submit website bug fixes
    pageName == "issue.html" && IssueService()
}

main()
