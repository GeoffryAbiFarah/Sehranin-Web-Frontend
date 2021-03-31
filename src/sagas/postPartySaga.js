import {POST_PARTY_REQUEST, POST_PARTY_RESPONSE} from "../types";
import {call, put, takeLatest} from 'redux-saga/effects';
import {postPartyCall} from '../api calls/postPartyAPI';

function* newParty(action){
    try{
        const result = yield call(postPartyCall, action.payload);
        yield put({type: POST_PARTY_RESPONSE, payload: result});
    }
    catch (e){
        console.log("Error in postPartySaga: ", e);
    }
}

export function* postPartySaga(){
    yield takeLatest(POST_PARTY_REQUEST, newParty)
}