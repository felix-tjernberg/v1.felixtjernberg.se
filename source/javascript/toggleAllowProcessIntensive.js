export default function toggleAllowProcessIntensive() {
  const glassElements = document.querySelectorAll('.glass-background')
  glassElements.forEach((element) => {
    return element.dataset.allowProcessIntensive
      ? element.removeAttribute('data-allow-process-intensive')
      : element.setAttribute('data-allow-process-intensive', 'true')
  })
}
