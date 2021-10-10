import React from 'react'
import './Chats.css'
import Navbar from '../../Navbar'
export default function Chat() {
    return (
        <>
        <Navbar />
          <div className="chat-mid-part">
           <div className="top-bar">
              <div className="top-left"></div>
              <div className="top-right"></div>
           </div>
           <div className="bottom-bar">
                <div className="contact-list">

                </div>
                <div className="contact-chat">
                    
                </div>  
           </div>
           
         </div>  
        </>
    )
}
