// `www.thecocktaildb.com/api/json/v1/1/random.php`
const cocktailDiv = document.querySelector('#data-container')
// const button = document.querySelector('button')

// console.log(cocktailDiv)

const getCocktailList = async () => {
  try {
    const getCocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    const response = await axios.get(getCocktailURL)
    // console.log(response.data.drinks[0])
    const cocktailList = Object.keys(response.data.drinks[0])
    console.log(cocktailList)
  }
  catch (error) {
  console.error(error)
  }
}

getCocktailList()





// adding event listener for button to grab data from API
// button.addEventListener('click', getCocktailList)