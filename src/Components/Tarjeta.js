import React from "react";
import { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap'


function Tarjeta({products}) {
  console.log(products)
  return (
    <>
      {products.map((e, index) => {
        return(
          <Card key={e.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={e.img} />
          <Card.Body>
            <Card.Title>{e.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        )

      })}
    </>
  );
}

export default Tarjeta;
