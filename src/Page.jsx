import React from 'react'
import { useState } from 'react'
import Button from './Button'
import hero from './assets/illustration-hero.svg'
import bookmarking from './assets/illustration-features-tab-1.svg'
import searching from './assets/illustration-features-tab-2.svg'
import sharing from './assets/illustration-features-tab-3.svg'
import chromeLogo from './assets/logo-chrome.svg'
import firefoxLogo from './assets/logo-firefox.svg'
import operaLogo from './assets/logo-opera.svg'

const Page = () => {
    const [feature, setFeature] = useState('bookmarking')
    const [dropout, setDropout] = useState(false)
    console.log(typeof (dropout))
    console.log(dropout)
    return (
        <div className='wrapper'>
            <section className='manager'>
                <div className='text'>
                    <h1>A Simple Bookmark Manager</h1>
                    <p className='par'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div className='buttons--container'>
                        <Button class='button' text='Get it on Chrome' />
                        <Button class='button__white' text='Get it on Firefox' />
                    </div>
                </div>
                <div className='image'>
                    <img className='section--image' src={hero} alt="hero_img" />
                </div>
            </section>
            <section className='features'>
                <div className='text'>
                    <h2 className='title'>Features</h2>
                    <p className='par'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                </div>
                <div className='slider'>
                    <div className="slider--pages">
                        <span className={feature === 'bookmarking' ? 'slider__active' : ''} onClick={() => setFeature("bookmarking")}>Simple Bookmarking</span>
                        <span className={feature === 'searching' ? 'slider__active' : ''} onClick={() => setFeature("searching")}>Speedy Searching</span>
                        <span className={feature === 'sharing' ? 'slider__active' : ''} onClick={() => setFeature("sharing")}>Easy Sharing</span>
                    </div>
                    <div className='slides'>
                        {{
                            'bookmarking': <div className='slide'><div className='image'><img className='slide--image' src={bookmarking} alt="bookmarking" /></div><div className='text'><h3 className='slide--title'>Bookmark in one click</h3><p className='par'>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p><Button class='button' text='More Info' /></div></div>,
                            'searching': <div className='slide'><div className='image'><img className='slide--image' src={searching} alt="searching" /></div><div className='text'><h3 className='slide--title'>Intelligent search</h3><p className='par'>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p><Button class='button' text='More Info' /></div></div>,
                            'sharing': <div className='slide'><div className='image'><img className='slide--image' src={sharing} alt="sharing" /></div><div className='text'><h3 className='slide--title'>Share your bookmarks</h3><p className='par'>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p><Button class='button' text='More Info' /></div></div>,
                        }[feature]}
                    </div>
                </div>
            </section>
            <section className='download'>
                <div className='text'>
                    <h2 className='title'>Download the extension</h2>
                    <p className='par'>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
                </div>
                <div className='cards'>
                    <div className='card'>
                        <div className='card--image'>
                            <img src={chromeLogo} alt="chromeLogo" />
                        </div>
                        <span className='card--title'>Add to Chrome</span>
                        <span className='card--par'>Minimum version 62</span>
                        <Button class="button" text="Add & Install Extension" />
                    </div>
                    <div className='card'>
                        <div className='card--image'>
                            <img src={firefoxLogo} alt="firefoxLogo" />
                        </div>
                        <span className='card--title'>Add to Firefox</span>
                        <span className='card--par'>Minimum version 55</span>
                        <Button class="button" text="Add & Install Extension" />
                    </div>
                    <div className='card'>
                        <div className='card--image'>
                            <img src={operaLogo} alt="operaLogo" />
                        </div>
                        <span className='card--title'>Add to Opera</span>
                        <span className='card--par'>Minimum version 46</span>
                        <Button class="button" text="Add & Install Extension" />
                    </div>
                </div>
            </section>
            <section className='faq'>
                <div className='text'>
                    <h2 className='title'>Frequently Asked Questions</h2>
                    <p className='par'>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
                </div>
                <div className='dropdown'>
                    <div className='dropdown--container'>
                        <span className={`dropdown--title ${dropout === 'bookmark' ? 'dropdown--title__active' : ''}`} onClick={() => dropout === ('bookmark') ? setDropout(false) : setDropout('bookmark')}>What is Bookmark?</span>
                        <p className={`par ${dropout === 'bookmark' ? 'dropdown--item__active' : 'dropdown--item'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure rerum eius ea molestiae quos nostrum harum libero dicta quidem esse, aliquid nemo repudiandae minus similique. Sapiente assumenda alias earum totam?</p>
                    </div>
                    <div className='dropdown--container'>
                        <span className={`dropdown--title ${dropout === 'request' ? 'dropdown--title__active' : ''}`} onClick={() => dropout === ('request') ? setDropout(false) : setDropout('request')}>How can I request a new browser?</span>
                        <p className={`par ${dropout === 'request' ? 'dropdown--item__active' : 'dropdown--item'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure rerum eius ea molestiae quos nostrum harum libero dicta quidem esse, aliquid nemo repudiandae minus similique. Sapiente assumenda alias earum totam?</p>
                    </div>
                    <div className='dropdown--container'>
                        <span className={`dropdown--title ${dropout === 'mobile' ? 'dropdown--title__active' : ''}`} onClick={() => dropout === ('mobile') ? setDropout(false) : setDropout('mobile')}>Is there a mobile app?</span>
                        <p className={`par ${dropout === 'mobile' ? 'dropdown--item__active' : 'dropdown--item'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure rerum eius ea molestiae quos nostrum harum libero dicta quidem esse, aliquid nemo repudiandae minus similique. Sapiente assumenda alias earum totam?</p>
                    </div>
                    <div className='dropdown--container'>
                        <span className={`dropdown--title ${dropout === 'other' ? 'dropdown--title__active' : ''}`} onClick={() => dropout === ('other') ? setDropout(false) : setDropout('other')}>What about other Chromium browsers?</span>
                        <p className={`par ${dropout === 'other' ? 'dropdown--item__active' : 'dropdown--item'}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure rerum eius ea molestiae quos nostrum harum libero dicta quidem esse, aliquid nemo repudiandae minus similique. Sapiente assumenda alias earum totam?</p>
                    </div>
                </div>
                <Button class="button" text="More Info" />
            </section>
        </div>
    )
}

export default Page
