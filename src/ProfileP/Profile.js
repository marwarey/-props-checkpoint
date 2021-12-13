import React from 'react'

const Profile = (props) => {
    const handleName = (a) => {
        a.preventDefault();
        alert(`the name is ${props.name} ${props.lastName}`);

    }
    return (
        <div style={{height:'100%' }}>
            <img src={props.img} alt='profilepic' style= {{borderRadius:'50%',height:'300px',witdh:'300px'}}/>
            <br/>
            <label style={{color:'purple',fontWeight:"bold"}}>Name :</label> 
            <p>{props.name}</p>
            <label style={{color:'purple',fontWeight:"bold"}}>Last Name :</label>
            <p>{props.lastName}</p>
            <label style={{color:'purple',fontWeight:"bold"}}>Profession :</label>
            <p>{props.profession}</p>
            <label style={{color:'purple',fontWeight:"bold"}}>Bio : </label>
            <p>{props.bio}</p>
            <button onClick={handleName}
            style={{
                borderRadius:'5%',
                backgroundColor:'#dc3545',
                borderColor:'#dc3545' ,
                color:'white',
                textAlign: "center",
                marginLeft:'100px'
                
            }}>Click here</button>
            
        </div>
    )
}
Profile.defaultProps ={
    name : 'Your name' ,
    lastName: ' Your last name' ,
    bio: 'Your Bio' , 
    profession: 'Your Profession'

};

export default Profile