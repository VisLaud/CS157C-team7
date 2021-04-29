const axios = require('axios').default;

// fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("NETWORK RESPONSE NOT OK");
//     }
//   })
//   .then(function (data) {   
//     console.log(data); 
//     displayCocktail(data);
//   })
//   .catch((error) => {
//     console.error("FETCH ERROR:", error);
//   });

const getData = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// getData("https://www.thecocktaildb.com/api/json/v1/1/random.php");
getData("https://covidtracking.com/api/states");