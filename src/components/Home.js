
import "../styles/Home.css";
import { useEffect, useState } from "react";
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardSubtitle, CardText,
    CardTitle,
    Input,
    InputGroup,
    UncontrolledCollapse
} from "reactstrap";

function Home (){

    const [parties, setParties] = useState([]);

    useEffect(() => {
    console.log(parties)
        const place = document.getElementById("place").value;
        const date = document.getElementById("date").value;
        const address = document.getElementById("address").value;
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('http://localhost:3000/parties', requestOptions)
            .then(response => {
                response.json()
                    .then(data => {
                        setParties(data);
                    })
            })
            .catch(err => {
                console.log("LOGIN FETCHING ERROR: ", err);
            })
    }, [])

    const handleSearch = () => {
        console.log(parties)
        const place = document.getElementById("place").value;
        const date = document.getElementById("date").value;
        const address = document.getElementById("address").value;
        if ( place === "" && date === "" && address === ""){
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch('http://localhost:3000/parties', requestOptions)
                .then(response => {
                    response.json()
                        .then(data => {
                            setParties(data);
                        })
                })
                .catch(err => {
                    console.log("FETCHING ERROR: ", err);
                })
        }
        else if ( place !== "" && date === "" && address === ""){

            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch(`http://localhost:3000/parties/place/${place}`, requestOptions)
                .then(response => {
                    response.json()
                        .then(data => {
                            setParties(data);
                        })
                })
                .catch(err => {

                    console.log("FETCHING ERROR: ", err);

                })
        }
        else if ( place === "" && date !== "" && address === ""){

            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch(`http://localhost:3000/parties/date/${date}`, requestOptions)
                .then(response => {
                    response.json()
                        .then(data => {
                            setParties(data);
                        })
                })
                .catch(err => {

                    console.log("FETCHING ERROR: ", err);

                })
        }
        else if ( place === "" && date === "" && address !== ""){
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch(`http://localhost:3000/parties/address/${address}`, requestOptions)
                .then(response => {
                    response.json()
                        .then(data => {
                            setParties(data);
                        })
                })
                .catch(err => {

                    console.log("FETCHING ERROR: ", err);

                })
        }
        else if ( place !== "" && date !== "" && address === ""){
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch(`http://localhost:3000/parties/placeAndDate/${place}/${date}`, requestOptions)
                .then(response => {
                    response.json()
                        .then(data => {
                            setParties(data);
                        })
                })
                .catch(err => {

                    console.log("FETCHING ERROR: ", err);

                })
        }
        else if ( place !== "" && date === "" && address !== ""){
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch(`http://localhost:3000/parties/placeAndAddress/${place}/${address}`, requestOptions)
                .then(response => {
                    response.json()
                        .then(data => {
                            setParties(data);
                        })
                })
                .catch(err => {

                    console.log("FETCHING ERROR: ", err);

                })
        }
        else if ( place === "" && date !== "" && address !== ""){
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch(`http://localhost:3000/parties/addressAndDate/${address}/${date}`, requestOptions)
                .then(response => {
                    response.json()
                        .then(data => {
                            setParties(data);
                        })
                })
                .catch(err => {

                    console.log("FETCHING ERROR: ", err);

                })
        }else if ( place !== "" && date !== "" && address !== ""){
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch(`http://localhost:3000/parties/placeAddressAndDate/${place}/${address}/${date}`, requestOptions)
                .then(response => {
                    response.json()
                        .then(data => {
                            setParties(data);
                        })
                })
                .catch(err => {

                    console.log("FETCHING ERROR: ", err);

                })
        }
    }

        return(
            <div>
                {/*Search*/}
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
                                    name="place"
                                    id="place"
                                    placeholder="Search for specific place here ..."
                                />
                                <Button color="info" id="toggler">
                                    Filter
                                </Button>
                                <Button color="secondary" onClick={handleSearch}>Search</Button>
                            </InputGroup>
                        </div>
                    </div>
                    <div>

                        <UncontrolledCollapse toggler="#toggler">
                            <div className="row mt-3">
                                <div className="col-12 col-md-8 mx-auto">
                                    <InputGroup>
                                        <Input type="select" name="address" id="address">
                                            <option value="" defaultValue={true}> Any City</option>
                                            <option value="beirut">Beirut</option>
                                            <option value="jounieh">Jounieh</option>
                                            <option value="jbeil">Jbeil</option>
                                            <option value="hamra">Hamra</option>
                                            <option value="tripoli">Tripoli</option>
                                        </Input>
                                        <Input
                                            type="date"
                                            name="date"
                                            id="date"
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

                {/*Party cards*/}
                <div className="container">
                    <div className="row">
                        {parties.map(party => (
                                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                                        <Card>
                                            <CardImg top width="100%" src="/assets/images/background-img-party.jpg" alt="Card image cap" />
                                            <CardBody>
                                                <CardTitle tag="h5">{party.title}</CardTitle>
                                                <CardSubtitle tag="h6" className="mb-2 text-muted">{party.place}, {party.address}, {party.date}</CardSubtitle>
                                                <CardText>Contact: {party.number}</CardText>
                                                <CardText>Party plan: {party.description}</CardText>
                                                <p className="btn btn-danger">{party.price} L.L.</p>
                                            </CardBody>
                                        </Card>
                                    </div>
                        ))}
                    </div>
                </div>

            </div>
        );
}

export default Home;