import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCircle, faCirclePause } from '@fortawesome/free-solid-svg-icons';
function Carosel() {
        const [index, setIndex] = useState(0);
        const [color,setColor] = useState('')
        const [color2,setColor2] = useState('')
        const handleSelect = (selectedIndex) => {
          setIndex(selectedIndex);
          if(index==0){
            setColor('black')
            setColor2('white')
          }
          else{
            setColor('white')
            setColor2('black')
          }
        };
      
        const handleNext = () => {
          if (index < numSlides - 1) {
            setIndex(index + 1);
            setColor('white')
            setColor2('black')
            
          } else {
            setIndex(0); // Wrap around to the first slide
            setColor('black')
            setColor2('white')
          }
        };
      
        const handlePrev = () => {
          if (index > 0) {
            setIndex(index - 1);
            setColor('black')
            setColor2('white')
          } else {
            setIndex(numSlides - 1); // Wrap around to the last slide
            setColor('white')
            setColor2('black')
          }
        };
      
        const numSlides = 2; // Replace with the number of slides you have   
    return (
        <>
            <Carousel     activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
                <Carousel.Item>
                    <div className='cardBox p-5 bg-light' style={{ position: 'absolute',width:'35%',marginLeft:'5%',marginTop:'5%' }}>
                        <span className='text-dark px-3 py-2 bg-warning fw-bold'>NEW</span>
                        <h4 className='mt-3'>Meet Surface Pro</h4>
                        <p>This laptop's unrivalled flexibaility and AI features like Live Captions and Cocreator enable you to do more than you ever imagined.</p>
                        <button className='btn btn-primary rounded-0'>Shop now</button>
                    </div>
                    <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-AI-11Ed-Sapphire-MC001-3000x1682:VP4-1399x600' width={'100%'} />
                    <div  className='cardBox2 mt-5  bg-light' style={{display:'none', position: 'relative',width:'100%',marginLeft:'5%',marginTop:'5%' }}>
                        <span className='text-dark px-3 py-2 bg-warning fw-bold'>NEW</span>
                        <h4 className='mt-3'>Meet Surface Pro</h4>
                        <p>This laptop's unrivalled flexibaility and AI features like Live Captions and Cocreator enable you to do more than you ever imagined.</p>
                        <button className='btn btn-primary rounded-0'>Shop now</button>
                    </div>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <div  className='cardBox p-3' style={{ position: 'absolute',width:'30%',marginLeft:'5%',marginTop:'5%' }}>
                        <span className='text-dark px-3 py-2 bg-warning fw-bold'>NEW</span>
                        <h4 className='mt-3'>Meet Surface Pro</h4>
                        <p>Unlock AI features like Live Captions and cocreator with this exxeptional powerful laptop</p>
                        <button className='btn btn-primary rounded-0'>Shop now</button>
                    </div>
                    <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Laptop-AI-7Ed-Sapphire-MC001-3000x1682:VP4-1399x600' width={'100%'}/>
                    <div  className='cardBox2 mt-5 px-3' style={{display:'none', position: 'relative',width:'100%',marginLeft:'5%',marginTop:'5%' }}>
                        <span className='text-dark px-3 py-2 bg-warning fw-bold'>NEW</span>
                        <h4 className='mt-3'>Meet Surface Pro</h4>
                        <p>Unlock AI features like Live Captions and cocreator with this exxeptional powerful laptop</p>
                        <button className='btn btn-primary rounded-0'>Shop now</button>
                    </div>

                </Carousel.Item>
                
            </Carousel>
            <div className="custom-carousel-controls text-center mt-3 ">
            <FontAwesomeIcon icon={faCirclePause} className='me-3' />
            <Button variant="" onClick={handlePrev}><FontAwesomeIcon icon={faChevronRight} flip="horizontal" /></Button>
            <FontAwesomeIcon icon={faCircle} className='border border-dark rounded-circle ms-5' style={{color:color,fontSize:'8px'}} />
            <FontAwesomeIcon icon={faCircle} className='border border-dark rounded-circle ms-5 me-5' style={{color:color2,fontSize:'8px'}} />
            <Button variant="" onClick={handleNext}><FontAwesomeIcon icon={faChevronRight} /></Button>
            </div>
        </>
    )
}

export default Carosel
