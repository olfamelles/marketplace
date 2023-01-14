const heroName = document.querySelector('input[data-name]');
const heroSex = document.querySelector('input[data-heroSex]');
const heroSpecialty = document.querySelector('select[data-heroSpecialty]');
const heroLevel = document.querySelector('select[data-heroLever]');
const buttonAdd = document.querySelector('button[data-add]');

buttonAdd.addEventListener('click', function () {

    if(heroName.value === '') {
        heroName.placeholder = "Це обов'язкове поле";
        console.log('Наявне пусте поле');

    } else {
        console.log('Name - ', heroName.value);
        console.log('Sex - ', heroSex.value);
        console.log('Specialty - ', heroSpecialty.value);
        console.log('Level - ', heroLevel.value);
    };
} );