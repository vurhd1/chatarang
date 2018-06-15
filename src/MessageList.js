import React from 'react'

import Message from './Message'

const MessageList = (props) => {

    return(
        <div className='MessageList' style={styles.messageList}>
            <div className="roomAnnouncement" style={styles.messageListRoomAnnouncement}>
                <h3 style={styles.messageListRoomAnnouncementh3}>#general</h3>
                <p>This is the very beginning of the #general room.</p>
            </div>
            {
                props.messages.map(msg => (<Message key={msg.id} message={msg} />))
            }
        </div>
    )
}

const styles = {

    //.MessageList
        messageList: {
                backgroundColor: "white",
                flex: "1",
                paddingBottom: "1rem",
                overflowY: "scroll"
        },
    //.MessageList .roomAnnouncement
        messageListRoomAnnouncement: {
                padding: "2rem 1rem"
        },
    //.MessageList .roomAnnouncement h3
        messageListRoomAnnouncementh3: {
                fontSize: "1.5rem"
        }
    }

export default MessageList