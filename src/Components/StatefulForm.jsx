import React, { useState } from 'react'
import './StatefulForm.css'
export default function StatefulForm() 
{
    const [name, setName] = useState('Abu Bokkor');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        
        if(password.length < 6){
            setError('Password must be 6 characters');
        }
        else{
            setError('');
        }

        console.log(name, email, password);
    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value);
        // console.log(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
        // console.log(e.target.value);
    }


  return (
    <div>
         <form action="" onSubmit={handleSubmit}>
        <input
         onChange={handleNameChange}
         type="text" name="name" value={name} id="" placeholder='name'/>
        <br />
        <input type="text" 
        onChange={handleEmailChange}
        name='email' placeholder='email'/>
        <br />
        <input type="password" 
        onChange={handlePasswordChange}
        name='password' placeholder='password' required/>
        <br />
        <input type="submit" value={'submit'} />
        {
            error && <p>{error}</p>
        }
       </form>
    </div>
  )
}
