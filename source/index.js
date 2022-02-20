import 'Stylesheet/reset.css'
import 'Stylesheet/global-variables.css'
import 'Stylesheet/global.css'
import 'Stylesheet/shared-classes.css'
import 'Stylesheet/navigation.css'
import 'Stylesheet/header.css'
import 'Stylesheet/im-a.css'
import 'Stylesheet/fullstack-developer.css'
import 'Stylesheet/football-coach.css'
import 'Stylesheet/steam-nerd.css'
import 'Stylesheet/stuff-made.css'
import 'Stylesheet/contact.css'
import 'Stylesheet/footer.css'
import 'Stylesheet/hacks.css'

import toggleAllowProcessIntensive from 'Javascript/toggleAllowProcessIntensive.js'
import toggleLineClamp from 'Javascript/toggleLineClamp.js'
import toggleNavigation from 'Javascript/toggleNavigation.js'

document.querySelector('#test1').addEventListener('click', () => {
  toggleAllowProcessIntensive()
})

document
  .querySelectorAll(
    '#close-navigation-button, #navigation-list a, #open-navigation-button'
  )
  .forEach((element) => {
    return element.addEventListener('click', () => {
      toggleNavigation()
    })
  })

document.querySelectorAll('.line-clamp').forEach((element) => {
  return element.addEventListener('click', ({ target }) => {
    toggleLineClamp(target)
  })
})
