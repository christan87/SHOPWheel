/*
 * AccountMenu
 */

import React from 'react';

import { NavLink } from 'react-router-dom';
import { Collapse, Navbar } from 'reactstrap';

import Button from '../../Common/Button';

const AccountMenu = props => {
    const {user, isMenuOpen, links, toggleMenu} = props
    const links2 = [
        {
            prefix: '/blah',
            to: '/blah',
            name: '[Some Link]',
            provider: 'linkprovider'
        },
        {
            prefix: '/blah',
            to: '/blah',
            name: '[Some Link]',
            provider: 'linkprovider'
        },
        {
            prefix: '/blah',
            to: '/blah',
            name: '[Some Link]',
            provider: 'linkprovider'
        },
        {
            prefix: '/blah',
            to: '/blah',
            name: '[Some Link]',
            provider: 'linkprovider'
        },
        {
            prefix: '/blah',
            to: '/blah',
            name: '[Some Link]',
            provider: 'linkprovider'
        },
        {
            prefix: '/blah',
            to: '/blah',
            name: '[Some Link]',
            provider: 'linkprovider'
        },
        {
            prefix: '/blah',
            to: '/blah',
            name: '[Some Link]',
            provider: 'linkprovider'
        },
        {
            prefix: '/blah',
            to: '/blah',
            name: '[Some Link]',
            provider: 'linkprovider'
        },
        {
            prefix: '/blah',
            to: '/blah',
            name: '[Some Link]',
            provider: 'linkprovider'
        },
        {
            prefix: '/blah',
            to: '/blah',
            name: '[Some Link]',
            provider: 'linkprovider'
        }
    ];

    const getAllowedProvider = link => {
        if(!link.provider) return true;
        //const userProvider = user.provider ?? '';
        const userProvider = '';
        if(!userProvider) return true;

        return link.provider.includes(userProvider);
    }
    return (
        <div className='panel-sidebar'>
            <Button
                text='Dashboard Menu'
                className={`${isMenuOpen ? 'menu-panel' : 'menu-panel collapse'}`}
                ariaExpanded={!isMenuOpen ? 'true' : 'false'}
                onClick={(toggleMenu)}
            />
            <h3 className='panel-title'>Account</h3>
            <Navbar color='light' light expand='md'>
                <Collapse isOpen={isMenuOpen} navbar>
                    <ul className='panel-links'>
                        {links2.map((link, index) => {
                            const PREFIX = link.prefix ? link.prefix : '';
                            const isProviderAllowed = getAllowedProvider(link);
                            if(!isProviderAllowed) return;
                            return (
                                <li key={index}>
                                    <NavLink
                                        to={PREFIX + link.to}
                                        activeClassName='active-link'
                                        exact
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default AccountMenu;