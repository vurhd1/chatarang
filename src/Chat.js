import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component{

    constructor(){
        super()
        this.state = {
            messages: [
                {
                    id: 1,
                    userName: 'vurhd1',
                    body: 'cool',
                },
                {
                    id: 2,
                    userName: 'vurhd2?',
                    body: 'This guy is so annoying, I hate my job.',
                }
            ]
        }
    }

    addMessge = () =>{
        const messages = [...this.state.messages]
        messages.push({
            id:Date.now().messages,
            userName: 'vurhd3',
            body: 'I want food',
        })

        this.setState({messages})
    }

    render(){
        return(
            <div className='Chat'>
                <ChatHeader />
                <MessageList messages={this.state.messages}/>
                <MessageForm addMessage={this.addMessge}/>
            </div>
        )
    }
}

export default Chat