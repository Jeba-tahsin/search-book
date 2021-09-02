 const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displaySearchResult(data.docs);
        if(searchText === ''){
            alert('write something');
        }
        else{
            if(data.docs.length >0 ){
                document.getElementById('total-result').innerHTML=`Total-result: ${data.num_found}`;
            }
            else{
                document.getElementById('total-result').innerHTML="No result";
            }
        }
    });
};

 const displaySearchResult = docs => {
     const searchResult = document.getElementById('search-result');
     searchResult.textContent = "";
     docs.forEach(doc => {
         console.log(doc);
        const div = document.createElement('div');
        const imgSource = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <div class="card-body">
          <img src=${imgSource} style="height:350px">
          <h4 class="card-title fw-bold">${doc.title}</h4>
          <p class="card-title"><span class="text-secondary fw-bold">Author-name:</span> ${doc.author_name}</p>
          <p class="card-title"><span class="text-secondary fw-bold">Publisher: </span>${doc.publisher.slice(0,20)}</p>
          <p class="card-title"><span class="text-secondary fw-bold">First-publish-year:</span> ${doc.first_publish_year}</p>
        </div>
      </div>
     `;
     searchResult.appendChild(div);
     })
}