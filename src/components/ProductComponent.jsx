import {Card, CardBody, CardTitle, CardText, Button, Col} from "reactstrap"


function ProductComponent({product}) {
    return (
        <Col className='mt-4'>
<Card>
  <img
    alt="Sample"
    src={"https://picsum.photos/300/200?random=" + product.id}/>
  <CardBody>
    <CardTitle tag="h5">{product.title}</CardTitle>
    <CardText>{product.body}</CardText>
    <h4>{product.userId}</h4>
    <Button>Add to favourite!</Button>
  </CardBody>
</Card>
</Col>
    );
}

export default ProductComponent;