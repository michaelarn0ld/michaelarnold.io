const baseUrl = "http://ec2-54-176-135-148.us-west-1.compute.amazonaws.com:8080"

const renderZettelModal = (zettel) => {
    let modal = document.querySelector('#modal')
    let content = modal.children[0]
    content.innerHTML = zettel.content
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
    let zettel
    try {
        zettel = await requestZettel(zettelId)
    } catch(err) {
        zettel = "FOOBAR" // TODO: ERROR ZETTEL
    }
    renderZettelModal(zettel)
}

