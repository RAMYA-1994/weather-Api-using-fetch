
function weatherData(){
 
  let cityName=document.getElementById('cityName').value;
  console.log(cityName)
  fetch("https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=7ba030a08ac1054ad66d68a246c26568")
  .then(res=>res.json()).then(data =>{

let weatherCard=document.getElementById('weatherCard');
  weatherCard.innerHTML=`<div class="card" style="width: 18rem;">
  <img src="https://cdn5.vectorstock.com/i/1000x1000/68/34/abstract-day-weather-image-set-vector-4306834.jpg"
   alt="weather image">
  <div class="card-body">
    <h5 class="card-title">weather Data</h5>
    <p class="card-text">Temperature:${data.main.tempt}</p>
    <p class="card-text">Windspeed:${data.wind.speed}</p>

   
  </div>
</div>`
 } )


}


// weatherData()

