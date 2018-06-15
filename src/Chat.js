import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component{

    constructor(){
        super()
        this.state = {
            messages: []
        }
    }

    addMessge = (body) =>{
        const messages = [...this.state.messages]
        messages.push({
            id:Date.now().messages,
            userName: this.props.user.userName,
            body: body,
        })

        this.setState({messages})
    }

    render(){
        return(
            <div className='Chat' style={this.styles}>
                <ChatHeader />
                <MessageList messages={this.state.messages}/>
                <MessageForm addMessage={this.addMessge}/>
            </div>
        )
    }

    styles = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    }

}



export default Chat