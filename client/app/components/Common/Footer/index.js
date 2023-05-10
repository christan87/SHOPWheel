import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import Newsletter from '../../../containers/Newsletter';

const Footer = () => {
    const infoLinks = [
        {id:'0', name:'Contact Us', to:'/contact'},
        {id:'1', name:'Sell', to:'/sell'},
        {id:'2', name:'Shipping', to:'/shipping'}
    ];

    const infoLinksAlt = [
        {id:'0', name:'About Us', to:'/aboutus'},
        {id:'1', name:'Terms of Service', to:'/terms'},
        {id:'2', name:'FAQs', to:'/faqs'}
    ];

    const footerLinks = infoLinks.map(item => (
        <li key={item.id} className='footer-link'>
            <Link key={item.id} to={item.to}>
                {item.name}
            </Link>
        </li>   
    ));

    const footerLinksAlt = infoLinksAlt.map(item => (
        <li key={item.id} className='footer-link'>
            <Link key={item.id} to={item.to}>
                {item.name}
            </Link>
        </li>   
    ));

    return (
        <footer className='footer'>
            <Container>
                <div className='footer-content'>
                    <div className='footer-block'>
                        <div className='block-title'>
                            <h3 className='text-uppercase'>Customer Service</h3>
                        </div>
                        <div className='block-content'>
                            <ul>{footerLinks}</ul>
                        </div>
                    </div>
                    <div className='footer-block'>
                        <div className='block-title'>
                            <h3 className='text-uppercase'>Links</h3>
                        </div>
                        <div className='block-content'>
                            <ul>{footerLinksAlt}</ul>
                        </div>
                    </div>
                    <div className='footer-block'>
                        <div className='block-title'>
                            <h3 className='text-uppercase'>Newsletter</h3>
                            <Newsletter />
                        </div>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <span>© {new Date().getFullYear()} SHOP Wheel</span>
                </div>
                <ul className='footer-social-items'>
                    <li>
                        <a href='/#facebook' rel='nonreferrer noopener' target='_blank'>
                            <span className='facebook-icon' />
                        </a>
                    </li>
                    <li>
                        <a href='/#instagram' rel='nonreferrer noopener' target='_blank'>
                            <span className='instagram-icon' />
                        </a>
                    </li>
                    <li>
                        <a href='/#pinterest' rel='nonreferrer noopener' target='_blank'>
                            <span className='pinterest-icon' />
                        </a>
                    </li>
                    <li>
                        <a href='/#twitter' rel='nonreferrer noopener' target='_blank'>
                            <span className='twitter-icon' />
                        </a>
                    </li>
                </ul>
            </Container>
        </footer>
    )
}

export default Footer;