import { createStore } from 'redux'


function pageReducer(state = { }, action){
    switch(action.type){
        case 'CHANGE_PAGE':
            return { ...state, page: action.page }
        default:
            return state;
    }
}

let store = createStore(pageReducer)

export default store;