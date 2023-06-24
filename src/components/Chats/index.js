import { Component } from "react"; 
import InputEmoji from "react-input-emoji";
import {v4} from 'uuid';
import { GrAddCircle } from "react-icons/gr";
import {IoMdContacts} from 'react-icons/io';

import ChatItems from '../ChatItems'
import './index.css'


const name="Rajaram Manikanta"
const poland="Poland Office"
const india="India Office" 
const introductions="Introductions"

class Chats extends Component{
    state={inputText: "",messageList: [],introductionChecked: false,polandChecked: false,indiaChecked: false} 

    getMessageInput=text=>{
        this.setState({inputText: text})  
    }

    
    renderMessageList=()=>{
        const{messageList}=this.state  
        return messageList.map(eachMessage=>(
            <ChatItems eachMessage={eachMessage} key={eachMessage.id}/>
        ))
    }

    changeToIntro=()=>{
        this.setState(preState=>({introductionChecked: !preState.introductionChecked}))


    } 

    changeToIndia=()=>{
        this.setState(preState=>({indiaChecked: !preState.indiaChecked}))
       
        
    }

    changeToPoland=()=>{
        this.setState(preState=>({polandChecked: !preState.polandChecked}))
       
        
    }


   

    onAddMessage=()=>{
        const{inputText}=this.state   
        const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]  
        const randomName=user_list[Math.ceil(Math.random()*user_list.length-1)]
        console.log(randomName)
        const newMessage={
            id: v4(),
            message: inputText,
            date: new Date(),
            userName: randomName
        }
        this.setState(preState=>({
            messageList: [...preState.messageList,newMessage],
            inputText: " ",
        }
            
        ))
    }

    renderConversation=()=>{
        const{inputText,messageList}=this.state 
        return(
            <div className="conversations-container">
            <div className="header-part">
            <div className="heading-desc">
            <h2 className="role1">Introductions</h2>
            <p className="role">This Channel Is For Company Wide Chatter</p>
            </div> 
            <div className="counts">
                <h4 className="role">{messageList.length}|100</h4>
                <IoMdContacts className="contacts-logo"/> 
               
            </div>
                   
            </div>
            <hr className="line"/>   
              <ul className="list-container">
              {this.renderMessageList()}
              </ul>
            <div className="input-container">
         
            <InputEmoji className="input-text" placeholder="Type Message" value={inputText} onChange={this.getMessageInput} onEnter={this.onAddMessage} />
              
      
            </div>
      
         </div>
        )
    }

    renderConversationIndia=()=>{
        const{inputText,messageList}=this.state 
        return(
            <div className="conversations-container">
            <div className="header-part">
            <div className="heading-desc">
            <h2 className="role1">India</h2>
            <p className="role">This Channel Is For Company Wide Chatter</p>
            </div> 
            <div className="counts">
                <h4 className="role">{messageList.length}|100</h4>
                <IoMdContacts className="contacts-logo"/> 
               
            </div>
                   
            </div>
            <hr className="line"/>   
              <ul className="list-container">
              {this.renderMessageList()}
              </ul>
            <div className="input-container">
         
            <InputEmoji className="input-text" placeholder="Type Message" value={inputText} onChange={this.getMessageInput} onEnter={this.onAddMessage} />
              
      
            </div>
      
         </div>
        )
    }

    renderConversationPoland=()=>{
        const{inputText,messageList}=this.state 
        return(
            <div className="conversations-container">
            <div className="header-part">
            <div className="heading-desc">
            <h2 className="role1">Poland</h2>
            <p className="role">This Channel Is For Company Wide Chatter</p>
            </div> 
            <div className="counts">
                <h4 className="role">{messageList.length}|100</h4>
                <IoMdContacts className="contacts-logo"/> 
               
            </div>
                   
            </div>
            <hr className="line"/>   
              <ul className="list-container">
              {this.renderMessageList()}
              </ul>
            <div className="input-container">
         
            <InputEmoji className="input-text" placeholder="Type Message" value={inputText} onChange={this.getMessageInput} onEnter={this.onAddMessage} />
              
      
            </div>
      
         </div>
        )
    }

   
    render(){
        const{introductionChecked,polandChecked,indiaChecked}=this.state  
        console.log(introductionChecked)
        const getIntroClassName=introductionChecked ? `conversation-container-intro`: ''
        const getIndiaClassName=indiaChecked ? `conversation-container-intro`: ' '
        const getPolandClassName=polandChecked ? `conversation-container-intro`:' '
         return(
            <div className="overall-container">
             <div className="menu-container">
                <div className="profile-container">
                    <div className="avatar">
                         <p className="avatar-name">{name[0]}{name[8]}</p> 
                    </div>
                    <div>
                    <h1 className="my-name">{name}</h1>
                    <p className="role">Full stack Developer</p>
                    </div>
                </div>
                <div className="converations-container">
                <h1 className="role">Conversations</h1>
                <GrAddCircle className="add-icon"/>
                </div>
                <div className={`conversation-container ${getIndiaClassName}`} onClick={this.changeToIndia}>
                <div className="conversation-logo">
                    <p>{india[0]}{poland[7]}</p>
                </div>
                <p>{india}</p>
               </div>
               <div className={`conversation-container ${getPolandClassName}`} onClick={this.changeToPoland}>
                <div className="conversation-logo" >
                    <p>{poland[0]}{poland[7]}</p>
                </div>
                <p>{poland}</p>
               </div>
              
               <div className={`conversation-container ${getIntroClassName}`} onClick={this.changeToIntro}>
                <div className="conversation-logo">
                    <p>{introductions[0]}</p>
                </div>
                <p>{introductions}</p>
               </div>
             </div>
              {introductionChecked && this.renderConversation()} 
              {polandChecked && this.renderConversationPoland()} 
              {indiaChecked && this.renderConversationIndia()}
           
            </div>

        )
    }
}


export default Chats