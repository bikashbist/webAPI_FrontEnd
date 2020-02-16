import React, {Component} from 'react';

import {
    Card, Button, CardImg, CardTitle, CardText, CardColumns,
     CardBody
  } from 'reactstrap';

class voter_dashbord extends Component {
    render(){
        return(
        
            <div className="container">
                <CardColumns className="text-center mt-5">
                    <Card className="mb-3">
                        <CardImg top width="100%" src="/Vlogo.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Bikash Bist</CardTitle>
                            
                            <CardText>Bikash Bist, commonly known by his nom de Biki, He is a Student.</CardText>
                            <Button className="btn btn-success" type="submit">Vote Now</Button>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardImg top width="100%" src="/Vlogo.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Bikash Bist</CardTitle>
                            
                            <CardText>Bikash Bist, commonly known by his nom de Biki, He is a Student.</CardText>
                            <Button className="btn btn-success" type="submit">Vote Now</Button>
                        </CardBody>
                    </Card>
                    <Card className="mb-3">
                        <CardImg top width="100%" src="/Vlogo.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Bikash Bist</CardTitle>
                            
                            <CardText>Bikash Bist, commonly known by his nom de Biki, He is a Student.</CardText>
                            <Button className="btn btn-success" type="submit">Vote Now</Button>
                        </CardBody>
                    </Card>
                </CardColumns>
            </div>
        )
    }
}


export default voter_dashbord;