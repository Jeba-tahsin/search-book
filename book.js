// book name, author, first publish, row er modde, result show(nmubr of data), errow show 
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs));
    //console.log(url);
}
 const displaySearchResult = docs => {
     console.log(docs);
 }