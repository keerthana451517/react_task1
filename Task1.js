import React from "react";
import Button from 'react-bootstrap/Button';
function Task1(){
  return(
    <>
    <center>
    <h1>Notifications</h1><br/>
    <Button className="box" variant="primary">Information Message</Button>{' '}<br/><br/>
      <Button className="box" variant="success">Success Message</Button>{' '}<br/><br/>
      <Button className="box" variant="warning">Warning Message</Button>{' '}<br/><br/>
      <Button className="box" variant="danger">Error Message</Button>{' '}
      </center>
    </>
  )
}
export default Task1;