import React from 'react'

import Metadata from './Metadata'
import Avatar from './Avatar'

const Message = (props) =>{
    return(
        <div className="Message" style={styles.message}>
        <Avatar />
        <div className="details" style={styles.messageDetails}>
            <Metadata userName={props.message.userName}/>
            <div className="body">
                {props.message.body}
            </div>
        </div>
      </div>
    )
}

var styles = {

    //.Message
        message: {
                display: "flex",
                marginTop: "1rem",
                padding: "0 1rem"
        },
    //.Message .details
        messageDetails: {
                flex: "1",
                paddingLeft: "0.5rem"
        }
    }

export default Message