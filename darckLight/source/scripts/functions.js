import {footerData, homeIntroProperties, autorsBooks, authorCounts, trustedCompanies, tips, stories} from './data.js'
import { footer, dotsImgSrc, main, goHome, goAuthor, goCompanies, goArticles} from './variables.js'

export function renderFooter(){
footer.innerHTML = `<div class='footerImagesContainer'><img class='main-logo' src = ${footerData[0].logo} alt="main-logo">
                        <div class='footerSocialIconsContainer'>${footerData[0].src.map(logo => `<div class='footerSocialIconsWrapper'><img src = ${logo.src} alt = ${logo.alt}></div>`).join('')}</div>
                    </div>
                    <div class='${footerData[1].title}'><h3 class='footer-title'>${footerData[1].title}</h3>
                    <div class='footerLinkContainer'>${footerData[1].content.map(link => `<div class = 'footerLinkWrapper'><img src = ${dotsImgSrc}><a class='footerLinks'>${link}</a></div>`).join('')}</div></div>
                    <div class='${footerData[2].title}'><h3 class='footer-title'>${footerData[2].title}</h3>
                    <div class='footerLinkContainer'>${footerData[2].content.map(link => `<div class = 'footerLinkWrapper'><img src = ${dotsImgSrc}><a class='footerLinks'>${link}</a></div>`).join('')}</div></div>
                    <div class='${footerData[3].title}'><h3 class='footer-title'>${footerData[3].title}</h3>
                    ${footerData[3].content.map(contact => `<div class='footerContactInfo'><h4>${contact.title}</h4><a class='footerLinks'>${contact.content}</a></div>`).join('')}</div>`
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
      ${homeIntroProperties.map(prop => `<div class="prop-title">
                                            <div class="bold-dot"></div>
                                            <h4>${prop.title}</h4></div>`).join('')}
    ${homeIntroProperties.map(prop => `<p>${prop.text}</p>`).join('')}
  </div>
</div>
</section>
<img src="./source/imgs/homeMainImg.svg" alt="IMAGE" />
</div>`
goHome.classList.add('yellow')
goAuthor.classList.remove('yellow')
goCompanies.classList.remove('yellow')
goArticles.classList.remove('yellow')
}

export function renderAuthorMain(){
    main.innerHTML = ''
    main.innerHTML = `<div class='author-main-wrapper'>
                        <section class="the-autors-book">
                        <h2>The Author’s Book</h2>
                        <div class="yellow-line"></div>
                        <div class="book-wrapper">
                        ${autorsBooks.map(book =>  `<div class="book">
                                <img src=${book.img} alt="${book.alt}"></img>
                                <div class="book-description">
                                <h3 class="title">${book.title}</h3>
                                <p class="price">${book.price}</p>
                                <p class="description">${book.description}</p>
                                    <div class="property-wrapper">
                                        <div class="bold-dot"></div><p class="property">${book.property}</p>
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
goArticles.classList.remove('yellow')
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
        ${trustedCompanies.map(company => `<div class='company'><img src="${company.logo}" alt="el.alt">
            <h3>${company.title}</h3>
            <p>${company.text}</p></div>`).join('')}
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
  goArticles.classList.remove('yellow')
  goCompanies.classList.add('yellow')
}

export function renderArticlesMain(){
    main.innerHTML = ''
    main.innerHTML = `<div class='articles-main-wrapper'>
                        <section class='What-will'>
                            <h2>What Will You Learn?</h2>
                            <div class='yellow-line'></div>
                            <div class='tips-container'>
                                <div class='tips-part'>
                                    ${tips.map((tip, index)  => `<div class='tip'>
                                        <div class='tip-num'>
                                            <h3>0${index + 1}</h3></div>
                                        <p>${tip}</p>
                                    </div>`).join('')}
                                </div>
                                <div class='photo-part'>
                                    <div class='frame'></div>
                                    <img src='./source/imgs/learn.svg' alt='Learn'>
                                </div>
                            </div>
                        </section>
                        <section class='articles-resources'>
                            <h2>Articles & Resources</h2>
                            <div class='yellow-line'></div>
                            <div class='stories-wrapper'>
                                ${stories.map(story => `<div class='story'>
                                    <img src='${story.img}' alt='story-photo'>
                                    <div class='story-description'>
                                        <h4>${story.title}</h4>
                                        <p>${story.text}</p>
                                        <p class='date'>${story.date}</p>
                                    </div>
                                </div>`).join('')}
                        </section>
                    </div>`
    goHome.classList.remove('yellow')
    goAuthor.classList.remove('yellow')
    goCompanies.classList.remove('yellow')
    goArticles.classList.add('yellow')
}

