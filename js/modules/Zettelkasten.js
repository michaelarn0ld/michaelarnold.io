/* -----------------------------------------------------------------
 * Zettelkasten is a module filters & renders Zettels to the page
 * -----------------------------------------------------------------
 *
 * 
 * The way that this module works from a high level is as follows:
 *
 *                  - Map avaiable zettel tags from Zettels array
 *
 *                  - Add avaiable zettel tags to page along with 
 *                    their click handlers
 *
 *                  - Render all Zettels to the page on inital load;
 *                    when a tag is clicked, filter Zettels down to
 *                    those that contain a matching tag
 *
 *                  - More than one tag can be selected at a time;
 *                    if there are no selected tags, then render all
 *                    Zettels
 *
 *
 * Future Goals:
 *
 *                 - Zettelkasten is a lifelong project
 *
 *                 - Eventually build it out so we can use the page
 *                   to build a web of connected Zettels so it is
 *                   easy to visualize the graph Zettelkasten graph
 *
 *                 - When Zettel nodes on this graph are clicked,
 *                   highlight other nodes & paths in the web that
 *                   contain similar tags
 * -----------------------------------------------------------------
 *
 * ----------------------------------------------------------------- */

import { zettels } from "../data/Zettels.js" 

export const Zettelkasten = () => {

    // Hold data about which tags are available & which are selected
    const activeTags = new Set()
    const tags = {}

    /**
     * Looks at the zettels and maps each tag as a unique key such that its
     * values are the zettels that contain that tag; a tag may have one or more
     * associated zettels.
     */
    zettels.forEach(z => {
        z.attributes.forEach(tag => {
            tags[tag] = tags[tag] === undefined ? [z] : [...tags[tag], z]
        })
    })

    /**
     * Remove all DOM elements from the zettel container and then render the
     * appropriate zettels. If the set is empty (no selected tags), then render
     * all the zettels, else render only the zettels that have a matching tag
     * to those in the set
     *
     * @return: void
     */
    const renderZettels = () => {
        while(zettelContainer.firstChild) {
            zettelContainer.removeChild(zettelContainer.lastChild)
        }
        activeTags.size === 0 ? 
            zettels.forEach(z => {
                zettelContainer.appendChild(makeZettelDiv(z))
            })
            : 
            zettels.forEach(z => {
                z.attributes.some(a => activeTags.has(a)) &&
                    zettelContainer.appendChild(makeZettelDiv(z))
            })
    }

    /**
     * When a tag is clicked on the page, we toggle its presence in the set
     * of active tags as well as toggle a class on the DOM element associated
     * with the tag.
     *
     * @param: String tag - zettel tag to toggle
     * @return: void
     */
    const toggleActiveTag = (tag) => {
        if (activeTags.has(tag)) {
            activeTags.delete(tag)
        } else {
            activeTags.add(tag)
        }
        const thisTag = document.getElementById(tag)
        thisTag.classList.toggle("active-zettel")
        renderZettels()
    }

    /**
     * Used to take keys (zettel tags) from the tags map and generate DOM
     * nodes that will be used to filter zettels on the page
     *
     * @param: String tag - zettel tag to generate; is a key on tags map
     * @return: a DOM node from the zettel tag (key from tags)
     */
    const makeTag = (tag) => {
        const parent = document.createElement("div")
        parent.id = tag
        parent.innerHTML = `<div>#${tag}</div>`
        parent.onclick = (e) => toggleActiveTag(tag)
        return parent
    }

    /**
     * Takes a zettel from the zettels array and generates a DOM node; links to
     * another HTML page based on the zettel ID.
     *
     * @param: Zettel zettel - zettel is destructured; see Zettels.js to see
     *                        Zettel object
     * @return: a DOM node using zettel data
     */
    const makeZettelDiv = ({attributes, content, zetId}) => {
        const zettelDiv = document.createElement("div")
        let zettelTags = ""
        attributes.forEach(a => zettelTags += `#${a} `)
        zettelDiv.innerHTML = `
            <h4>${zettelTags}</h4>
            <p>${content}<span>.</span></p>
            <a href="/zettels/${zetId}.html"><div>Read Zettel</div></a>
        `
        return zettelDiv
    }

    // Render tags and zettels on page load
    const tagsElement = document.getElementById("tags")
    const zettelContainer = document.getElementById("zettel-container")
    Object.keys(tags).forEach(t => tagsElement.appendChild(makeTag(t)))
    renderZettels()
}
