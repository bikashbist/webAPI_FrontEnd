import React, {Component} from 'react';
import { Container, Row, Col,Button,Input,Label,FormGroup,Form } from 'reactstrap';
import Axios from 'axios';
import Nav from './Nav';  
class profile extends Component {


    constructor(props) {
        super(props)

        this.state = {
            user:'',
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('Token')}` }
            },
            user_id:''
        }
    }


    componentDidMount(){
        Axios.get('http://localhost:3020/users/loggedUserDetails', this.state.config)
        .then((response) => {
            console.log(response.data)
            this.setState({
                user:response.data,
                user_id:response.data.firstName
            })
        });
    }

    handleChange=((e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(e.target.value)
    })


    updateUser = (e) => {
        e.preventDefault();
        Axios.put('http://localhost:3020/users/loggedUserDetails', this.state.user, this.state.config)
            .then((response) => console.log(response.data)).catch((err) => console.log(err.response))
        this.props.history.push('/voter_dashbord');
    }



    render(){
        return(
            <div>  <Nav user={this.state.user_id} />
            <div className="mt-5">
              
            <Container>
            <Row>
                <Col xs="6">
                  <img className="dashbord-img" src={`http://localhost:3020/proImage/${this.state.user.image}`}alt="pro image" />
                </Col>
                <Col xs="6">
                    <h2 className="pt-4 pb-2">Change your details</h2>
                    
                    <Form>
                    <FormGroup>
                        <Label for="fname">First Name</Label>
                        <Input type="text" name="firstName" id="fname" placeholder="first name" value={this.state.user.firstName}  onChange={(e) => this.handleChange(e)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lName">Last Name</Label>
                        <Input type="text" name="lastName" id="lName" placeholder="last name"  value={this.state.user.lastName}   onChange={(e) => this.handleChange(e)}/>
                    </FormGroup>
                    
                   
                    <Button onClick={this.updateUser}>Edit Profile</Button>
                    </Form>
                </Col>
            </Row>
          </Container>
          </div>
          </div>
        )
    }
}


export default profile;


