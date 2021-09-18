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
    let left = gsap.timeline({ delay: 0.7, onComplete: callback })
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
    let right = gsap.timeline({ delay: 0.7 })
    right.from("#cpu-svg", {opacity: 0, y: 20, duration: 0.4})
    right.from("#Path_7", {y: 0, duration: 1}, 0.7)
    right.from("#Path_6", {y: -17, duration: 1}, 0.7)
    right.from("#Path_13", {y: 238, duration: 1}, 0.7)
    right.from("#Path_14", {y: 246, duration: 1}, 0.7)
    right.from("#Path_16", {y: 100, x: 200,  duration: 1}, 0.7)
    right.from("#Path_17", {y: -72, x: 100,  duration: 1}, 0.7)
    right.from("#Path_10", {y: 155, x: 170, duration: 1}, 0.7)
    right.from("#Path_11", {y: -17, x: 73, duration: 1}, 0.7)
    right.from("#Path_18", {y: -150, duration: 1}, 0.7)
    right.from("#Path_19", {y: -150, duration: 1}, 0.7)
    right.from("#Path_20", {y: -150, duration: 1}, 0.7)
    right.from("#Path_21", {y: -130, duration: 1}, 0)
}


export { HeroGSAP }
