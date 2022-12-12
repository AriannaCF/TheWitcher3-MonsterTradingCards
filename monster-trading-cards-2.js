console.log('So much more efficient!')

//Global Variables
const checks = document.querySelectorAll('.checkbox');
const info = {
    classes: ['curse', 'draco', 'eleme', 'hybri', 'insec', 'necro', 'ogroi', 'relic', 'spect', 'vampi'],
};
const allCards = document.querySelectorAll('.card');
const selectAll = document.querySelector('#selectAllButton');
const deselectAll = document.querySelector('#deselectAllButton');

//add event listeners to each check to change display of individual classes
for (let i=0;i<checks.length;i++) {
    checks[i].addEventListener('click', function() {
        if (checks[i].checked===true) {
       let currentCards = document.querySelectorAll(`.${info.classes[i]}`);
       currentCards.forEach(currentCard => {
        currentCard.style.display='block'
       });
        } else if (checks[i].checked===false) {
            let currentCards = document.querySelectorAll(`.${info.classes[i]}`);
            currentCards.forEach(currentCard => {
                currentCard.style.display='none'
               });
        }
    })
};

//select and deselect all classes and checkboxes
selectAll.addEventListener('click', function() {
    allCards.forEach(allCard => {
        allCard.style.display='block';
    });
    checks.forEach(check => {
        check.checked=true;
    })
});

deselectAll.addEventListener('click', function() {
    allCards.forEach(allCard => {
        allCard.style.display='none';
    });
    checks.forEach(check => {
        check.checked=false;
    })
});

