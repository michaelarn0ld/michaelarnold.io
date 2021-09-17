/* -----------------------------------------------------------------
 * Mobile Navbar is a module that provides a sliding mobile nav menu
 * -----------------------------------------------------------------
 *
 * 
 * When the viewport is small enough, the standard navbar is replaced
 * by a "hamburger" button; clicking this button does three things:
 *
 *               - toggles the "nav-active" class which controls
 *                 the x-pos of the mobile nav menu.
 *                      
 *               - toggles the "burger-active" class which collapses
 *                 and expands the pseudo elements of the "hamburger"
 *
 *               - toggles the "lock-scroll" class on the body of the
 *                 html so that users cannot scroll through the mobile
 * -----------------------------------------------------------------
 *
 * ----------------------------------------------------------------- */

const MobileNavbarView = () => {
    const hamburgerMenu = document.querySelector('.burger')
    const navbarItems = document.querySelector('.nav-links')

    hamburgerMenu.addEventListener('click', () => {
        navbarItems.classList.toggle('nav-active')     // toggles mobile menu
        hamburgerMenu.classList.toggle('burger-open')  // toggles burger icon
        document.body.classList.toggle('lock-scroll')  // toggles scroll lock
    })
}

export { MobileNavbarView }
