
// this code here is what searches the api
function search(){

    const app = document.getElementById('root');
  
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  
  app.appendChild(container);
  
  var gameID= "";
    
    //THIS IS THE CODE FOR VIDEO GAME API
    searchString = document.getElementById("GAMENAME").value;
      url = "https://api.rawg.io/api/games?key=223cbd9b75454545a8743e05c64645ff&search="+searchString+ "&page_size=9";
      fetch(url)
      .then((resp) => resp.json())
      .then(function(element) {
        console.log(element);
  
        for (i in element.results){
          console.log(element.results[i].name);
  
          const card = document.createElement('div');
          card.setAttribute('class', 'card');
   
          const h1 = document.createElement('h1');
          h1.textContent = element.results[i].name;
  
         const img = document.createElement('img');
         img.src = element.results[i].background_image;
          img.style.height = '250px'
          img.style.width = '350px'
  
  
          container.appendChild(card);
          card.appendChild(h1);
          card.appendChild(img);
          } 
  
          gameID= element.results[0].id;
          console.log(gameID)
          displayInfo(searchString, gameID)
     } 
    )
  }
  
  
  
  
   function displayInfo(searchString, gameID){
  
  
      const app = document.getElementById('info');
  
      const container = document.createElement('div');
      container.setAttribute('class', 'container');
      
      app.appendChild(container);
  
     urlMoreInfo= "https://api.rawg.io/api/games/"+gameID+"?key=223cbd9b75454545a8743e05c64645ff&page_size=1";
  
    fetch(urlMoreInfo)
      .then((resp) => resp.json())
      .then(function(element) {
        console.log(element);
          console.log(element.name);
  
          const card = document.createElement('card');
           card.setAttribute('class', 'card1');
   
          const h3 = document.createElement('h3');
          h3.textContent = element.name;
  
          const p = document.createElement('p');
          p.textContent = element.description_raw;
  
          container.appendChild(card);
          card.appendChild(h3);
          card.appendChild(p);
  
        })
  
  
  
  //THIS IS THE CODE FOR deviant API
  
   
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ff335927f9msh39686095c4a23c5p1d8c91jsn4609590eb49a',
          'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
      };
      
      fetch('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q='+searchString+'%20fan%20art&pageNumber=1&pageSize=18&autoCorrect=true', options)
      .then((resp) => resp.json())
      .then(function(art) {
        console.log(art);
        for (i in art.value){
  
          const card = document.createElement('div');
          card.setAttribute('class', 'card2');
      
          const img = document.createElement('img');
          img.src = `${art.value[i].url}`;
      
          container.appendChild(card);
          card.appendChild(img);
      
           }   
           })
    
    }
  