const options = ["opcja 1", "opcja 2"];

const addOptnios = (e) => {
    e.preventDefault();
    const input = document.querySelector('input')
    options.push(input.value);
    alert(`Dodana została opcja ${input.value}`);
    input.value = ''

}

const resetOptions = (e) => {
    e.preventDefault();
    options.length = 0;
    document.querySelector('h1').textContent = "";

}

const showAdvices = () => {
    const index = Math.floor((Math.random() * options.length))
    console.log(index)
    document.querySelector('h1').textContent = options[index];


}

const showOptions = () => {
    alert(options.join(" "))


}

document.querySelector('.add').addEventListener('click', addOptnios)

document.querySelector('.clean').addEventListener('click', resetOptions)

document.querySelector('.showAdvice').addEventListener('click', showAdvices)

document.querySelector('.showOptions').addEventListener('click', showOptions)