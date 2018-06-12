import React from 'react'

import Message from './Message'

const MessageList = () => {
    const messages = [
        {
            id: 1,
            userName: 'vurhd1',
            body: 'Chatting up a storm, yo!',
        },
        {
            id: 2,
            userName: 'vurhd2?',
            body: 'This guy is so annoying, I hate my job.',
        }
    ]

    return(
        <div className='MessageList'>
            {
                messages.map(msg => <Message key={msg.id} message={msg} />)
            }
        </div>
    )
}

export default MessageList