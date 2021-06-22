// `www.thecocktaildb.com/api/json/v1/1/random.php`
const cocktailDiv = document.querySelector('#data-container')
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

