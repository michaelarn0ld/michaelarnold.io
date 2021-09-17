/* ----------------
 *  Module Imports
 * ---------------- */
 
import { MobileNavbarView } from './modules/MobileNavbarView.js'
import { Typewriter } from './modules/Typewriter.js'


/* -----------------------
 *  Variable Declarations
 * ----------------------- */

// HTML element, cursor, and array of strings for Typewriter module
const heroSpan = document.querySelector("#hero-txt")    
const heroCursor = document.querySelector(".hero-cursor")
const heroWords = [                                    
    'a Melophile',
    'a Technologist',
    'an Engineer'
]

// Other descriptions for variable declarations here ....


/* ------
 *  Main
 * ------ */

const main = () => {
    MobileNavbarView()
    Typewriter(heroSpan, heroCursor, heroWords)
}

main()
