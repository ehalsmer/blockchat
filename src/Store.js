import React, {createContext, useReducer} from 'react';
import io from 'socket.io-client';



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



// socket declared outside of Store component so it doesn't rerender every time the Store reloads
let socket;

const sendMessageAction = (value) => {
    socket.emit('chat message', value)
}
const user = 'user' + (Math.random()*100).toFixed(0);


const Store = (props) => {
    if (!socket){
        // console.log('attempting to connect from client')
        socket = io(':3004');
    }
    socket.on('chat message', (message)=>{
        console.log('message received from server: ', message)
    })
    

    const [allMessages] = useReducer(reducer, initialState)
    return (
        // sending {allMessages as an object}
        <Context.Provider value={{allMessages, sendMessageAction, user}}>
            {props.children}
        </Context.Provider>
    )
}

export default Store;