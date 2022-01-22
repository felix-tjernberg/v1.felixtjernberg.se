export default function toggleLineClamp(target) {
  target.previousSibling.toggleAttribute('data-expanded')
  target.firstChild.textContent =
    target.firstChild.textContent == 'Reveal text'
      ? 'Conceal text'
      : 'Reveal text'
}
