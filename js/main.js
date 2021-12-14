let Wrapper = document.getElementById('btnWrapper')
let newResult = document.getElementById('result')
let remove = document.getElementById('refresh')

let alphabet = 97;

for (let i = 0; i < 26; i++) {
    let LETBTN = document.createElement('button')
    LETBTN.classList.add("class", "button")
    LETBTN.textContent = String.fromCharCode(alphabet)
    Wrapper.appendChild(LETBTN)

    alphabet++

    LETBTN.addEventListener('click', () => {
        let newBtn = LETBTN.cloneNode(true)
        newResult.appendChild(newBtn)
    })
}

remove.addEventListener('click', (e) =>{
    newResult.lastElementChild.remove()
})
