import { useState } from "react";

export default function Form(){
    let [formData,setFormData] = useState({
        fullName :"",
        userName:""
    });
      
    let handleInputChange=(event)=>{
        let fieldName = event.target.name;
        let newValue = event.target.value;
        console.log(newValue);

        setFormData((currData) =>{
            currData[fieldName] = newValue;
            return{...currData ,[fieldName]:newValue}
        })
    };
    
    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData)
        setFormData({
            fullName :"",
            userName:""
        });
    }; 
    // let handleNameChange = (event)=>{
    //     setFullName(event.target.value)
    // }

    //  let handleUserNameChange = (event)=>{
    //     setUserName(event.target.value)
    // }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>  
            <input placeholder="enter your full name" type="text" id="fullName" value={formData.fullName} onChange={handleInputChange}  name = "fullName"/>
            <br/>
            <label htmlFor="userName">User Name</label>  
            <input placeholder="enter your user name" type="text" id="userName" value={formData.userName} onChange={handleInputChange} name="userName"/>

            <button>Submit</button>
        </form>
    );
}