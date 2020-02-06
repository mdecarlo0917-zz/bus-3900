export let carPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    let fail = Math.random() >= 0.75;

    if (fail) {
      reject("This failed");
    } else {
      let manufacturers = [
        "Chevrolet",
        "Jeep",
        "BMW",
        "Toyota",
        "Honda",
        "Subaru",
        "Mazda",
        "Lexus",
        "Nissan"
      ];
      let index = Math.floor(Math.random() * 9);
      resolve(manufacturers[index]);
    }
  }, 5000);
});

export function getCatFact() {
  console.log("Getting a cat fact");

  getNewFact();

  function getNewFact() {
    let request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts/random"
    );
    request.send();

    request.addEventListener("load", function(response) {
      let res = JSON.parse(response.target.response);
      console.log(res.text);
      updateFact(res.text);
    });
  }

  function updateFact(fact) {
    document.getElementById("cat-fact").innerText = fact;
  }
}
