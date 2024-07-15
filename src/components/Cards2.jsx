import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Cards2() {
  return (
    <>
      <div className='container-fluid w-100 mt-5 '>
                <div className='row p-3 p-md-0'>
                    <div className="col-md-3 mb-md-0 mb-5">
                        <Card className='rounded-0' style={{ width: '100%',height:'100%' }}>
                            <Card.Img className='rounded-0' variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Surf-CP-SurfaceFamilyForBusiness?wid=297&hei=167&fit=crop" />
                            <Card.Body className='px-4 mt-3'>
                                <Card.Title >Surface for Business</Card.Title>
                                <Card.Text>
                                No matter what you do, there’s a Surface to help you do it.
                                </Card.Text>
                            </Card.Body>
                            <Button variant="primary" className='w-50 rounded-0 ms-4 mb-3 p-2'>Shop Now</Button>
                            
                        </Card>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-5">
                        <Card className='rounded-0' style={{ width: '100%',height:'100%' }}>
                            <Card.Img className='rounded-0' variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Copilot-Commercial?wid=297&hei=167&fit=crop" />
                            <Card.Body className='px-4'>
                            <p className='bg-warning w-25 text-center fs-5 rounded-0 '>New</p>
                                <Card.Title>Copilot for Microsoft 365</Card.Title>
                                <Card.Text>
                                Save time and focus on the things that matter most with AI in Microsoft 365 for business.
                                </Card.Text>
                                
                            </Card.Body>
                            <Button variant="primary" className='p-2 ms-4 mb-3 w-50 rounded-0' >Learn more</Button>
                        </Card>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-5">
                        <Card className='rounded-0' style={{ width: '100%',height:'100%' }}>
                            <Card.Img className='rounded-0' variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Azure-AI-Bloom?wid=297&hei=167&fit=crop" />
                            <Card.Body className='px-4 mt-3'>
                                <Card.Title>Join the era of AI</Card.Title>
                                <Card.Text>
                                Create, communicate, and code with the latest Microsoft AI solutions.
                                </Card.Text>
                                
                            </Card.Body>
                            <Button variant="primary" className='w-75 rounded-0 ms-4 mb-3 p-2'>Explore AI solutions</Button>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card className='rounded-0' style={{ width: '100%',height:'100%' }}>
                            <Card.Img className='rounded-0' variant="top" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Visual-Studio-Icon?wid=297&hei=167&fit=crop" />
                            <Card.Body className='px-4'>
                                <Card.Title>Visual Studio 2022</Card.Title>
                                <Card.Text>
                                Get the most comprehensive IDE for .NET and C++ developers on Windows for building web, cloud, desktop, mobile apps, services and games.
                                </Card.Text>
                                
                            </Card.Body>
                            <Button variant="primary" className='w-75 rounded-0 ms-4 mb-3 p-2'>Downlode Visual Studio 2022</Button>
                        </Card>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Cards2
