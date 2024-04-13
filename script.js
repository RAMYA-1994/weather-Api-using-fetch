
function weatherData(){
    var res=fetch`https://api.openweathermap.org/data/2.5/weather?q
    =${cityName}&appid=7ba030a08ac1054ad66d68a246c26568`
    console.log(res)
let cityName=document.getElementsByClassName('cityName').value;
res.then((data)=>data.json()).then((data1)=>(console.log(data1)))
let weatherCard=document.getElementsByClassName('weatherCard');
  weatherCard.innerHTML=`<div class="card" style="width: 18rem;">
  <img src=https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos
  -vectors%2Fweather&psig=AOvVaw1l3Py0g6u-8cn47-8Pt0DD&ust=1713117818094000&source=
  images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDyiMzjv4UDFQAAAAAdAAAAABAE alt="weather image">
  <div class="card-body">
    <h5 class="card-title">weather Data</h5>
    <p class="card-text">Temperature:${result.main.tempt}</p>
    <p class="card-text">Windspeed:${result.wind.speed}</p>
   
   
  </div>
</div>`



}


weatherData()

