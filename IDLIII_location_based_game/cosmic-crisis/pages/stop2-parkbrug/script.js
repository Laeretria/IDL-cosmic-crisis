const continueButton = document.querySelector('#continue-button');

continueButton.onclick = () => {
  const coordinates = '51.230587286583706, 4.413112959178332'
  const locationName = 'Parkbrug';
  const nextPage = 'mas'; // pagina bestaat nog niet, die moeten jullie aanmaken
  location.assign(`../navigate/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}
