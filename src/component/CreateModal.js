import React from "react";
import { Button, Modal } from "react-bootstrap";

function CreateModal(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload User Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <div>
                <span>Name : </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  onChange={(e) => {
                    props.setnewUserData({
                      ...props.newuserData,
                      name: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <span>Email : </span>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                  onChange={(e) => {
                    props.setnewUserData({
                      ...props.newuserData,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <span>Phone : </span>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  onChange={(e) => {
                    props.setnewUserData({
                      ...props.newuserData,
                      phone: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.submitNewUserData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;
