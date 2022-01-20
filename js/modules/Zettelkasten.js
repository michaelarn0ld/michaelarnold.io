import { zettels } from "./Zettels.js" 

export const Zettelkasten = () => {

    const activeTags = new Set()
    const tags = {}

    const zettelContainer = document.getElementById("zettel-container")
    zettels.forEach(z => {
        z.attributes.forEach(tag => {
            tags[tag] = tags[tag] === undefined ? [z] : [...tags[tag], z]
        })
    })

    const toggleActiveTag = (tag) => {
        if (activeTags.has(tag)) {
            activeTags.delete(tag)
        } else {
            activeTags.add(tag)
        }
        console.log(activeTags)
        renderZettels()
    }

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

    const makeTag = (tag) => {
        let element = document.createElement("div");
        element.innerText = tag
        element.onclick = () => toggleActiveTag(tag)
        return element
    }

    const makeZettelDiv = (zettel) => {
        const zettelDiv = document.createElement("div")
        zettelDiv.innerText = zettel.content
        return zettelDiv
    }

    const tagsElement = document.getElementById("tags")
    Object.keys(tags).forEach(t => tagsElement.appendChild(makeTag(t)))

    /*
     *TODO
     * */
}
