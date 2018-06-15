import React from 'react'

const Metadata = (props) => {
    return(
        <div className="Metadata" style={styles.metadata}>
            <div className="user" style={styles.metadataUser}>{props.userName}</div>
            <div className="time" style={styles.metadataTime}>1:10 PM</div>
        </div>
    )
}

var styles = {
//.Metadata
    metadata: {
        display: "flex",
        alignItems: "baseline"
    },
//.Metadata .user
    metadataUser: {
        fontWeight: "bold",
        marginRight: "0.5rem"
    },
//.Metadata .time
    metadataTime: {
        color: "#999",
        fontSize: "0.8rem"
    }
}

export default Metadata