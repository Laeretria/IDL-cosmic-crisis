const continueButton = document.querySelector('#continue-button');

continueButton.onclick = () => {
  const coordinates = '51.22824052866616, 4.406153302731023'
  const locationName = 'Whisperer';
  const nextPage = 'havenhuis'; // pagina bestaat nog niet, die moeten jullie aanmaken
  location.assign(`../navigate/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}
