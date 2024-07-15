import React from 'react'


function Banner() {
  return (
    <>
      
        
            <div  className='container-fluid mt-5 d-flex justify-content-center'>
                <div id='banner' className='row p-md-0 p-2 bg-dark text-light ' style={{width:'100%',height:'90vh'}} >
                    <div className="col-md-6    d-flex justify-content-center align-items-center order-2 order-md-1">
                        <div >
                            <h3>Xbox Game Pass Ultimate</h3>
                            <p style={{textAlign:'justify'}}>Play new games on day one. Plus, enjoy hundreds <br/>of high-quality games with friends on console and PC.
                            </p>
                            <button className='btn btn-primary rounded-0'>Join now</button>
                        </div>
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
                        <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Slim-Multi-Canvas-AEM-Game-Pass-Ultimate:VP2-859x540' width={'100%'} height={'100%'} />
                    </div>
                </div>
            </div>
          
        
    </>
  )
}

export default Banner
