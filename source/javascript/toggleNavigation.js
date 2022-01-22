export default function toggleNavigation(target) {
  target.previousSibling.toggleAttribute('data-show-navigation')
  target.textContent =
    target.textContent == 'Hide navigation'
      ? 'Show navigation'
      : 'Hide navigation'
}
