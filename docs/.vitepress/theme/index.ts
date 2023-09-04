import { h } from 'vue'
import Theme from 'vitepress/theme'
import '../style/vars.css'
import '../style/main.css'
import 'uno.css'

// import HomePage from '../components/HomePage.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      // 'home-features-after': () => h(HomePage),
    })
  },
}
