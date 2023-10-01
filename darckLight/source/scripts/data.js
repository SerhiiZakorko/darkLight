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

