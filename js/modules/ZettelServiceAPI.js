const baseUrl = "https://www.zettels.io:8443"

const converter = new showdown.Converter()

const renderZettelModal = (zettel) => {
    let modal = document.querySelector('#modal')
    let content = modal.children[0]
    let contentArr = zettel.content.split('\n')
    let tagsIndex = contentArr.indexOf("## Tags")
    let contentSubArr = contentArr.slice(0, tagsIndex)
    let markdownStr = contentSubArr.join('\n')
    let tags = contentArr[tagsIndex+1]

    let html = converter.makeHtml(markdownStr)

    html += "<h2>Tags</h2>"
    html += `<p>${tags}</p>`
    html += "<div id=\"close-btn\">Close Zettel</div>"
    content.innerHTML = html
    const closeBtn = document.querySelector('#close-btn')
    const closeModal = () => {
        modal.style.display = 'none'
    }
    closeBtn.addEventListener('click', closeModal)
    modal.style.display = 'block'
}

const requestZettel = async (zettelId) => {
    const request = {
        method: "GET",
        headers: {
            "Content-Type": "appplication/json"
        }
    }
    let response = await fetch(`${baseUrl}/zettels/${zettelId}`, request)
    if (response.status !== 200) {
        return Promise.reject(`Request failed with status: ${response.status}`)
    }
    let data = await response.json()
    return data
}

const fetchZettel = async (zettelId) => {
    let zettel = {}
    try {
        zettel = await requestZettel(zettelId)
    } catch(err) {
        zettel.id = 0
        zettel.content = "# Whoops! Something Went Wrong\nSorry, please try again later!\n## Tags\n#server500"
    }
    renderZettelModal(zettel)
}

