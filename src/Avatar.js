import React from 'react'

const Avatar = () => {
    return(
        <div
            className="Avatar"
            style={styles}
        ></div>
    )
}

var styles = {
    height: "40px",
    width: "40px",
    fontSize: "1rem",
    borderRadius: "20px",
    background: 'url(https://api.adorable.io/avatars/32/davey@getfretless.com)',
}

export default Avatar