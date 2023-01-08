import React from 'react'
import { useState } from 'react'
import Button from './Button'
import useClickOutside from './ClickOutside'
import './_header.scss'
import logo from './assets/logo-bookmark.svg'
import burger from './assets/icon-hamburger.svg'
import close from './assets/icon-close.svg'


const Header = () => {
  const [isShown, setIsShown] = useState(false)

  let menuRef = useClickOutside(() => {
    setIsShown(false)
  })

  console.log(isShown)
  return (
    <>

      <header className='header'>
        <div ref={menuRef} className={`wrapper header--content`}>
          <a href="#home"><img className='header--logo' src={logo} alt="logo" /></a>
          <nav className={`navbar ${isShown === true ? 'navbar_show' : ''}`}>
            <ul className='navbar--list'>
              <li className='navbar--item'><a href="#home">FEATURES</a></li>
              <li className='navbar--item'><a href="#home">PRICING</a></li>
              <li className='navbar--item'><a href="#home">CONTACT</a></li>
              <li className='navbar--item'><Button class='button__red' text='LOGIN' /></li>
            </ul>
          </nav>
          {isShown === false ?
            <img src={burger} alt='burger' onClick={() => { setIsShown(true) }} className='burger' /> :
            <img src={close} alt='close' onClick={() => { setIsShown(false) }} className='close' />}
        </div>
      </header>
    </>
  )
}

export default Header
