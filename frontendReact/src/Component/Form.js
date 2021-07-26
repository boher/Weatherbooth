import React from 'react';
import '../main.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Form(props) {

    async function handleFeedback(e) {

        if (e.target.value === "Yes") {

            await axios.post('/api')
            .then(function (response) { console.log(response); })
            .catch(function (error) { console.log(error); })
        }

        alert("Thank you for your feedback!"); 
    };

    return (

       <div>
           <Button variant="success" value="Yes" onClick={handleFeedback}>Yes</Button>
           <Button variant="danger" value="No" onClick={handleFeedback}>No</Button>
       </div>
    )
};

export default Form;