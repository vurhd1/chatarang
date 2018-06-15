import React from 'react'

import Avatar from './Avatar'

const UserInfo = (props) =>{
    return(
        <div className="UserInfo" style={styles.userInfo}>
            <div className='Avatar' style={styles.userInfoAvatar}>
                <Avatar />
            </div>
            <div className="user" style={styles.userInfoUser}>{props.user.userName}</div>
            <a href="#">
                <i className="fas fa-sign-out-alt"></i>
            </a>
        </div>
    )
}

var styles = {

//.UserInfo
  userInfo: {
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center"
  },
//.UserInfo .Avatar
    userInfoAvatar: {
        marginRight: "0.5rem"
    },
//.UserInfo .user
    userInfoUser: {
        flex: "1"
    },
//.UserInfo a
    userInfoA: {
        border: "0",
        padding: "0",
        backgroundColor: "transparent",
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: "1.2rem",
        transition: "color 0.25s ease-out"
    },
//.UserInfo a:hover
    userInfoaHover: {
        color: "white"
    },
}

export default UserInfo