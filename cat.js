function fetchCat() {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(catPic => {
        const catImage = document.getElementById('cat-image');
        catImage.src = catPic[0].url;
      })
      .catch(error => console.error('Error fetching cat image:', error));
      document.getElementById('cat-image').hidden = false;

      fetch('https://meowfacts.herokuapp.com/')
      .then(response => response.json())
      .then(catfactsData => {
        const catFact = document.getElementById('cat-fact');
        catFact.textContent = catfactsData.data;
      })
      .catch(error => console.error('Error fetching cat fact:', error));
  }
  
     

  