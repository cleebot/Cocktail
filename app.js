// `www.thecocktaildb.com/api/json/v1/1/random.php`
const cocktailDiv = document.querySelector('#data-container')
const button = document.querySelector('button')

// console.log(cocktailDiv)

// async function to call the API and appending to the DOM

const getCocktailList = async () => {
  try {
    const getCocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    const response = await axios.get(getCocktailURL)
    const cocktailList = response.data.drinks
    for (let i = 0; i < cocktailList.length; i++) {


      let cocktailName = document.createElement('h2')
      cocktailName.textContent = cocktailList[i].strDrink
      cocktailDiv.append(cocktailName)

      let cocktailPic = document.createElement('img')
      cocktailPic.setAttribute('src', cocktailList[i].strDrinkThumb)
      cocktailDiv.append(cocktailPic)

      let cocktailRecipe = document.createElement('p')
      cocktailRecipe.textContent = cocktailList[i].strInstructions
      cocktailDiv.append(cocktailRecipe)
      
    }
    
    return cocktailList
      
    
  }
  catch (error) {
  console.error(error)
  }
}



// adding event listener for button to grab data from API
button.addEventListener('click', () => {
removeCocktail()
getCocktailList()
})

//removing previous cocktail
function removeCocktail() {
  while (cocktailDiv.lastChild) {
  cocktailDiv.removeChild(cocktailDiv.lastChild)
}
}