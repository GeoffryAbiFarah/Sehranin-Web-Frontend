import { InputGroup, InputGroupAddon, InputGroupText, Input,Button } from 'reactstrap';
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {config} from "../config";

function Account() {
    const logged = useSelector(state => state.loggedReducer)
    console.log(logged);
    const [user, setUser] = useState({});
    
    useEffect(() => {
        refreshUser();
    }, [])

    const refreshUser = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' , 'Authorization': `Bearer ${logged.token}`},
        };

        fetch(config.BE_URL+ '/users/id/' + logged.id, requestOptions)

            .then(response => {
                response.json()
                    .then(data => { setUser(data); })
                
        })
        .catch(err => {
            console.log("GET USER FETCHING ERROR: ", err);
        })
    }

 
    
    const handleUpdate = () => {
        const data = {
            username: document.getElementById("username").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value,
        };
        console.log(data);
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' , 'Authorization': `Bearer ${logged.token}`},
            body: JSON.stringify(data)
        };

        fetch(config.BE_URL + '/users/id/'+logged.id, requestOptions)

            .then(response => {
                console.log("PUT USER FETCHING RESPONSE: ",response.json());
            })
            .catch(err => {
                console.log("PUT USER FETCHING ERROR: ", err);
            })
            console.log(user);
    }
   
    const handleDelete = () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' , 'Authorization': `Bearer ${logged.token}`},
            
        }
        fetch(config.BE_URL+'/users/id/'+logged.id, requestOptions)
            .then(response => {
                console.log("DELETE USER FETCHING RESPONSE: ",response.json());
            })
            .catch(err => {
                console.log("DELETE USER FETCHING ERROR: ", err);
            })
    }
    if (!user) {
        
        return (
            <div>You need to be logged in!</div>
        );
     }
    return(
        <div>
            <h1>User information!</h1>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
                <Input id="username" defaultValue={user.username} />
      </InputGroup>
      <br />
        <InputGroup>
            <InputGroupAddon addonType="append">
                <InputGroupText>Email</InputGroupText>
            </InputGroupAddon>
            <Input id="email" defaultValue={user.email} />
      </InputGroup>
      <br />
      <InputGroup>
            <InputGroupAddon addonType="append">
                <InputGroupText>Phone</InputGroupText>
            </InputGroupAddon>
            <Input id="phone" defaultValue={user.phone} />
      </InputGroup>
        <br />            
        <Button className="btn btn-danger" onClick={handleUpdate}>Update User</Button>
        <br />
        <br />       
        <Button className="btn btn-danger" onClick={handleDelete}>Delete User</Button>
                   
    </div>  
    );
    
}

export default Account;