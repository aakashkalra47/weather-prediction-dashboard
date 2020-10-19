import {FETCH_WEATHER} from '../actions/index';
export default function(state=[],action){
    switch(action.type){
        case FETCH_WEATHER:
            // console.log("1. action.payload.data = ", action.payload.data);
            return [action.payload.data];
        
    }
    return state;
}