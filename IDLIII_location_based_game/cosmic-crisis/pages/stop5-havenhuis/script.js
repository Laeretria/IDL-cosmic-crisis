const continueButton = document.querySelector('#continue-button');

continueButton.onclick = () => {
  const coordinates = '51.23144531436301, 4.407443281784137'
  const locationName = 'Havenhuis';
  const nextPage = 'stop6'; // pagina bestaat nog niet, die moeten jullie aanmaken
  location.assign(`../navigate/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}
