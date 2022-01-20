export const Zettelkasten = () => {
    const zettels = Array.from(document.getElementById("zettels").children)
    const tags = {}
    // create a graph of tags
    zettels.forEach(z => {
        for (let tag of z.attributes) {
            if (tag.name !== "id" && tag.name != "class") {
                tags[tag.name] = tags[tag.name] === undefined ? [z] : [...tags[tag.name], z]
            }
        }
    })

    console.log(tags)
    const activeTags = new Set()

    const toggleActiveTag = (tag) => {
        if (activeTags.has(tag)) {
            activeTags.delete(tag)
        } else {
            activeTags.add(tag)
        }
        console.log(activeTags)
    }

    const makeTag = (tag) => {
        let element = document.createElement("div");
        element.innerText = tag
        element.onclick = () => toggleActiveTag(tag)
        return element
    }

    const tagsElement = document.getElementById("tags")
    Object.keys(tags).forEach(t => tagsElement.appendChild(makeTag(t)))

    /*
     *TODO
     - If activeTags is empty then render everything
     - If activeTags contains stuff then only render elements that
       have matching attributes
     * */
}
