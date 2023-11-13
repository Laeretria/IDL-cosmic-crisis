const startButton = document.querySelector('#start-btn');

startButton.onclick = () => {
  const coordinates = '51.23001101968917, 4.417763301461334'
  const locationName = 'Viaduct';
  const nextPage = 'zna';
  location.assign(`../navigate/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}



