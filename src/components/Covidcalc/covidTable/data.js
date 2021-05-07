const axios = require('axios').default;

var fs = require("fs");

const getData = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};


getData("https://covidtracking.com/api/states").then(results => {
  fs.writeFile("./covidtest1.json", JSON.stringify(results, null, 4), (err) => {
    if (err) {
      console.error(err);
      return;
    };
    console.log("File has been created");
  });
}).catch(err => {
  console.log(err);
})

var testHTMl = document.getElementById("test")
testHTMl.innerHTML(fs.readFile("./covidtest1.json"))
//console.log(getData);





