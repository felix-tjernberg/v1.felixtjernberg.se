export default function toggleAllowProcessIntensive() {
  const glassElements = document.querySelectorAll('.glass-background')
  glassElements.forEach((element) => {
    element.toggleAttribute('data-allow-process-intensive')
  })
}
