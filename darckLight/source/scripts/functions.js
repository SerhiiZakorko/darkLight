import {
    footerData
} from './data.js'

import { footer, dotsImgSrc} from './variables.js'

export function renderFooter(){
footer.innerHTML = `<div class='footerImagesContainer'><img class='main-logo' src = ${footerData[0].logo} alt="main-logo">
                        <div class='footerSocialIconsContainer'>${footerData[0].src.map(el => `<div class='footerSocialIconsWrapper'><img src = ${el.src} alt = ${el.alt}></div>`).join('')}</div>
                    </div>
                    <div class='${footerData[1].title}'><h3 class='footer-title'>${footerData[1].title}</h3>
                    ${footerData[1].content.map(el => `<div class = 'footerLinkWrapper'><img src = ${dotsImgSrc}><a class='footerLinks'>${el}</a></div>`).join('')}</div>
                    <div class='${footerData[2].title}'><h3 class='footer-title'>${footerData[2].title}</h3>
                    ${footerData[2].content.map(el => `<div class = 'footerLinkWrapper'><img src = ${dotsImgSrc}><a class='footerLinks'>${el}</a></div>`).join('')}</div>
                    <div class='${footerData[3].title}'><h3 class='footer-title'>${footerData[3].title}</h3>
                    ${footerData[3].content.map(el => `<div class='footerContactInfo'><h4>${el.title}</h4><a class='footerLinks'>${el.content}</a></div>`).join('')}</div>`

                }

