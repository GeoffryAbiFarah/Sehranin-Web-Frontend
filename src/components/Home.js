import {Component} from 'react';
import "../styles/Home.css";
import PartyCard from "./PartyCard";
import Search from "./Search";

class Home extends Component{

    render(){
        return(
            <div>
                <Search/>
                <PartyCard/>
            </div>
        );
    }
}

export default Home;