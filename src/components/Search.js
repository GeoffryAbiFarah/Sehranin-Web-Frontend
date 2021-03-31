import {Component} from 'react';
import {Button, Input, InputGroup, UncontrolledCollapse} from "reactstrap";

class Search extends Component{

    render(){
        return(
            <div className="container">
                <div className="row mt-4 text-center">
                    <div className="col">
                        <h3>Looking for a specific place to spend the night ?</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8 mx-auto">
                        <InputGroup>
                            <Input
                                type="text"
                                name="search-place"
                                id="search-place-id"
                                placeholder="Search for specific place here ..."
                            />
                            <Button color="info" id="toggler">
                                Filter
                            </Button>
                            <Button color="secondary">Search</Button>
                        </InputGroup>
                    </div>
                </div>
                <div>

                    <UncontrolledCollapse toggler="#toggler">
                        <div className="row mt-3">
                            <div className="col-12 col-md-8 mx-auto">
                                <InputGroup>
                                    <Input type="select" name="drinks" id="drinks-id">
                                        <option> Any City</option>
                                        <option>Beirut</option>
                                        <option>Jounieh</option>
                                        <option>Jbeil</option>
                                        <option>Hamra</option>
                                        <option>Tripoli</option>
                                    </Input>
                                    <Input
                                        type="date"
                                        name="date"
                                        id="date-id"
                                    />
                                </InputGroup>
                            </div>
                        </div>

                    </UncontrolledCollapse>
                </div>


                <div className="row">
                    <div className="col-12 col-md-8 mx-auto">

                    </div>

                </div>
                <br/>
            </div>
        );
    }
}
export default Search;