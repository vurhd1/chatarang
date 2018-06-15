import React from 'react'

const UserInfo = (props) =>{
    return(
        <div className="Message" style={styles.message}>
        <div
          className="Avatar"
        ></div>
        <div className="details" style={styles.messageDetails}>
          <div className="Metadata">
            <div className="user">{props.message.userName}</div>
            <div className="time">4:20 PM</div>
          </div>
          <div className="body">
            : {props.message.body}
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

export default UserInfo