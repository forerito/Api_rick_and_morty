let search = document.getElementById("buscador");
let main = document.querySelector("main");
search.addEventListener("keyup", characters);


function characters() {
  fetch(`https://rickandmortyapi.com/api/character/?name=${search.value}`)
    .then(response => response.json())
    .then(data => {

      const { results } = data
      let items = ``
      for (let personaje of results) {
        items +=
          `<article class="card">

      <div class="image-container">
        <img src="${personaje.image}" alt="${personaje.name}">
      </div>
      
      <div class="name">
      <h2>${personaje.name}</h2>
      
      <span>${personaje.status}</span>
      </div>
      
      </article>`
      }
      main.innerHTML = items
    })

}

characters();