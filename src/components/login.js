import React, {Component} from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { Label, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
class Login extends Component {
    render(){
        return(
            <div className="container">
            <Form className="login-form mt-5">
                <h1>Voting Login</h1>
                <FormGroup>
                    <Label className="pt-2 pb-2">User name</Label>
                    <Input type="text" name="uNmae" placeholder="User name"/>
                    <Label className="pt-2 pb-2">Password</Label>
                    <Input type="text"  name="password" placeholder="Password"/>
                    <button type="submit" class="btn btn-primary mt-4 mb-4 pl-5 pr-5">Submit</button><br></br>
                    <Link to="/register">Resister here</Link>
                </FormGroup>
            </Form>
            </div>
        )
    }
}


export default Login;