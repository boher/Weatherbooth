import React from 'react';
import '../main.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios';

function Form(props) {

    async function handleFeedback(e) {

        if (e.target.value === "Yes") {

            await axios.post('/api')
            .then(function (response) { console.log(response); })
            .catch(function (error) { console.log(error); })
        }

        props.onHide();
        alert("Thank you for your feedback!"); 
    };

    return (

        <Modal {...props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Is the information accurate?
                </Modal.Title>
            </Modal.Header>

            <Modal.Footer>
                <Button 
                    variant="success" 
                    value="Yes" 
                    onClick={handleFeedback}>Yes</Button>

                <Button 
                    variant="danger" 
                    value="No" 
                    onClick={handleFeedback}>No</Button>
            </Modal.Footer>

        </Modal>
    )
};

export default Form;