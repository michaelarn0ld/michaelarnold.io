export const Zettelkasten = () => {
    const apiUrl = (id) => `https://gitlab.com/api/v4/projects/29800188/repository/files/${id}%2fREADME.md?ref=main`

    const fetchZettel = async (id) => {
        const response = await fetch(apiUrl(id))
        return response.json()
    }

    fetchZettel("202201191736")
        .then(data => {
            console.log(atob(data.content))
        })

    /*
     * TODO
     * - parse decoded data to HTML
     * - somehow render that to the page?
     * */
}
