export default function toggleNavigation() {
  document
    .querySelector('#navigation-list')
    .toggleAttribute('data-show-navigation')
  const navigationButton = document.querySelector('#navigation-button')
  navigationButton.textContent =
    navigationButton.textContent == 'Hide navigation'
      ? 'Show navigation'
      : 'Hide navigation'
}
