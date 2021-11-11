
document.addEventListener('DOMContentLoaded', () => { updatePosts() })

function updatePosts() {
    let promises = fetch("http://localhost:3000/api/all",).then(res => {
        return res.json()
    })
    promises.then(json => {
        console.log(json)
    })
}
function mewPost() {

}