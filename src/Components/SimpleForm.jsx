import React from 'react'

export default function SimpleForm() {
    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);

    }
  return (
    <div>
       <form action="" onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder='name'/>
        <br />
        <input type="text" name='email' placeholder='email'/>
        <br />
        <input type="text" name='phone' placeholder='mobile'/>
        <br />
        <input type="submit" value={'submit'} />
       </form>
        
    </div>
  )
}
