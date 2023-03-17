import { Button, NavBar, Icon, Swipe, SwipeItem, Popup } from 'vant'
const plugins = [
  Button, NavBar, Icon, Swipe, SwipeItem, Popup
]

export default function getVant(app) {
  plugins.forEach(item => app.use(item))
}