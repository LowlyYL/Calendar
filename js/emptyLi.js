export function emptyLi() {
    let emptyLi = document.createElement('li')
    emptyLi.setAttribute('class', 'emptyLi')
    emptyLi.innerText = ' '
    return emptyLi
}