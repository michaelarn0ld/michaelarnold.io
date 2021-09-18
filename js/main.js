/* ----------------
 *  Module Imports
 * ---------------- */
 
import { MobileNavbarView } from './modules/MobileNavbarView.js'
import { Typewriter } from './modules/Typewriter.js'
import { HeroGSAP } from './modules/HeroGSAP.js'


/* -----------------------
 *  Variable Declarations
 * ----------------------- */

// HTML element, cursor, and array of strings for Typewriter module
const heroSpan = document.querySelector("#hero-txt")    
const heroCursor = document.querySelector(".hero-cursor")
const heroWords = [                                    
    'an Autodidact',
    'a Technologist',
    'an Engineer'
]

// Other descriptions for variable declarations here ....


/* ------
 *  Main
 * ------ */

const main = () => {
    MobileNavbarView()
    HeroGSAP(() => Typewriter(heroSpan, heroCursor, heroWords))
}

main()
