const baseUrl = "http://ec2-54-176-135-148.us-west-1.compute.amazonaws.com:8080"

const fetchZettel = async (zettelId) => {
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
    console.log(data)
}
