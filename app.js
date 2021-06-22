// `www.thecocktaildb.com/api/json/v1/1/random.php`

const getCocktailList = async () => {
  try {
    const getCocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    const response = await axios.get(getCocktailURL)
    console.log(response)
  }
  catch (error) {
  console.error(error)
  }
}

getCocktailList()