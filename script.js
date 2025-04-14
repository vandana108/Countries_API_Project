// fetch('https://restcountries.com/v3.1/all')
// .then((res) => res.json())
// .then((data)=>{
//   data.forEach((country) => {
//     console.log(country);
//   })
// })

const countryCard= document.createElement('a')
countryCard.classList.add('countryCard')

// const cardImg = document.createElement('img')
// cardImg.src= 'https://flagcdn.com/de.svg'
// countryCard.append(cardImg)

const cardHTML ='<img src="https://flagcdn.com/de.svg" alt="flag" />
<div class="card-text">
  <h3 class="card-title">Iceland</h3>
  <p><b>Population: </b>87,770,900</p>
  <p><b>Region: </b>Europe</p>
  <p><b>Capital: </b>Berlin</p>
</div>'


countryCard.innerHTML =cardHTML
console.log(countryCard)
