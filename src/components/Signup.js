import {Button, Col, FormText, Row} from "reactstrap";
import {  FormGroup, Label, Input} from 'reactstrap';
import { useState, useEffect } from  'react';
import { useHistory } from "react-router-dom";
import {config} from '../config';


function Signup(){

const history = useHistory()

    useEffect(() => {
        validateAll();
    })

    //Handling submit
    const handleSignup = () => {
        const data = {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("number").value,
            password: document.getElementById("password").value};

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch(config.BE_URL+ '/users/signup', requestOptions)
            .then(response => {
                console.log("SIGNUP FETCHING RESPONSE: ",response.json());
                history.push("/log-in")
            })
            .catch(err => {
                console.log("SIGNUP FETCHING ERROR: ", err);
            })
    }

    //input username state
    const [username, setUsername] = useState({
        value:"",
        valid:false,
        message:"This field is required."
    });

    //input email state
    const [email, setEmail] = useState({
        value:"",
        valid:false,
        message:"This field is required."
    });

    //input phone number state
    const [phoneNumber, setPhoneNumber] = useState({
        value:"",
        valid:false,
        message:"This field is required."
    });

    //input password state
    const [password, setPassword] = useState({
        value:"",
        valid:false,
        message:"This field is required."
    });

    //input password state
    const [confirmPassword, setConfirmPassword] = useState({
        value:"",
        valid:false,
        message:"This field is required."
    });

    //valid inputs state
    const [allValid, setAllValid] = useState(false);

    //validate username
    const validateUsername = (evt) => {
        setUsername(username => ({
            value: evt.target.value,
            valid: username.valid,
            message: username.message
        }))
        if (evt.target.value === ""){
            setUsername(username => ({
                value: username.value,
                valid: false,
                message: "This field is required."
            }))
        }
        else{
            setUsername(username => ({
                value: username.value,
                valid: true,
                message: ""
            }))
        }
    }

    //function to validate email
    const validateEmail = (evt) => {
        setEmail(email => ({
            value: evt.target.value,
            valid: email.valid,
            message: email.message
        }))
        if(evt.target.value.toString() === ""){
            setEmail(email => ({
                value:email.value,
                valid: false,
                message: "This field is required."
            }))
        }
        else if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(evt.target.value))){
            setEmail(email => ({
                value:email.value,
                valid: false,
                message: "This email is not valid, make sure it is your real email address."
            }))
        }
        else{
            setEmail(email => ({
                value:email.value,
                valid: true,
                message: ""
            }))
        }
    }

    //function to validate phone number
    const validatePhoneNumber = (evt) => {
        setPhoneNumber(phoneNumber => ({
            value: evt.target.value,
            valid: phoneNumber.valid,
            message: phoneNumber.message
        }))
        if(evt.target.value === ""){
            setPhoneNumber(phoneNumber => ({
                value:phoneNumber.value,
                valid: false,
                message: "This field is required."
            }))
        }
        else if (!(/[0-9]{8}/.test(evt.target.value))){
            setPhoneNumber(phoneNumber => ({
                value:phoneNumber.value,
                valid: false,
                message: "The phone number format is incorrect, make sure you use your real number."
            }))
        }
        else{
            setPhoneNumber(phoneNumber => ({
                value:phoneNumber.value,
                valid: true,
                message: ""
            }))
        }
    }

    //function to validate password
    const validatePassword = (evt) => {
        setPassword(password => ({
            value: document.getElementById("password").value,
            valid: password.valid,
            message: password.message
        }))
        if(document.getElementById("password").value === ""){
            setPassword(password => ({
                value:password.value,
                valid: false,
                message: "This field is required."
            }))
        }
        else if (!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/.test(document.getElementById("password").value))){
            setPassword(password => ({
                value:password.value,
                valid: false,
                message: "Password must be at least 8 characters and contain Numbers, and Uppercase letters."
            }))
        }
        else{
            setPassword(password => ({
                value:password.value,
                valid: true,
                message: ""
            }))
        }

    }

    //function to validate confirm password
    const validateConfirmPassword = (evt) => {
        setConfirmPassword(confirmPassword => ({
            value: document.getElementById("cpassword").value,
            valid: confirmPassword.valid,
            message: confirmPassword.message
        }))
        if(document.getElementById("cpassword").value === ""){
            setConfirmPassword(confirmPassword => ({
                value:confirmPassword.value,
                valid: false,
                message: "This field is required."
            }))
        }
        else if (document.getElementById("cpassword").value !== document.getElementById("password").value){
            setConfirmPassword(confirmPassword => ({
                value:confirmPassword.value,
                valid: false,
                message: "Password is different from the previous input."
            }))
        }
        else{
            setConfirmPassword(confirmPassword => ({
                value:confirmPassword.value,
                valid: true,
                message: ""
            }))
        }

    }

    //validate all fields
    const validateAll = () => {
        setAllValid(username.valid && email.valid && phoneNumber.valid && password.valid && confirmPassword.valid);
    }


    return(
        <div >
            <br/>
            {/*TITLE SIGNUP*/}
            <Row className="text-center">
                <Col><h1>Signup</h1></Col>
            </Row>

            {/*USERNAME*/}
            <Row className="text-center">
                <Col md={6} xs={10} className="offset-md-3 offset-1">
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" placeholder="Create username..." onChange={validateUsername}/>
                        <FormText>{username.message}</FormText>
                    </FormGroup>
                </Col>
            </Row>

            {/*EMAIL*/}
            <Row className="text-center">
                <Col md={6} xs={10} className="offset-md-3 offset-1">
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="anthony@coacher.com" className="form-input" onChange={validateEmail}/>
                        <FormText>{email.message}</FormText>
                    </FormGroup>
                </Col>
            </Row>
            {/*PHONE NUMBER*/}
            <Row className="text-center">
                <Col md={6} xs={10} className="offset-md-3 offset-1">
                    <FormGroup>
                        <Label for="number">Phone number</Label>
                        <Input type="text" pattern="[0-9]{8}" minLength="8" maxLength="8" name="number" id="number" placeholder="71 012210" className="form-input" onChange={validatePhoneNumber}/>
                        <FormText>{phoneNumber.message}</FormText>
                    </FormGroup>
                </Col>
            </Row>
            {/*PASSWORD*/}
            <Row className="text-center">
                <Col md={6} xs={10} className="offset-md-3 offset-1">
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$" minLength="8" maxLength="16" name="password" id="password" placeholder="Make it difficult !" onChange={() => {validatePassword(); validateConfirmPassword();}}/>
                        <FormText><FormText>{password.message}</FormText></FormText>
                    </FormGroup>
                </Col>
            </Row>
            {/*CONFIRM PASSWORD*/}
            <Row className="text-center">
                <Col md={6} xs={10} className="offset-md-3 offset-1">
                    <FormGroup>
                        <Label for="cpassword">Confirm Password</Label>
                        <Input type="password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$"  minLength="8" maxLength="16" name="cpassword" id="cpassword" placeholder="Make sure it's the same !" onChange={() => {validatePassword(); validateConfirmPassword();}}/>
                        <FormText>{confirmPassword.message}</FormText>
                    </FormGroup>
                </Col>
            </Row>
            {/*SUBMIT*/}
            <Row className="text-center">
                <Col md={6} xs={10} className="offset-md-3 offset-1">
                    <Button className="btn btn-danger" onClick={handleSignup} disabled={!allValid}>Signup</Button>
                </Col>
            </Row>

        </div>
    );
}

export default Signup;