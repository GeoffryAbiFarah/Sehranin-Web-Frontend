import { FormGroup, Label, Input, InputGroup, InputGroupText, Row, Col, FormText, Button} from 'reactstrap';
import {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import { useHistory } from 'react-router';



export default function PostParty (){

const history = useHistory();

    const logged = useSelector(state => state.loggedReducer)

    useEffect(() => {
        validateAll();
        // console.log(title.valid, place.valid, address.valid, date.valid, phoneNumber.valid, price.valid, description.valid, allValid
        // )
    })

    //Handling submit
    const handlePost= () => {
        const data = {
            title: document.getElementById("title").value,
            place: document.getElementById("place").value,
            address: document.getElementById("address").value,
            date: document.getElementById("date").value,
            number: document.getElementById("number").value,
            price: document.getElementById("price").value,
            description: document.getElementById("description").value
        };

        // console.log(data)
        //
        // const formData = new FormData()
        // const json = JSON.stringify(data);
        // const blob = new Blob([json], {
        //     type: 'application/json'
        // });
        // formData.append('data', blob);
        // formData.append('image', document.getElementById("image").files[0]);

        // console.log(blob, document.getElementById("image").files[0])

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' , 'Authorization': `Bearer ${logged.token}`},
            body: JSON.stringify(data)
        };
        fetch('http://localhost:3000/parties', requestOptions)
            .then(response => {
                console.log("POST PARTY FETCHING RESPONSE: ",response.json());
            })
            .then(() => history.push("/"))
            .catch(err => {
                console.log("POST PARTY FETCHING ERROR: ", err);
            })
    }

    //input title state
    const [title, setTitle] = useState({
        value:"",
        valid:false,
        message:"This field is required."
    });

    //input place state
    const [place, setPlace] = useState({
        value:"",
        valid:false,
        message:"This field is required."
    });

    //input city state
    const [address, setAddress] = useState({
        value:"",
        valid:true,
        message:""
    });

    //input date state
    const [date, setDate] = useState({
        value:"",
        valid:false,
        message:"This field is required."
    });

    //input date state
    const [phoneNumber, setPhoneNumber] = useState({
        value:"",
        valid:false,
        message:"This field is required."
    });

    //input price state
    const [price, setPrice] = useState({
        value:"",
        valid:false,
        message:"This field is required."
    });

    //input description state
    const [description, setDescription] = useState({
        value:"",
        valid:false,
        message:"This field is required."
    });


    //valid inputs state
    const [allValid, setAllValid] = useState(false);

    //validate all fields
    const validateAll = () => {
        setAllValid(title.valid && place.valid && address.valid && date.valid && phoneNumber.valid && price.valid && description.valid && logged.token !== '');
    }

    //validate title
    const validateTitle = (evt) => {
        setTitle(title => ({
            value: evt.target.value,
            valid: title.valid,
            message: title.message
        }))
        if (evt.target.value === ""){
            setTitle(title => ({
                value: title.value,
                valid: false,
                message: "This field is required."
            }))
        }
        else{
            setTitle(title => ({
                value: title.value,
                valid: true,
                message: ""
            }))
        }
    }

    //validate place
    const validatePlace = (evt) => {
        setPlace(place => ({
            value: evt.target.value,
            valid: place.valid,
            message: place.message
        }))
        if (evt.target.value === ""){
            setPlace(place => ({
                value: place.value,
                valid: false,
                message: "This field is required."
            }))
        }
        else{
            setPlace(place => ({
                value: place.value,
                valid: true,
                message: ""
            }))
        }
    }

    //validate address / city
    const validateAddress = (evt) => {
        setAddress(address => ({
            value: evt.target.value,
            valid: address.valid,
            message: address.message
        }))
        if (evt.target.value === ""){
            setAddress(address => ({
                value: address.value,
                valid: false,
                message: "This field is required."
            }))
        }
        else{
            setAddress(place => ({
                value: address.value,
                valid: true,
                message: ""
            }))
        }
    }

    //validate date
    const validateDate = (evt) => {
        setDate(date => ({
            value: evt.target.value,
            valid: date.valid,
            message: date.message
        }))
        if (evt.target.value === ""){
            setDate(date => ({
                value: date.value,
                valid: false,
                message: "This field is required."
            }))
        }
        else{
            setDate(place => ({
                value: date.value,
                valid: true,
                message: ""
            }))
        }
    }

    //function to validate phone number
    const validatePhoneNumber = (evt) => {
        setPhoneNumber(phoneNumber => ({
            value: evt.target.value,
            valid: phoneNumber.valid,
            message: phoneNumber.message
        }))
        if(evt.target.value === ""){
            setPhoneNumber(phoneNumber => ({
                value:phoneNumber.value,
                valid: false,
                message: "This field is required."
            }))
        }
        else if (!(/[0-9]{8}/.test(evt.target.value))){
            setPhoneNumber(phoneNumber => ({
                value:phoneNumber.value,
                valid: false,
                message: "The phone number format is incorrect, make sure you use your real number."
            }))
        }
        else{
            setPhoneNumber(phoneNumber => ({
                value:phoneNumber.value,
                valid: true,
                message: ""
            }))
        }
    }

    //function to validate phone number
    const validatePrice = (evt) => {
        setPrice(price => ({
            value: evt.target.value,
            valid: price.valid,
            message: price.message
        }))
        if(evt.target.value === ""){
            setPrice(price => ({
                value:price.value,
                valid: false,
                message: "This field is required."
            }))
        }
        else if (!(/^[0-9]+$/.test(evt.target.value))){
            setPrice(price => ({
                value:price.value,
                valid: false,
                message: "The phone number format is incorrect, make sure you use your real number."
            }))
        }
        else{
            setPrice(price => ({
                value:price.value,
                valid: true,
                message: ""
            }))
        }
    }

    //validate description
    const validateDescription = (evt) => {
        setDescription(description => ({
            value: evt.target.value,
            valid: description.valid,
            message: description.message
        }))
        if (evt.target.value === ""){
            setDescription(description => ({
                value: description.value,
                valid: false,
                message: "This field is required."
            }))
        }
        else{
            setDescription(place => ({
                value: description.value,
                valid: true,
                message: ""
            }))
        }
    }



    return(
            <div>

                <br/>
                {/*TITLE POST PARTY*/}
                <Row className="text-center">
                    <Col><h1>Share your party here</h1></Col>
                </Row>
                <Row className="text-center">
                    <Col><p>You need to sign in to be able to post a party</p></Col>
                </Row>

                {/*TITLE*/}
                <Row className="text-center">
                    <Col md={6} xs={10} className="offset-md-3 offset-1">
                        <FormGroup >
                            <Label for="title">Party Title</Label>
                            <Input type="text" name="title" id="title" placeholder="Ex. Funky Fest..." onChange={validateTitle}/>
                            <FormText>{title.message}</FormText>
                        </FormGroup>
                    </Col>
                </Row>
                {/*PLACE*/}
                <Row className="text-center">
                    <Col md={6} xs={10} className="offset-md-3 offset-1">
                        <FormGroup >
                            <Label for="place">Place</Label>
                            <Input type="text" name="place" id="place" placeholder="Ex. Funky Bar..." onChange={validatePlace}/>
                            <FormText>{place.message}</FormText>
                        </FormGroup>
                    </Col>
                </Row>
                {/*address / city*/}
                <Row className="text-center">
                    <Col md={6} xs={10} className="offset-md-3 offset-1">
                        <FormGroup >
                            <Label for="address">City</Label>
                            <Input type="select" name="address" id="address" onChange={validateAddress}>
                                <option  value={"beirut"}>Beirut</option>
                                <option  value={"jounieh"}>Jounieh</option>
                                <option  value={"jbeil"}>Jbeil</option>
                                <option  value={"hamra"}>Hamra</option>
                                <option value={"tripoli"}>Tripoli</option>
                                <option value={"others"}>Others...</option>
                            </Input>
                            <FormText>{address.message}</FormText>
                        </FormGroup>
                    </Col>
                </Row>
                {/*DATE*/}
                <Row className="text-center">
                    <Col md={6} xs={10} className="offset-md-3 offset-1">
                        <FormGroup>
                            <Label for="date">Date</Label>
                            <Input
                                type="date"
                                name="date"
                                id="date"
                                onChange={validateDate}
                            />
                            <FormText>{date.message}</FormText>
                        </FormGroup>
                    </Col>
                </Row>
                {/*PHONE NUMBER*/}
                <Row className="text-center">
                    <Col md={6} xs={10} className="offset-md-3 offset-1">
                        <FormGroup>
                            <Label for="number">Phone Number</Label>
                            <Input
                                type="text"
                                name="number"
                                id="number"
                                placeholder="Ex. 71 112233"
                                pattern="[0-9]{8}"
                                minLength="8"
                                maxLength="8"
                                onChange={validatePhoneNumber}
                            />
                            <FormText>{phoneNumber.message}</FormText>
                        </FormGroup>
                    </Col>
                </Row>
                {/* PRICE */}
                <Row className="text-center">
                    <Col md={6} xs={10} className="offset-md-3 offset-1">
                        <FormGroup >
                            <Label for="price">Price</Label>
                            <InputGroup >
                                <Input type="text" name="price" id="price" placeholder="Ex. 80 000 ..." onChange={validatePrice}/>
                                <InputGroupText>L.L.</InputGroupText>
                            </InputGroup>
                            <FormText>{price.message}</FormText>
                        </FormGroup>
                    </Col>
                </Row>
                {/* DESCRIPTION */}
                <Row className="text-center">
                    <Col md={6} xs={10} className="offset-md-3 offset-1">
                        <FormGroup >
                            <Label for="description">Description</Label>
                            <Input type="text" name="description" id="description" placeholder="Ex. featuring DJ Bakoooo ..." onChange={validateDescription}/>
                            <FormText>{description.message}</FormText>
                        </FormGroup>
                    </Col>
                </Row>
                {/* IMAGE */}
                <Row className="text-center">
                    <Col md={6} xs={10} className="offset-md-3 offset-1">
                        <FormGroup>
                            <Label for="image">Image / Poster</Label>
                            <Input type="file" name="file" id="image" accept="image/*"/>

                        </FormGroup>
                    </Col>
                </Row>
                {/* SUBMIT */}
                <Row className="text-center">
                    <Col md={6} xs={10} className="offset-md-3 offset-1">
                        <Button className="btn btn-danger" onClick={handlePost} disabled={!allValid}>Post Party</Button>
                    </Col>
                </Row>

                <br/><br/>




            </div>
        );
}