import React, {Component} from 'react';
import { Container, Row, Col,Button,Input,Label,FormGroup,Form } from 'reactstrap';

class profile extends Component {
    render(){
        return(
            <div className="mt-5">
            <Container>
            <Row>
                <Col xs="6">
                  <img className="dashbord-img" src="/Vlogo.jpg" alt="logo" />
                </Col>
                <Col xs="6">
                    <h2 className="pt-4 pb-2">Change your details</h2>
                    
                    <Form>
                    <FormGroup>
                        <Label for="fname">First Name</Label>
                        <Input type="text" name="fname" id="fname" placeholder="first name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lName">Last Name</Label>
                        <Input type="text" name="lName" id="lName" placeholder="first name" />
                    </FormGroup>
                    
                   
                    <Button>Edit Profile</Button>
                    </Form>
                </Col>
            </Row>
          </Container>
          </div>
        )
    }
}


export default profile;


