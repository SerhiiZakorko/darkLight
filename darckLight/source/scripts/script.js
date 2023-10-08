import {renderFooter, renderHomeMain, renderAuthorMain, renderCompanyMain, renderArticlesMain} from './functions.js'
import {mainLogo, goHome, goAuthor, goCompanies, goArticles } from './variables.js'

renderFooter()
renderHomeMain()
mainLogo.addEventListener('click', () => renderHomeMain())
goHome.addEventListener('click', () => renderHomeMain())
goAuthor.addEventListener('click', () => renderAuthorMain())
goCompanies.addEventListener('click', () => renderCompanyMain()) 
goArticles.addEventListener('click', () => renderArticlesMain()) 