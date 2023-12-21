import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";


export const ItemDetailContainer = () => {
  return (
    <Card key={products.id} style={{ width: "15rem" }} >    
                     <Card.img variant="top" src={products.thumbnail} />
                     <Card.Body>
                        <Card.Title>{products.title}</Card.Title>
                        <Card.Text>
                        {products.description}
                        </Card.Text>
                        <div>{products.price}</div>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
  )
}

export default ItemDetailContainer
