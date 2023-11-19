const continueButton = document.querySelector('#continue-button');

continueButton.onclick = () => {
  const coordinates = '51.23067160739562, 4.414336896383585'
  const locationName = 'ZNA_Cadix';
  const nextPage = 'stop2-parkbrug';
  location.assign(`../navigate/index.html?coordinates=${coordinates}&locationName=${locationName}&nextPage=${nextPage}`)
}
