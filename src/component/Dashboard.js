import React,{useState} from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle,Modal,ModalBody,ModalHeader,ModalFooter } from 'reactstrap';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula elit in sapien fringilla, vel pellentesque ipsum venenatis.',
    price: 100,
    currency: 'USD',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula elit in sapien fringilla, vel pellentesque ipsum venenatis.',
    price: 50,
    currency: 'EUR',
    images: [
      'https://via.placeholder.com/150',
    ],
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula elit in sapien fringilla, vel pellentesque ipsum venenatis.',
    price: 75,
    currency: 'USD',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
  },
];

const Dashboard = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const toggleModal = () => setSelectedProduct(null);
  
    const handleClick = (product) => setSelectedProduct(product);
  
    return (
      <Container className="my-4">
        <h2 className="mb-4">Products</h2>
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={6} md={4} lg={3}>
              <Card onClick={() => handleClick(product)} style={{ cursor: 'pointer' }}>
                <CardImg top src={product.images[0]} alt={product.name} />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <Modal isOpen={!!selectedProduct} toggle={toggleModal}>
          {selectedProduct && (
            <>
              <ModalHeader toggle={toggleModal}>{selectedProduct.name}</ModalHeader>
              <ModalBody>
                <img src={selectedProduct.images[0]} alt={selectedProduct.name} style={{ width: '100%' }} />
                <p>{selectedProduct.description}</p>
                <p>{`${selectedProduct.price} ${selectedProduct.currency}`}</p>
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-secondary" onClick={toggleModal}>Close</button>
              </ModalFooter>
            </>
          )}
        </Modal>
      </Container>
    );
  };
  
  export default Dashboard;
  