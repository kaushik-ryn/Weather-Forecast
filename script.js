const button = document.getElementById('button');
const input = document.getElementById('input');

const city = document.getElementById('city');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const isday = document.getElementById('isday');

async function getdata(cityname){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=e4b789d7e62046bdb33145155240710&q=${cityname}&aqi=yes`
    )
    return await promise.json();
}

button.addEventListener("click", async ()=>{
    const cityname = input.value;
    const result = await getdata(cityname);
    console.log(result);

   city.innerHTML = `${"Weather "+ result.location.name}, ${result.location.country}`;
   date.innerText = "Humidity :" + result.current.humidity;
   temp.innerText = `${"Temperature : "+ result.current.temp_c}°C`;
   isday.innerText = "Date : " + result.location.localtime;


})