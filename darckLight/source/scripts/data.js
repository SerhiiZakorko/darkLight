import { logoImgSrc, facebookIconSrc, twitterIconSrc, linckedInIconSrc, instagramIconSrc, facebookIconAlt, twitterIconAlt, linckedInIconAlt, instagramIconAlt } from './variables.js'
export const footerData = [
    {
        logo: logoImgSrc,
        src: [{
            src: facebookIconSrc,
            alt: facebookIconAlt,
        },
        {
            src: twitterIconSrc,
            alt: twitterIconAlt,
        },
        {
            src: linckedInIconSrc,
            alt: linckedInIconAlt,
        },
        {
            src: instagramIconSrc,
            alt: instagramIconAlt,
        }]
    },
    {
    title: 'Explore',
    content: ['Home', 'About', 'Articles', 'Our Store', 'Contact Us']
},
{
    title: 'Utility Pages',
    content: ['Style Guide', '404 Not Found', 'Password Protected', 'Licenses', 'Changelog']
},
  {
    title: 'Keep in Touch',
    content: [{
        title: 'Address :',
        content: '24A Kingston St, Los Vegas <br> NC 28202, USA.'
    },
    {
        title: 'Mail :',
        content: 'support@pages.com'
    },
    {
        title: 'Phone :',
        content: '(+22) 123 - 4567 - 900'
    }]
  }]

export const homeIntroProperties = [
    {
        title: 'Pages:',
        text: '250pages'
    },
    {
        title: 'Length:',
        text: '10 Hours'
    },
    {
        title: 'Rating:',
        text: '4.5/5 (305 ratings)'
    }
]

export const autorsBooks = [
    {
        img: "./source/imgs/atomicOnes-book.svg",
        alt: "Atomic One's-book",
        title: "Atomic One’s",
        price: "$ 13.84 USD",
        description: "As the book contains theoretical content as well as solved questions.",
        property: "Printed Book"
    },
    {
        img: "./source/imgs/darkLight-book.svg",
        alt: "The Dark Light-book",
        title: "The Dark Light",
        price: "$ 86.11 USD",
        description: "As the book contains theoretical content as well as solved questions.",
        property: "Printed Book"
    }
]

export const authorCounts = [
    {
        key: 'Books Published',
        value: '02'
    },
    {
        key: 'User Reviews',
        value: '4.5'
    },
    {
        key: 'Best Seller Awards',
        value: '04'
    }
]