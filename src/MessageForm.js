import React from 'react'

const MessageForm = () =>{
    return(
        <form className='MessageForm'>
            <input
                type='text'
                name='body'
                placeholder='Type a message...'
            />
        </form>
    )
}

export default MessageForm