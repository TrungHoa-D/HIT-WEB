var countryName = "Vietnam";
getCountryData(countryName);
const btn = document.getElementById("btn");
btn.addEventListener("click", () =>{
    countryName = document.getElementById("name");
    getCountryData(countryName.value);
});
function getCountryData(name){
    fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(response => response.json())
        .then(data => {
            let country = data[0];
            const flag = country.flags.png;
            const name = country.name.common;
            const region = country.region;
            const population = country.population;
            const language = Object.values(country.languages);
            const currencies = Object.values(country.currencies);
            const currencyInfo = currencies.map(currency => `${currency.name} (${currency.symbol})`);
            const flagTag = document.querySelector('.country__img');
            flagTag.src= flag;
            const countryData = document.querySelector('.country__data');
            countryData.innerHTML = `
            <h3 class="country__name">COUNTRY: ${name}</h3>
            <h4 class="country__region">REGION: ${region}</h4>
            <p class="country__row"><span>👫</span>POP people: ${population}</p>
            <p class="country__row"><span>🗣️</span>LANG: ${language}</p>
            <p class="country__row"><span>💰</span>CUR: ${currencyInfo.join(', ')}</p>
            `;
        })
        .catch(error => {
            console.error('Eror: '+error);
        });
}
