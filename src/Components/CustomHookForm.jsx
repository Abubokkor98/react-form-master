import React from "react";
import useInputState from "../Hook/useInputState";

export default function CustomHookForm() {
    // const [name, handleNameChange] = useInputState('rojoni hooked')
    const emailState = useInputState('rojoni@gmail.com')

    const handleSubmit = e => {
        e.preventDefault();
        console.log('form data', emailState.value);
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="" placeholder="name" /> */}
        <br />
        <input {...emailState} type="email" name="email" placeholder="email" />
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <input type="submit" value={"submit"} />
      </form>
    </div>
  );
}
