/* ------------------------------------------------------------------------
 * Typewriter is a module that types and clears words on the home page hero
 * ------------------------------------------------------------------------
 *
 * 
 * The function loops through an array of strings to give the effect 
 * of a typewriter. 
 *                  
 *                  - Start with the first character of the first string and
 *                    add each character to the target node until the end
 *                    of the string. 
 *                  
 *                  - When the end is reached, wait some time, then reverse 
 *                    through the string, remove each character from the node
 *                    along the way.
 *                  
 *                  - When the node is empty, choose the next string of the 
 *                    array.
 *
 *                  - Keep the last string of the input array displayed on
 *                    the browser
 *
 * 
 * The function requires three arguments: a target HTML element where the text
 * will be typed, a cursor HTML element which sits in front of the target 
 * element, and an array of strings to be typed.
 *
 * The cursor element must be an adjacent child of the same parent as the
 * target element. For example:
 * 
 * <section>
 *     <span id="target"></span>
 *     <span class="cursor">|</span>
 * </section>
 * 
 * -------------------------------------------------------------------------
 *
 * ------------------------------------------------------------------------- */

export const Typewriter = (element, cursor, words) => {

    let delay = 0       // keep track of global delay for setTimeout()
    let i = 0           // keep track of what word in the array we are at

    for (let word of words) {
        i++                               // i = 1 -> first word being examined
        i > 1 ? delay += 1500 : delay += 300   // pause before typing next word
        let typewriter = ""
        for (let char of word) {
            delay += 100            // delay adding chars to current word
            setTimeout( () => {
                typewriter += char
                element.innerHTML = typewriter
            }, delay)
        }
        if (i != words.length) {    // keep the last word displayed on screen
        delay += 2000               // allow the typed word to briefly pause
            for (let char of word) {
                delay += 100        // delay deleting chars from current word
                setTimeout( () => {
                    typewriter = typewriter.slice(0,-1) // delete last char...
                    element.innerHTML = typewriter      // ...from end of word
                }, delay)
            }
        } else {            
            delay += 100                // add period to end
            setTimeout( () => {
                element.innerHTML += "<span>.</span>"   
            }, delay)                                  
            delay += 2750                // remove cursor from end
            setTimeout( () => {
                cursor.classList.remove("hero-cursor")
                cursor.classList.add("cursor-gone")
            }, delay)                                  
        }                                             
    }
}
