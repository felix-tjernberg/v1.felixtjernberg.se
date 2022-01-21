export default function toggleNavigation(target) {
  console.log(target)
  target.previousSibling.toggleAttribute('data-show-navigation')
  target.textContent =
    target.textContent == 'Hide navigation'
      ? 'Show navigation'
      : 'Hide navigation'
}
