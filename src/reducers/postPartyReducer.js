import {POST_PARTY_RESPONSE} from "../types";

const initialState = {
    postedParty: null
}

export default function postParty(state = initialState, action){
    switch(action.type){
        case POST_PARTY_RESPONSE:
            return {...state,
            postedParty: action.payload};
        default:
            return state;
    }
}