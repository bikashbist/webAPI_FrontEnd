import React, {Component} from 'react';
import {
    Card, CardImg, CardTitle, CardColumns,
    CardSubtitle, CardBody
  } from 'reactstrap';
class candidate_dashbord extends Component {
    render(){
        return(
            <div className="container">
                <CardColumns className="text-center mt-5">
                    <Card className="mb-3">
                        <CardImg top width="100%" src="/Vlogo.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Bikash Bist</CardTitle>
                            <CardSubtitle>you got <span className="count-vote"> 10 </span> vote</CardSubtitle>
                        </CardBody>
                    </Card>

                    <Card className="mb-3">
                        <CardImg top width="100%" src="/Vlogo.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Bikash Bist</CardTitle>
                            <CardSubtitle>you got <span className="count-vote"> 10 </span> vote</CardSubtitle> 
                        </CardBody>
                    </Card>

                    <Card className="mb-3">
                        <CardImg top width="100%" src="/Vlogo.jpg" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Bikash Bist</CardTitle>
                            <CardSubtitle>you got <span className="count-vote"> 10 </span> vote</CardSubtitle>
                        </CardBody>
                    </Card>
                </CardColumns>
            </div>
        )
    }
}


export default candidate_dashbord;