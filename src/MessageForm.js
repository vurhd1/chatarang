import React, {Component} from 'react'

class MessageForm extends Component{

    state = {
        body: '',

    }

    handleChange = (ev) =>{
        this.setState({ body: ev.target.value})
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.addMessage(this.state.body)
        this.setState({body:''})
    }

    render(){
        return(
            <form className='MessageForm' onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='body'
                    placeholder='Type a message...'
                    value={this.state.body}
                    onChange={this.handleChange}
                />
                <button type="Submit">Send</button>
            </form>
        )
    }
}

export default MessageForm