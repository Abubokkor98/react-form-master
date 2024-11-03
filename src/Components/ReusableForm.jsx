import React from 'react'

export default function ReusableForm({formTitle,handleSubmit, submitBtnText='Submit', children}) {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value 
        }
        handleSubmit(data);
    }

  return (
    <div>
        <h2>{children}</h2>
        <form action="" onSubmit={handleLocalSubmit}>
        <input type="text" name="name" id="" placeholder='name'/>
        <br />
        <input type="text" name='email' placeholder='email'/>
        <br />
        <input type="password" name='password' placeholder='password'/>
        <br />
        <input type="submit" value={submitBtnText} />
       </form>
    </div>
  )
}
