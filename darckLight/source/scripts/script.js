import {renderFooter, renderHomeMain, renderAuthorMain} from './functions.js'
import { goHome, goAuthor } from './variables.js'

renderFooter()
renderHomeMain()

goHome.addEventListener('click', () => renderHomeMain())
goAuthor.addEventListener('click', () => renderAuthorMain())