import React from 'react'

const ChatHeader  = () => {
    return(
        <div className='ChatHeader' style={styles.chatHeader}>
            <header className="ChatHeader">
                <div className="roomInfo">
                    <h2 style={styles.chatHeaderRoomInfoh2}>#general</h2>
                    <p style={styles.chatHeaderRoomInfop}>Announcements and general chat</p>
                </div>
            </header>
        </div>
    )
}

const styles = {
    //.ChatHeader
        chatHeader: {
                backgroundColor: "#f3f3f3",
                borderBottom: "1px solid #ccc",
                height: "3rem",
                padding: "0 1rem",
                display: "flex",
                alignItems: "center"
        },
    //.ChatHeader .roomInfo h2
        chatHeaderRoomInfoh2: {
                fontSize: "1.1rem",
                margin: "0"
        },
    //.ChatHeader .roomInfo p
        chatHeaderRoomInfop: {
                color: "#999",
                margin: "0",
                fontSize: "0.8rem"
        }
    }

export default ChatHeader