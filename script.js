// Elements
const navButton = document.querySelector('.nav__button');
const contactsEl = document.querySelector('.contacts');
const searchBarEl = document.querySelector('.search-bar');
const filterButton = document.querySelector('.filter-button');
const filtersSection = document.querySelector('.filters');

// Nav button logic
navButton.addEventListener('click', function(e){
    contactsEl.style.display = contactsEl.style.display === 'none' ? 'flex': 'none';
    searchBarEl.style.display = searchBarEl.style.display === 'none' ? 'flex': 'none';
})

// filter Button logic

filterButton.addEventListener('click', function(e) {
    filtersSection.style.display = filtersSection.style.display === 'none' ? 'block' : 'none';
})