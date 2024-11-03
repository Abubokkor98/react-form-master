import { useState } from "react";
import "./App.css";

import SimpleForm from "./Components/SimpleForm";
import StatefulForm from "./Components/StatefulForm";
import RefForm from "./Components/RefForm";
import CustomHookForm from "./Components/CustomHookForm";
import ReusableForm from "./Components/ReusableForm";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log('sign up data', data);
   
  };
  const handleUpdateProfile = (data) => {
    console.log('Update profile data', data);
  };

  return (
    <>  
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <CustomHookForm></CustomHookForm> */}
      <ReusableForm
        formTitle={"Sign Up"}
        handleSubmit={handleSignUpSubmit}
      >
        <div>
          <h2>
            Sing Up
          </h2>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        submitBtnText={"Update"}
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Update Profile</h2>
          <p>
            Always keep your profile updated
          </p>
        </div>
      </ReusableForm>
    </>
  );
}

export default App;
