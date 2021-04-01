import {Component} from 'react';
import {Col, Row} from "reactstrap";
import {  FormGroup, Label, Input} from 'reactstrap';

class Login extends Component{

    render(){
        return(
            <div >
                <br/>
                <Row className="text-center">
                    <Col><h1>Login</h1></Col>
                </Row>
                <Row className="text-center">
                    <Col md={8} xs={10} className="offset-md-2 offset-1">
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>

                    </Col>
                </Row>

            </div>
        );
    }
}

export default Login;