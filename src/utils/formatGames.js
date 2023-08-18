const randomPrice = () => {
    return parseFloat((Math.random() * 60).toFixed(2));
  }


const formatGameObjs = (response) => {
    const formatedGames = response.map((game) => {
        return {
            name:game.name,
            id:game.id,
            genre: game.genres[0].name,
            genreID: game.genres[0].id,
            platforms: game.parent_platforms,
            screen_shots: game.short_screenshots,
            image: game.background_image,
            rating: game.rating,
            release : game.released,
            price: randomPrice()
            
        }
    })
    return formatedGames
    

}

export default formatGameObjs