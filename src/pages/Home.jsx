import React from 'react'
import Carosel from '../components/Carosel'
import Links from '../components/Links'
import Cards from '../components/Cards'
import Banner from '../components/Banner'
import Cards2 from '../components/Cards2'
import SocialMedia from '../components/SocialMedia'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'




function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
    <Carosel/>
    <div>
      <Links/>
      <Cards/>
      <Banner/>
      <Cards2/>
      
      <SocialMedia/>
      <div className="w-100  btn1"><button onClick={scrollToTop} className='btn rounded-0 px-3 py-2 mb-5' style={{position:'relative',left:'85%',backgroundColor:"#d9d9d9", padding:'5px'}} ><FontAwesomeIcon className='me-2' icon={faArrowUp} />Back to top</button></div>
    </div>
    </>
  )
}

export default Home
