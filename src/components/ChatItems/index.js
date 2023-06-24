import {formatDistanceToNow} from 'date-fns'
import './index.css'


const ChatItems=(props)=>{
    const{eachMessage}=props 
    const{message,date,userName}=eachMessage  
    const subPart=userName[0] 
    const postedDate=formatDistanceToNow(date)  
    return(
        <li className='message-card'>
            <div className='profile-container'>
                <div className='user-logo'>
                   <p>{subPart}</p>
                </div>
                <h3 className='username'>{userName}</h3>
                <h5 className='time'>{postedDate} ago</h5>
            </div>
            <div className='message-container'>
            <p className='message'>{message}</p>
            </div>
          
        </li>
    )

}

export default ChatItems