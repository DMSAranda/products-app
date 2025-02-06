import { PropTypes } from "prop-types"
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const initialDataForm = {
    id: 0,
    name: '',
    description: '',
    price: ''
}

export const ProductForm= ({handlerAdd, productSelected}) => {

    const[form, setForm] = useState(initialDataForm);

    const { id, name, description, price } = form;

    useEffect(()=>{
        setForm(productSelected)
    },[productSelected])

    return (
            <Form onSubmit={(event)=>{
                event.preventDefault();
                if(!name || !description || !price){
                    alert("Complete all folders!")
                }
                handlerAdd(form)
                setForm(initialDataForm);
            }}>
                <Form.Group>
                    <Form.Control
                        type="text"  
                        placeholder="Name"
                        style={{ marginBottom: '10px'}}
                        name="name"
                        value={name}
                        onChange={(event) => setForm({
                                                        ...form, 
                                                        name: event.target.value 
                                                })
                                  }
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        type="text"    
                        placeholder="Description"
                        style={{ marginBottom: '10px'}}
                        name="description"
                        value={description}
                        onChange={(event) => setForm({
                                                        ...form, 
                                                        description: event.target.value 
                                                })
                                 }
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                        type="number"
                        placeholder="Price"
                        style={{ marginBottom: '10px'}}
                        name="price"
                        value={price}
                        onChange={(event) => setForm({
                                                        ...form, 
                                                        price: event.target.value 
                                                })
                                 }
                    />
                </Form.Group>
                <Form.Group>
                    <Button 
                        type="submit"
                        style={{ marginBottom: '20px'}}>
                            {id > 0 ? 'Edit' : 'Create' }
                    </Button>                   
                </Form.Group>
                   
            </Form>  
    )
}

ProductForm.propTypes = {
    handlerAdd: PropTypes.func.isRequired,
    productSelected: PropTypes.object.isRequired
}