let card = document.getElementById("cards");
console.log(card)
const key = "23113b867e597937c9c800ca6e51b87e"
let arr = []; 



function addCard(){
  document.getElementById("error").innerHTML = ""; 
  let input = document.getElementById("fourm").value; 
  console.log(input);
  //ajax request
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}&units=metric`)
    .then(response => response.json())
    // .then(function (response){return response.json()})
    .then(data => {
      console.log(data)
      let weather = data.weather[0].description
      for(let i = 0; i<arr.length;i++){
        if(arr[i]==data.name){
          document.getElementById("error").innerHTML = "You already entered that name 😩"
          return 
        }
        else{
          continue; 
        }
      }
      arr.push(data.name); 
      let cardElement = `
        <div class="cardDisplay">
          <div class = "card">
            <h1 class = "cardHeader">${data.name[0].toUpperCase()+data.name.substring(1)}</h1>
            <h2 class = "cardText">${data.main.temp}°</h2>
            <p class = "weather">${weather[0].toUpperCase()+weather.substring(1)}</p>
            <div class = "png">
              <img src ="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
            </div>
          </div>
        </div>
      `
      
      card.innerHTML += cardElement;
    })
    .catch(err => 
      document.getElementById("error").innerHTML = "Enter a valid city name 😩"
      )

  /*
  let element = document.createElement('div');
  element.classList.add('cardDisplay');
  element.innerHTML = 'blablabla'
  cards.appendChild(element);
  */
}

//HW: Find a way to manually add a second card along with the first whenever you click on the Submit button. The card will have the same information on it
//Then look into the openweather app API

//Finish add card funtion so we can work on API And stick in to click button function  


