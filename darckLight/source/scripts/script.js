import {renderFooter, renderHomeMain, renderAuthorMain, renderCompanyMain} from './functions.js'
import { goHome, goAuthor, goCompanies } from './variables.js'

renderFooter()
//renderHomeMain()

goHome.addEventListener('click', () => renderHomeMain())
goAuthor.addEventListener('click', () => renderAuthorMain())
goCompanies.addEventListener('click', () => renderCompanyMain()) 