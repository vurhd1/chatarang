import React from 'react'

const Metadata = () => {
    return(
        <div class="Metadata">
            <div class="user">Davey</div>
            <div class="time">1:10 PM</div>
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