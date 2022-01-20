export default function toggleLineClamp(target) {
  target.previousSibling.toggleAttribute('data-expanded')
  target.textContent =
    target.textContent == 'Reveal text' ? 'Conceal text' : 'Reveal text'
}
