import {Button, Col, FormText, Row} from "reactstrap";
import {  FormGroup, Label, Input} from 'reactstrap';
import { useState, useEffect } from  'react';
import {useDispatch} from "react-redux";
import {loggedAction} from "../actions/loggedAction";

function Login(){

    const dispatch = useDispatch();

    useEffect(() => {
        validateAll();
        if (success.value){
            dispatch(loggedAction({token: success.token, id: success.id}))
        }
    })

    //Handling submit
    const handleLogin = () => {
        const data = {username: document.getElementById("username").value, password: document.getElementById("password").value};

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('http://localhost:3000/users/login', requestOptions)
            .then(response => {
                response.json()
                    .then(data => {
                        validateSuccess(data);
                    })
            })
            .catch(err => {
                console.log("LOGIN FETCHING ERROR: ", err);

            })
    }

    //success state
    const [success, setSuccess] = useState({
        value: false,
        token: "",
        id: ""
    });

    //input username state
    const [username, setUsername] = useState({
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

    //valid inputs state
    const [allValid, setAllValid] = useState(false);

    //validate success
    const validateSuccess = (obj) => {
        if (obj.token === undefined && obj.token === null && obj.token === ''){
            setSuccess({
                value: false,
                token: "",
                id: ""
            })
        }
        else{
            setSuccess({
                value: true,
                token: obj.token,
                id: obj.id
            })
        }
    }

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

    //validate username
    const validatePassword = (evt) => {
        setPassword(password => ({
            value: evt.target.value,
            valid: password.valid,
            message: password.message
        }))
        if (evt.target.value === ""){
            setPassword(password => ({
                value: password.value,
                valid: false,
                message: "This field is required."
            }))
        }
        else{
            setPassword(password => ({
                value: password.value,
                valid: true,
                message: ""
            }))
        }
    }

    //validate all fields
    const validateAll = () => {
        setAllValid(username.valid && password.valid);
    }


        return(
            <div >
                <br/>
                <Row className="text-center">
                    <Col><h1>Login</h1></Col>
                </Row>
                <Row className="text-center">
                    <Col md={6} xs={10} className="offset-md-3 offset-1">
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="Enter username here..." onChange={validateUsername}/>
                            <FormText>{username.message}</FormText>
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col md={6} xs={10} className="offset-md-3 offset-1">
                        <FormGroup>
                            <Label for="email">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Enter your password here..." onChange={validatePassword}/>
                            <FormText>{password.message}</FormText>
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col md={6} xs={10} className="offset-md-3 offset-1">
                        <Button className="btn btn-danger" onClick={handleLogin} disabled={!allValid}>Login</Button>
                    </Col>
                </Row>

            </div>
        );
}

export default Login;