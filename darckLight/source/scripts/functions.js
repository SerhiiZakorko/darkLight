import {footerData, homeIntroProperties, autorsBooks, authorCounts, trustedCompanies} from './data.js'
import { footer, dotsImgSrc, main, goHome, goAuthor, goCompanies} from './variables.js'

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

export function renderHomeMain(){
main.innerHTML = ''
main.innerHTML = `<div class="home-main-wrapper">
<section class="main-intro">
<div class="greetings">
  <div class="greeting-title">
    <div class="greeting-line"></div>
    <h3>Welcome to Pages!!!</h3>
  </div>
  <h2>Your Books From</h2>
  <h2>The Best Writer.</h2>
  <h4>We believe that reading books are essential to a healthy culture.</h4>
  <h4>They’re where authors can connect with readers.</h4>
</div>
<div class="main-intro-button-wrapper">
  <button class="order-today">Order Today</button>
  <button class="read-free-demo">Read Free Demo</button>
</div>
<div class="main-intro-properties">
  <div class="prop-wrapper">
      ${homeIntroProperties.map(el => `<div class="prop-title">
                                            <div class="bold-dot"></div>
                                            <h4>${el.title}</h4></div>`).join('')}
    ${homeIntroProperties.map(el => `<p>${el.text}</p>`).join('')}
  </div>
</div>
</section>
<img src="./source/imgs/homeMainImg.svg" alt="IMAGE" />
</div>`
goHome.classList.add('yellow')
goAuthor.classList.remove('yellow')
goCompanies.classList.remove('yellow')
}

export function renderAuthorMain(){
    main.innerHTML = ''
    main.innerHTML = `<div class='author-main-wrapper'>
                        <section class="the-autors-book">
                        <h2>The Author’s Book</h2>
                        <div class="yellow-line"></div>
                        <div class="book-wrapper">
                        ${autorsBooks.map(el =>  `<div class="book">
                                <img src=${el.img} alt="${el.alt}"></img>
                                <div class="book-description">
                                <h3 class="title">${el.title}</h3>
                                <p class="price">${el.price}</p>
                                <p class="description">${el.description}</p>
                                    <div class="property-wrapper">
                                        <div class="bold-dot"></div><p class="property">${el.property}</p>
                                    </div>
                                </div>
                            </div>`).join('')}
                        </div>
                    </section>
                    <section class="about-author">
                    <div class='photo-frame'><div class="frame"></div>
                    <img class='author-photo' src="./source/imgs/authorPhoto.svg" alt="PHOTO">
                    </div>
                    <div class="about">
                        <h2>About the Author</h2>
                        <div class="yellow-line"></div>
                        <p class="description">We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.</p>
                        <div class="author-count">
                            ${authorCounts.map(el => `<div><h4>${el.value}</h4><p>${el.key}</p></div>`).join('')}
                        </div>
                        <div class="contact-data">
                            <img src="./source/imgs/qr.svg" alt="qr-code">
                            <div class="contacts">
                                <h3>John Abraham , Ph.d</h3>
                                <div class="author-mail">
                                    <h4>Mail:</h4>
                                    <p>johnabraham@gmail.com</p>
                                </div>
                                <div class="author-phone">
                                    <h4>Phone:</h4>
                                    <p>(+2) 123 545 9000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> </div>`
goAuthor.classList.add('yellow')
goHome.classList.remove('yellow')
goCompanies.classList.remove('yellow')
}

export function renderCompanyMain(){
    main.innerHTML = ''
    main.innerHTML = `<div class="companies-main-wrapper">
                        <section class="trusted">
                            <div class="title-container">
                                 <h2>Trusted By The Best</h2>
                                 <div class="yellow-line"></div>
                            </div>
                            <div class="trusted-companies">
                                ${trustedCompanies.map(el => `<div class='company'><img src="${el.logo}" alt="el.alt">
                                <h3>${el.title}</h3>
                                <p>${el.text}</p></div>`).join('')}
                            </div>    
                        </section>
                        <section class="get-book-copy">
                            <div class="text-wrapper">
                                <h2>Get Book Copy Today!</h2>
                            <div class="yellow-line"></div>
                            <p>We believe that bookstores are essential to a healthy </br> culture. They’re where authors can connect with readers.</p>
                            </div>
                            <div class="image-wrapper">
                            <img src="./source/imgs/teaCup.svg" alt="book & tea cup">
                            </div>
                        </section>
                    </div>`
  goAuthor.classList.remove('yellow')
  goHome.classList.remove('yellow')
  goCompanies.classList.add('yellow')
}
