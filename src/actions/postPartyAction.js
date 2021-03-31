import {POST_PARTY_REQUEST, POST_PARTY_RESPONSE} from "../types";

export function postParty(party){
    return({
        type: POST_PARTY_REQUEST,
        payload: party
    });
}

export function postPartyResp(party){
    return({
        type: POST_PARTY_RESPONSE,
        payload: party
    });
}