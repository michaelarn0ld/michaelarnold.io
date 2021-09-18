/* ------------------------------------------------------------
 * Hero GSAP animates the content and svg on the home page hero 
 * ------------------------------------------------------------
 *
 * There are two gsap timelines that are a part of this module:
 *                      
 *                      - left: handles the GSAP animations for the text
 *                              content and the buttons
 *                      
 *                      - right: handles the GSAP animations for the svg
 *
 * The function requires an argument which is a callback function that is run
 * after the left side timeline completes. The callback function is the 
 * "typewriter" from the Typewriter module.
 *
 * This method ensures that the "typewriter" will not begin until gsap has 
 * fully animated all of the content on the left side of the hero
 *
 * ------------------------------------------------------------
 *
 * ------------------------------------------------------------ */

const HeroGSAP = (callback) => {
    
    // left side (text content & buttons) of hero
    let left = gsap.timeline({ onComplete: callback })
    left.fromTo(
        ".hero-content > h4",
        {opacity: 0, y: 30},
        {opacity: 1, y: 0, duration: 0.4}
    )
    left.fromTo(
        ".hero-content > section",
        {opacity: 0, y: 30},
        {opacity: 1, y: 0, duration: 0.4}
    )
    left.fromTo(
        ".hero-content > div",
        {opacity: 0, y: 30},
        {opacity: 1, y: 0, duration: 0.4}
    )

    // right side (svg graphic) of hero
    let right = gsap.timeline()
}


export { HeroGSAP }
