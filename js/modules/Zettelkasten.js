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
    console.log(Object.keys(tags))
}
