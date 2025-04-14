
const countriesContainer = document.querySelector('.countries-container')
fetch('https://restcountries.com/v3.1/all')
.then((res) => res.json())
.then((data)=>{
  data.forEach((country) => {
    console.log(country);
    const countryCard= document.createElement('a')
    countryCard.classList.add('country-card')
    countryCard.href = `/country.html?name=${country.name.common}?`

// const cardImg = document.createElement('img')
// cardImg.src= 'https://flagcdn.com/de.svg'
// countryCard.append(cardImg)

countryCard.innerHTML =`
   <img src="${country.flags.svg}" alt="flag" />
  <div class="card-text">
      <h3 class="card-title">${country.name.common}</h3>
      <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
      <p><b>Region: </b>${country.region}</p>
      <p><b>Capital: </b>${country.capital?.[0]}</p>
  </div>
`

// countryCard.innerHTML =cardHTML
countriesContainer.append(countryCard)

  })
})

// const countriesContainer = document.querySelector('.countries-container')
// const countryCard= document.createElement('a')
// countryCard.classList.add('country-card')

// const cardImg = document.createElement('img')
// cardImg.src= 'https://flagcdn.com/de.svg'
// countryCard.append(cardImg)

// const cardHTML =`
//   <img src="https://flagcdn.com/de.svg" alt="flag" />
//   <div class="card-text">
//       <h3 class="card-title">Germany</h3>
//       <p><b>Population: </b>87,770,900</p>
//       <p><b>Region: </b>Europe</p>
//       <p><b>Capital: </b>Berlin</p>
//   </div>
// `


// countryCard.innerHTML =cardHTML
// countriesContainer.append(countryCard)

