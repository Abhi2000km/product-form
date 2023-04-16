import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Label, Input, InputGroupText,InputGroup } from 'reactstrap';
import axios from 'axios';

const UploadProductForm = () => {
    const history = useHistory();
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: '',
        currency: '₹',
        images: [],
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductData({
            ...productData,
            [name]: value,
        });
    };

    // const handleFileChange = (event) => {
    //     const { files } = event.target;

    //     console.log(files);
    //     setProductData({
    //         ...productData,
    //         images: files,
    //     });
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!productData.name && !productData.description && !productData.price && !productData.currency){
            console.log("please fill details");
            return;
        }
        await axios.post('http://localhost:5000/products', productData).then((response) => {
            console.log(response.data);
            history.push('/dashboard');
            // Reset the form
            setProductData({
                name: '',
                description: '',
                price: '',
                currency: '',
                images: [],
            });
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <Container className="my-4">
            <h2 className="mb-4">Upload a Product</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="productName">Name</Label>
                    <Input type="text" name="name" id="productName" placeholder="Enter product name" value={productData.name} onChange={(e) =>handleInputChange(e)} />
                </FormGroup>

                <FormGroup>
                    <Label for="productDescription">Description</Label>
                    <Input type="textarea" name="description" id="productDescription" placeholder="Enter product description" value={productData.description} onChange={(e) =>handleInputChange(e)} />
                </FormGroup>

                <Row>
                    <Col xs={6}>
                        <Label for="productPrice">Price</Label>
                        <InputGroup>
                            <InputGroupText>{productData.currency}</InputGroupText>
                            <Input type="text" name="price" id="productPrice" placeholder="Enter product price" value={productData.price} onChange={(e) =>handleInputChange(e)} />
                            <InputGroupText>
                            </InputGroupText>
                        </InputGroup>
                    </Col>
                    {/* <Col xs={6}>
                        <FormGroup>
                            <Label for="productImages">Upload Product Images</Label>
                            <Input type="file" name="file" id="productImages" multiple onChange={e=>handleFileChange(e)} />
                        </FormGroup>
                    </Col> */}
                </Row>

                <button className="btn btn-primary mt-4" type="submit" onClick={(e) => handleSubmit(e)}>
                    Submit
                </button>
            </Form>
        </Container>
    );
};

export default UploadProductForm;







// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import axios from 'axios';

// const UploadForm = () => {
//   const history = useHistory();
//   const [productData, setProductData] = useState({
//     name: '',
//     description: '',
//     price: '',
//     currency: '',
//     images: [],
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setProductData({
//       ...productData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (event) => {
//     const { files } = event.target;
//     setProductData({
//       ...productData,
//       images: files,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('name', productData.name);
//     formData.append('description', productData.description);
//     formData.append('price', productData.price);
//     formData.append('currency', productData.currency);
//     for (let i = 0; i < productData.images.length; i++) {
//       formData.append('images', productData.images[i]);
//     }
//     await axios.post('http://localhost:5000/products', formData).then((response) => {
//       console.log(response.data);
//       // Reset the form
//       setProductData({
//         name: '',
//         description: '',
//         price: '',
//         currency: '',
//         images: [],
//       });
//     }).catch((error) => {
//       console.error(error);
//     });
//   };


//   return (
//     <Container className="my-4">
//       <h2 className="mb-4">Upload Product</h2>
//       <Form onSubmit={e=>handleSubmit(e)}>
//         <Row>
//           <Col md={6}>
//             <FormGroup>
//               <Label for="name">Name</Label>
//               <Input type="text" name="name" id="name" value={productData.name} onChange={(e) => handleInputChange(e)} required />
//             </FormGroup>
//             <FormGroup>
//               <Label for="description">Description</Label>
//               <Input type="textarea" name="description" id="description" value={productData.description} onChange={(e) => handleInputChange(e)} required />
//             </FormGroup>
//             <FormGroup>
//               <Label for="price">Price</Label>
//               <Input type="number" name="price" id="price" value={productData.price} onChange={(e) => handleInputChange(e)} required />
//             </FormGroup>
//             <FormGroup>
//               <Label for="currency">Currency</Label>
//               <Input type="select" name="currency" id="currency" value={productData.currency} onChange={(e) => handleInputChange(e)} required>
//                 <option value="">Select Currency</option>
//                 <option value="USD">USD</option>
//                 <option value="EUR">EUR</option>
//                 <option value="GBP">GBP</option>
//               </Input>
//             </FormGroup>
//           </Col>
//           <Col md={6}>
//             <FormGroup>
//               <Label for="images">Images</Label>
//               <Input type="file" name="images" id="images" accept="image/*" multiple onChange={(e) => handleInputChange(e)} required />
//             </FormGroup>
//           </Col>
//         </Row>
//         <Button type="submit" color="primary">Submit</Button>
//       </Form>
//     </Container>
//   );
// };

// export default UploadForm;
