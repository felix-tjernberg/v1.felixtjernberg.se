export default function toggleNavigation() {
  document
    .querySelector('#navigation-list')
    .toggleAttribute('data-show-navigation')
  document
    .querySelector('#open-navigation-button')
    .toggleAttribute('data-show-navigation')
}
