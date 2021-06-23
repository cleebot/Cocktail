// `www.thecocktaildb.com/api/json/v1/1/random.php`
const cocktailDiv = document.querySelector('#data-container')
// const button = document.querySelector('button')

// console.log(cocktailDiv)

const getCocktailList = async () => {
  try {
    const getCocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    const response = await axios.get(getCocktailURL)
    // console.log(response.data.drinks)
    const cocktailList = response.data.drinks
    // console.log(cocktailList)
    for (let i = 0; i < cocktailList.length; i++)
    console.log(cocktailList[i].strDrink)
  }
  catch (error) {
  console.error(error)
  }
}

getCocktailList()





// adding event listener for button to grab data from API
// button.addEventListener('click', () => {
// removeCocktail()
// getCocktailList()
// })

//removing previous cocktail
// function removeCocktail() {
//   while (div.lastChild) {
//   div.removeChild(div.lastChild)
// }
// }