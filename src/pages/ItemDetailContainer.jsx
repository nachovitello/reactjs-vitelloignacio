import Card from 'react-bootstrap/Card';
import { useGetProductById } from '../hooks/useProducts';
import Button  from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const { productId } = useParams()
    
    const {productData} = useGetProductById(productId);

    return(
        <Card key={productData?.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={productData?.thumbnail} />
                    <Card.Body>
                    <Card.Title>{productData?.title}</Card.Title>
                    <Card.Text>
                        {productData?.description}
                    </Card.Text>
                    <div>{productData?.price}</div>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
    )
}

export default ItemDetailContainer;
