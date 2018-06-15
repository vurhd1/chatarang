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

            <form className="MessageForm" onSubmit={this.handleSubmit} style={this.styles.messageForm}>
                <div className="chatIcon" style={this.styles.messageFormChatIcon}>
                    <i className="fas fa-comment-alt"></i>
                </div>
                <input
                    type='text'
                    name='body'
                    placeholder='Type a message...'
                    value={this.state.body}
                    onChange={this.handleChange}
                    style={this.styles.messageFormInput}
                />
                <button type="Submit">
                    <i className="far fa-paper-plane" title="Send"></i>
                </button>
            </form>

        )
    }

    styles = {

        //..MessageForm
            messageForm: {
                    backgroundColor: "white",
                    height: "3rem",
                    display: "flex",
                    alignItems: "stretch",
                    border: "2px solid #999",
                    borderRadius: "0.5rem",
                    margin: "0.25rem",
                    padding: "0"
            },
        //.MessageForm .chatIcon
            messageFormChatIcon: {
                    display: "flex",
                    borderRadius: "0.5rem",
                    alignItems: "center",
                    backgroundColor: "white",
                    color: "#ccc",
                    padding: "0 0.5rem",
                    fontSize: "1.2rem"
            },
        //.MessageForm input
            messageFormInput: {
                    flex: "1",
                    fontSize: "1.2rem",
                    border: "0"
            },
        //.MessageForm input:focus
            messageFormInputFocus: {
                    outline: "0"
            },
        //.MessageForm button
            MessageFormButton: {
                    fontSize: "1.5rem",
                    backgroundColor: "#1A8FE3",
                    color: "white",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    borderTopRightRadius: "0.5rem",
                    borderBottomRightRadius: "0.5rem",
                    border: "1px solid white"
            }
        }

}

export default MessageForm