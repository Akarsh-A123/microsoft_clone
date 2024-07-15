import { faFacebookF, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
function SocialMedia() {
  return (
    <>
      <div className='container-fluid  d-flex align-items-center mt-5 mb-5 justify-content-between' style={{height:'20vh'}}>
        <p>Follow Microsoft <span className='fs-4 ms-4'><FontAwesomeIcon className='me-3' icon={faFacebookF} /> <FontAwesomeIcon className='me-3' icon={faXTwitter} /> <FontAwesomeIcon icon={faYoutube} /></span></p>
        
      </div>
    </>
  )
}

export default SocialMedia
