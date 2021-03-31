import {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
class PartyCard extends Component{

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 mb-3">
                            <Card>
                                <CardImg top width="100%" src="/assets/images/background-img-party.jpg" alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">Card title</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PartyCard;