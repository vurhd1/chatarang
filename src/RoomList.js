import React from 'react'

const RoomList = () => {
    return(
        <nav className="RoomList">
            <h2 style={styles.roomListh2}>Rooms</h2>
            <ul style={styles.roomListul}>
                <li style={styles.roomListli}><a href="#" style={styles.roomListlia}>general</a></li>
                <li style={styles.roomListli}><a href="#" style={styles.roomListlia}>random</a></li>
            </ul>
        </nav>
    )
}

var styles = {

    //.RoomList h2
        roomListh2: {
                fontSize: "1rem"
        },
    //.RoomList ul
        roomListul: {
                listStyle: "none",
                marginLeft: "0",
                paddingLeft: "0"
        },
    //.RoomList li
        roomListli: {
                marginBottom: "0.5rem"
        },
    //.RoomList li a
        roomListlia: {
                display: "block",
                color: "whitesmoke",
                textDecoration: "none"
        },
    //.RoomList li a::before
        roomListliaBefore: {
                content: "'# '"
        },
    //.RoomList li a:hover
        roomListliaHover: {
                backgroundColor: "rgba(255, 255, 255, 0.2)"
        }
    }

export default RoomList