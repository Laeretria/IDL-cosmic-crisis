const continueButton = document.querySelector('#continue-button');

continueButton.onclick = () => {
  const coordinates = '51.2287694781101, 4.4047231686325174'
  const locationName = 'Mas';
  const nextPage = 'stop4-whisperer'; // pagina bestaat nog niet, die moeten jullie aanmaken
  location.assign(`../navigate/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}
