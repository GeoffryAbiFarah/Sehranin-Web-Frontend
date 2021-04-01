import {Form, FormGroup, Label, Input, InputGroup, InputGroupText} from 'reactstrap';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import { postParty } from '../actions/postPartyAction';

export default function PostParty (){

    const dispatch = useDispatch();

    const onSubmit = () => {
        const title = document.getElementById('title-id').value.toString();
        const place = document.getElementById('place-id').value.toString();
        const address = document.getElementById('address-id').value.toString();
        const date = document.getElementById('date-id').value.toString();
        const time = document.getElementById('time-id').value.toString();
        const number = document.getElementById('number-id').value.toString();
        const price = document.getElementById('price-id').value.toString();
        const drinks = document.getElementById('drinks-id').value.toString();
        const description = document.getElementById('description-id').value.toString();
        const image = document.querySelector('input[type="file"]').files[0];

        const party = {
            title,
            place,
            address,
            date,
            time,
            number,
            price,
            drinks,
            description,
            image
        }
        console.log("in component:" , party);



        dispatch(postParty(party));

        //post request for posting party
        // const formData = new FormData()
        // formData.append('image', image.files[0]);
        // formData.append('data', data);
        //
        // fetch("http://localhost:3000/parties", {
        //     method: 'POST',
        //     body: formData
        // }).then(info => {
        //     console.log(info);
        // })
        //     .catch(err => console.log(err));
    }


        return(
            <div className="container">

                <h2 className="text-center mt-2" style={{color: "purple"}}>You want to share your party ?</h2>
                <h4 className="text-center" style={{color: "purple"}}>Fill this form to share it !</h4>
                <Form >
                    <FormGroup >
                        <Label for="title-id">Title</Label>
                        <Input type="text" name="title" id="title-id" placeholder="Ex. Funky Fest..." />
                    </FormGroup>
                    <FormGroup >
                        <Label for="place-id">Place</Label>
                        <Input type="text" name="place" id="place-id" placeholder="Ex. Funky Bar..." />
                    </FormGroup>
                    <FormGroup >
                        <Label for="address-id">Address</Label>
                        <Input type="text" name="address" id="address-id" placeholder="Ex. Beirut..." />
                    </FormGroup>
                    <FormGroup>
                        <Label for="date-id">Date</Label>
                        <Input
                            type="date"
                            name="date"
                            id="date-id"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="time-id">Open Time</Label>
                        <Input
                            type="time"
                            name="time"
                            id="time-id"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="number-id">Phone Number</Label>
                        <Input
                            type="text"
                            name="number"
                            id="number-id"
                            placeholder="Ex. 71 112233"
                            pattern="[0-9]{8}"
                            minLength="8"
                            maxLength="8"
                        />
                    </FormGroup>
                    <FormGroup >
                        <Label for="price-id">Price</Label>
                        <InputGroup >
                            <Input type="text" name="price" id="price-id" placeholder="Ex. 80 000 ..." />
                            <InputGroupText>L.L.</InputGroupText>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label for="drinks-id">Drinks</Label>
                        <Input type="select" name="drinks" id="drinks-id">
                            <option>Hell Yeah :)</option>
                            <option>Nope :(</option>
                        </Input>
                    </FormGroup>
                    <FormGroup >
                        <Label for="description-id">Description</Label>
                        <Input type="text" name="description" id="description-id" placeholder="Ex. featuring DJ Bakoooo ..." />
                    </FormGroup>
                    <FormGroup>
                        <Label for="image-id">Image / Poster</Label>
                        <Input type="file" name="file" id="image-id" accept="image/*"/>

                    </FormGroup>


                </Form>
                <Link to="/" className=" btn btn-default text-center btn-outline-info" onClick={() => onSubmit()}>Submit</Link>
            </div>
        );
}