export function getImageFromAPI(query) {
  return fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.unsplashApi}`)
}