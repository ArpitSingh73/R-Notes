import React from "react";

const Alert = (props) => {
const capital = (word)=>{
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice();
}

  return (
    <div style={{height : "50px"}}>
     {props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role = "alert">
       <strong> {capital(props.alert.type)}</strong> : {props.alert.msg}
      </div>}
    </div>
  );
};

export default Alert;
