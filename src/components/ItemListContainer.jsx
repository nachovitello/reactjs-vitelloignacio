import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";




export const ItemListContainer = ({ productsData }) => {
    return(
        <div style={{fontWeight: 'bold', fontSize: '30px', width: '100vw', height: '50vh', textAlign: 'center'}}> 
            {productsData.map((products) => {
                return (
                    <Card key={products.id} style={{ width: "15rem" }} >
                     <Link to={`/item/${products.id}`}>
                     <Card.img variant="top" src={products.thumbnail} />
                     </Link>
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
            })}
        </div>
    )
}

export default ItemListContainer;
