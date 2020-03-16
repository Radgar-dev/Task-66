const defaultTab = ["walcz", "przemyśl to jeszcze raz"]
let resultTab = ["walcz", "przemyśl to jeszcze raz"];

const divshow = document.getElementById('show')

const input = document.querySelector('input');
const btnAdd = document.querySelector('button');
const btnReset = document.getElementById('reset');
const btnAdvice = document.getElementById('showAdvice');
const btnCapa = document.getElementById('showCapabilities');
const div = document.querySelector('div');

btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    const newResult = input.value;
    if (input.value.length) {
        for (result of resultTab) {
            if (result === newResult) {
                alert("Already added");
                return
            }
        }

    }
    div.textContent += newResult + ", ";
    resultTab.push(newResult);
    console.log(resultTab);
    input.value = '';
    // alert(`Dodałeś ${newResult}`)

})

btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    resultTab = [];
    input.value = '';
    console.log(resultTab)
    alert("Entries reset")
    div.textContent = '';
})

btnCapa.addEventListener('click', (e) => {
    e.preventDefault();
    alert(defaultTab + " " + resultTab)

})

btnAdvice.addEventListener('click', (e) => {
    e.preventDefault();
    const randomAdvice = Math.floor(Math.random() * resultTab.length)
    divshow.textContent = `${resultTab[randomAdvice]}`;


})