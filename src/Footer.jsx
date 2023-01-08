import React from 'react'
import './styles.scss'
import icon0 from './assets/icon-facebook.svg'
import icon3 from './assets/icon-twitter.svg'
import logo from './assets/logo-bookmark.svg'
import Button from './Button'

const Footer = () => {
    return (
        <div>
            <div >
                <section className='join--section'>
                    <div className="join wrapper">
                        <div className="text">
                            <span className='small-text'>35,000+ ALREADY JOINED</span>
                            <h1 className='title'>Stay up-to-date with what
                                we’re doing</h1>
                        </div>
                        <form className='footer--form'>
                            <input placeholder='Enter your email address' type="email" name="" id="" />
                            <Button class='button__red' text='Contact Us' />
                        </form>
                    </div>
                </section>
                <footer className='footer'>
                    <div className='wrapper footer--container'>
                        <a href="#home"><img className='header--logo footer--logo' src={logo} alt="logo" /></a>
                        <div className='footer--media'>
                            <ul>
                                <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><img src={icon0} alt="icon" /></a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://twitter.com/"><img src={icon3} alt="icon" /></a></li>
                            </ul>
                        </div>
                        <div className='footer--links'>
                            <ul>
                                <li className='footer--item'><a href="#home">FEATURES</a></li>
                                <li className='footer--item'><a href="#home">PRICING</a></li>
                                <li className='footer--item'><a href="#home">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
