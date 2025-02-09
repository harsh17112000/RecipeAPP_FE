import React from 'react'
import Container from "react-bootstrap/Container"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import "./dashboard.scss"
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {


  const navigate = useNavigate();


  const handleNavigateRecipe = (id)=>{
    navigate(`/RecipeDetails/${id}`)
  }
  return (
    <>
      <Container>
        <h1 className="text-center mt-5">
          Recipe
        </h1>

        <section className="mx-auto">
          {/* search section */}

          <div className="d-flex justify-content-end">
            <Form className='mx-auto' style={{ maxWidth: "340px", width: "100%" }}>
              <Form.Group className="mb-3" style={{ position: "relative" }} controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Search Recipe" />
                <div style={{ position: "absolute", right: "6px", top: "8px", cursor: "pointer" }}>
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </Form.Group>
            </Form>
          </div>

          {/* receipe section */}

          <div className="recipecard d-flex justify-content-between flex-wrap align-items-center">
            <Card style={{ maxWidth: '21rem',width:"100%",marginBottom:"15px",boxShadow:"0px 2px 20px #cfd8dc",height:"27rem",cursor:"pointer" }}>
              <Card.Img  style={{width:"100%",height:"13rem"}} variant="top" src="/logo192.png" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title.
                </Card.Text>
                <Button variant="outline-danger" onClick={()=> handleNavigateRecipe(1)}>View Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        </section>
      </Container>
    </>
  )
}

export default Dashboard