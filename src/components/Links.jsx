import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindows } from '@fortawesome/free-brands-svg-icons/faWindows'
import { faXbox } from '@fortawesome/free-brands-svg-icons/faXbox';
function Links() {
    return (
        <>
            <div className='container  w-100 mt-5 mb-5'>
                <div className='row  '>
                    <div className="col-md-3 d-flex flex-column align-items-center">
                        <img src='https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40' width={'15%'} />
                        <a href={'https://www.microsoft.com/en-in/microsoft-365/buy/compare-all-microsoft-365-products?icid=MSCOM_QL_M365'}>Choose your Microsoft 365</a>
                    </div>
                    <div className="col-md-3 col-6 mt-3 mt-md-0 d-flex flex-column align-items-center">
                        <img src='https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Xbox-Games-Consoles?wid=40&hei=40' width={'15%'}/>
                        <a href={'https://www.microsoft.com/en-in/store/b/xbox?icid=MSCOM_QL_Xbox'}>Shop Xbox</a>
                    </div>
                    <div className="col-md-3 col-6 mt-3 mt-md-0 d-flex flex-column align-items-center"><img src='https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Microsoft-365?wid=40&hei=40' width={'15%'}/>
                        <a href={'https://www.microsoft.com/en-in/windows/get-windows-11?icid=MSCOM_QL_Windows'}>Get Windows 11</a></div>
                    <div className="col-md-3 d-flex flex-column align-items-center">
                        <img src='https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/Link-List-Icons-Surface-Devices?wid=40&hei=40' width={'15%'}/>
                        <a href={'https://www.microsoft.com/en-in/surface?icid=MSCOM_QL_Surface'}>Explore Surface devices</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Links
