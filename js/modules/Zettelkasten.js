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
        const thisTag = document.getElementById(tag)
        thisTag.classList.toggle("active-zettel")
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
        const parent = document.createElement("div")
        parent.id = tag
        const child = document.createElement("div")
        child.innerText = `#${tag}`
        parent.appendChild(child)
        parent.onclick = (e) => toggleActiveTag(tag)
        return parent
    }

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

    const tagsElement = document.getElementById("tags")
    Object.keys(tags).forEach(t => tagsElement.appendChild(makeTag(t)))
    renderZettels()

    /*
     *TODO
     - zk is a "lifelong project" -eliot
     - visualize connections of zettels with UI graph / web 
        * when you click on tags it highlights (with colors) the
        nodes in the web that have a matching tag
     * */
}
