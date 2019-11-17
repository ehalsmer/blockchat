import React, {createContext, useReducer} from 'react';

export const Context = createContext();

const initialState = {
    general: [
        {from: "ehalsmer", message: "Hello!", channel: "general"},
        {from: "lonavarro", message: "asdf", channel: "general"},
        {from: "anmoore", message: "Test test test!", channel: "general"}
    ],
    questions: [
        {from: "ehalsmer", message: ";oij3rn34n142,r v wer l342", channel: "questions"},
        {from: "user982", message: "What?", channel: "questions"},
        {from: "pumpkin", message: "Hi everyone", channel: "questions"},
        {from: "ehalsmer", message: "Stuff and things", channel: "questions"}
    ],
    off_topic: [
        {from: "anmoore", message: "24kj4hlknsd !", channel: "off_topic"},
        {from: "lonavarro", message: "What lovely weather we're having", channel: "off_topic"},
        {from: "anmoore", message: "...", channel: "off_topic"}
    ]
}

const reducer = (state, action) => {
    const {from, message, channel} = action.payload // destructuring 
    switch(action.type){
        case "RECEIVE_MESSAGE":
            return {
                ...state,
                [channel]: [
                    ...state[channel], {from, message, channel}
                ]
            }
        default:
            return state
    }
}

const Store = (props) => {

    const reducerHook = useReducer(reducer, initialState)
    return (
        <Context.Provider value={reducerHook}>
            {props.children}
        </Context.Provider>
    )
}

export default Store;