import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setEditData } from "../redux/actions";

function CreateModal(props) {
  const dispatch = useDispatch();

  function submitEditData(i) {
    // console.log(props.reduxSingleUser, i);

    dispatch(setEditData(props.reduxSingleUser, i));

    props.setOpenEditModal(false);
    props.setShow(false);
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.openEditModal === true
              ? "Edit User Data"
              : "Upload User Data"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <div>
                <span>Name : </span>
                <input
                  type="text"
                  name="name"
                  value={
                    props.openEditModal === true
                      ? props.reduxSingleUser.name
                      : props.newuserData.name
                  }
                  placeholder="Enter Your Name"
                  onChange={(e) => {
                    props.openEditModal === true
                      ? props.setReduxSingleUser({
                          ...props.reduxSingleUser,
                          name: e.target.value,
                        })
                      : props.setnewUserData({
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
                  value={
                    props.openEditModal === true
                      ? props.reduxSingleUser.email
                      : props.newuserData.email
                  }
                  onChange={(e) => {
                    props.openEditModal === true
                      ? props.setReduxSingleUser({
                          ...props.reduxSingleUser,
                          email: e.target.value,
                        })
                      : props.setnewUserData({
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
                  value={
                    props.openEditModal === true
                      ? props.reduxSingleUser.phone
                      : props.newuserData.phone
                  }
                  onChange={(e) => {
                    props.openEditModal === true
                      ? props.setReduxSingleUser({
                          ...props.reduxSingleUser,
                          phone: e.target.value,
                        })
                      : props.setnewUserData({
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

          {props.openEditModal === true ? (
            <Button
              variant="primary"
              onClick={() => submitEditData(props.reduxSingleUser.index)}
            >
              Save Changes
            </Button>
          ) : (
            <Button variant="primary" onClick={props.submitNewUserData}>
              Submit
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;
