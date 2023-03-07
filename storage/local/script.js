document.getElementById('btn-add-name').addEventListener('click' , function(){

const inputValue = document.getElementById('btn-name-field');
const innerMan = inputValue.value;
// console.log(innerMan);

// Add value on local storage

localStorage.setItem('name' , innerMan);

})