import React from 'react'
import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card';
import "./RecipeDetails.scss"
import Button from 'react-bootstrap/Button';


const RecipeDetails = () => {
    return (
        <>
            <Container>
                <div className="mainDetails">
                    <h1>paneer masala</h1>
                    <p>Avg Rating: <span className='review'>3</span>&nbsp; <i className='fa-solid fa-star star'></i>
                        &nbsp;&nbsp;
                        <span style={{ borderRight: "1px solid #d54215" }}></span>
                        <span className='review mx-3'>(3) reviews</span>
                        <span style={{ borderRight: "1px solid #d54215" }}></span>
                        <span className='mx-3 review'> Save <i className='fa-regular fa-heart' style={{ cursor: "pointer" }}></i></span>
                    </p>

                    <h4>Recipe By :- <span className='review'>Harsh Pathak</span></h4>

                    <div className="midesection d-flex justify-content-between flex-wrap">
                        <div>
                            <div className="RecipeDetails mt-4">
                                <Card style={{ maxWidth: '35rem' }} className='border-0'>
                                    <Card.Img variant="top" src="/logo192.png" />
                                </Card>
                                <Card style={{ maxWidth: '35rem' }} className='mt-2'>
                                    <p className='cooking'></p>
                                    <Card.Body className='d-flex justify-content-between'>
                                        <div>
                                            <Card.Title>Cooking Time:</Card.Title>
                                            <p>45 min</p>
                                        </div>
                                        <div>
                                            <Card.Title>Serving</Card.Title>
                                            <p>5</p>
                                        </div>
                                        <div>
                                            <Card.Title>Card Title</Card.Title>
                                            <p>45 min</p>
                                        </div>

                                    </Card.Body>
                                </Card>
                            </div>


                            <div className="Ingredients mt-4">
                                <h3> How to Make Paneer masala</h3>
                                <h4 className='mt-2'>Ingredients</h4>
                                <p className='d-flex align-items-center'><i className='fa-solid fa-circle circle mx-2'></i>15 cube paneer / cottage cheese</p>
                                <p className='d-flex align-items-center'><i className='fa-solid fa-circle circle mx-2'></i>15 cube paneer / cottage cheese</p>
                                <p className='d-flex align-items-center'><i className='fa-solid fa-circle circle mx-2'></i>15 cube paneer / cottage cheese</p>
                                <p className='d-flex align-items-center'><i className='fa-solid fa-circle circle mx-2'></i>15 cube paneer / cottage cheese</p>
                                <p className='d-flex align-items-center'><i className='fa-solid fa-circle circle mx-2'></i>15 cube paneer / cottage cheese</p>

                                <div className="Description">
                                    <h3>Description</h3>
                                    <p style={{ maxWidth: "35rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa id sed eius nemo sapiente ducimus voluptates optio non doloremque nam!</p>
                                </div>
                            </div>
                        </div>
                        <div className="instructions mt-5">
                            <span className='d-flex align-items-center'>
                                <img src="/logo192.png" style={{ maxWidth: "50px", marginRight: "5px" }} alt="" />
                                <h3>Cook's Note</h3>
                            </span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque placeat accusantium error perspiciatis sint, perferendis corporis qui minima quas.</p>
                        </div>
                    </div>

                    <div className="reviewdetails mt-4">
                        <h2>Reviews (3)</h2>
                        <p>Check out our <span style={{ borderBottom: "1px solid #d54215" }}>Community GuideLines </span> about reviews</p>
                        <Button variant='primary'>
                            Add Review
                        </Button>
                        <div className="user_review mt-3">
                            <p>4 reviews</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mx-3">
                                    <i className='fa-solid fa-sort' style={{ cursor: "pointer" }}></i>Sort
                                </p>
                                <p>
                                <i className="fa-solid fa-filter"></i>
                                    Filter
                                </p>
                            </div>
                        </div>

                        <div className="final_review" style={{maxWidth:"33rem"}}>
                            <div className="d-flex justify-content-start align-items-center mt-3">
                                <img src="/logo192.png" style={{width:"50px",marginRight:"10px",borderRadius:"50%"}} alt="" />
                                <h5>harsh patel</h5>
                                <span className='mx-4 mb-1'></span>
                            </div>

                            <div className="mt-3 d-flex align-items-center">
                                <div style={{width:"100px"}}>
                                <i className='fa-solid fa-star star'></i>
                                <i className='fa-solid fa-star star'></i>
                                <i className='fa-solid fa-star star'></i>
                                </div>
                                <div className="mx-4" style={{fontSize:"12px"}}>
                                    08/02/2025
                                </div>
                            </div>
                            <div className="mt-3">
                                <p>nice recipe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default RecipeDetails