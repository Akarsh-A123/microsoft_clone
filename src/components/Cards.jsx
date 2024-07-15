import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
    return (
        <>
            <div className='container-fluid w-100'>
                <div className='row p-md-0 p-3'>
                    <div className="col-md-3 mb-md-0 mb-5">
                        <Card className='rounded-0' style={{ width: '100%',height:'100%' }}>
                            <Card.Img className='rounded-0' variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-Lifestyle-Sandstone-Icon-Toss?wid=297&hei=167&fit=crop" />
                            <Card.Body className='px-4'>
                                <Card.Title >Maximise the <br/> everyday with Microsoft 365</Card.Title>
                                <Card.Text>
                                Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.
                                </Card.Text>
                            </Card.Body>
                            <Button variant="primary" className='w-50 rounded-0 ms-4 mb-3 p-2'>For one person</Button>
                            <p className='text-primary ms-4 '>For up to six people {'>'}</p>
                        </Card>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-5">
                        <Card className='rounded-0' style={{ width: '100%',height:'100%' }}>
                            <Card.Img className='rounded-0' variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-Copilot-App-3screens?wid=297&hei=167&fit=crop" />
                            <Card.Body className='px-4'>
                                <Card.Title>Unlock your potential with Microsoft <br/>Copilot</Card.Title>
                                <Card.Text>
                                Get things done faster and unleash your creativity with the power of AI anywhere you go
                                </Card.Text>
                                
                            </Card.Body>
                            <Button variant="primary" className='p-2 ms-4 mb-3 rounded-0' style={{width:'80%'}}>Downlode the Copilot app</Button>
                        </Card>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-5">
                        <Card className='rounded-0' style={{ width: '100%',height:'100%' }}>
                            <Card.Img className='rounded-0' variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSX-CP-Xbox-Series-X?wid=297&hei=167&fit=crop" />
                            <Card.Body className='px-4'>
                                <Card.Title>Xbox Series X</Card.Title>
                                <Card.Text>
                                The fastest, most powerful Xbox ever.
                                </Card.Text>
                                
                            </Card.Body>
                            <Button variant="primary" className='w-75 rounded-0 ms-4 mb-3 p-2'>Shop Xbox Series X</Button>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card className='rounded-0' style={{ width: '100%',height:'100%' }}>
                            <Card.Img className='rounded-0' variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-CP-Xbox-Series-S-Evergreen?wid=297&hei=167&fit=crop" />
                            <Card.Body className='px-4'>
                                <Card.Title>Xbox Series S</Card.Title>
                                <Card.Text>
                                Next-gen performance in the smallest Xbox ever.
                                </Card.Text>
                                
                            </Card.Body>
                            <Button variant="primary" className='w-75 rounded-0 ms-4 mb-3 p-2'>Shop Xbox Series X</Button>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
