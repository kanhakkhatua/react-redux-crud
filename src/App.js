import "./App.css";
import { Table, Button } from "react-bootstrap";
import CreateModal from "./component/CreateModal";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSingleUser, setUpdatedData, deleteUserData } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState(null);
  const [newUser, setNewUser] = useState(useSelector((state) => state.AllUser));

  const [reduxSingleUser, setReduxSingleUser] = useState({});
  const [openEditModal, setOpenEditModal] = useState(false);

  const allReduxData = useSelector((state) => state.AllUser);
  const singleUser = useSelector((state) => state.SingleUser);

  const [newuserData, setnewUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const clearData = () => {
    setnewUserData({
      ...newuserData,
      name: "",
      email: "",
      phone: "",
    });
  };

  useEffect(() => {
    setNewUser(allReduxData);
  }, [allReduxData]);

  useEffect(() => {
    setReduxSingleUser(singleUser);
  }, [singleUser]);

  const handleShow = () => {
    clearData();
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
    setOpenEditModal(false);
  };
  const [show, setShow] = useState(false);

  function submitNewUserData() {
    newUser.push(newuserData);
    dispatch(setUpdatedData(newUser));

    setShow(false);
    clearData();
  }

  function EditUser(i) {
    setEditIndex(i);
    dispatch(setSingleUser(newUser[i]));
    setOpenEditModal(true);
    setShow(true);
  }

  function submitEditData() {
    let i = editIndex;

    newUser[i].name = reduxSingleUser.name;
    newUser[i].email = reduxSingleUser.email;
    newUser[i].phone = reduxSingleUser.phone;

    dispatch(setUpdatedData(newUser));

    setShow(false);
    setOpenEditModal(false);
  }

  function DeleteUser(ind) {
    let filterArr = newUser.filter((val, i) => i !== ind);
    dispatch(deleteUserData(filterArr));
  }

  return (
    <>
      <h1>Home Page</h1>
      <Button variant="primary" onClick={handleShow}>
        Add User
      </Button>

      <CreateModal
        handleClose={handleClose}
        show={show}
        openEditModal={openEditModal}
        reduxSingleUser={reduxSingleUser}
        newuserData={newuserData}
        setReduxSingleUser={setReduxSingleUser}
        setnewUserData={setnewUserData}
        submitEditData={submitEditData}
        submitNewUserData={submitNewUserData}
      />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {newUser.map((ele, i) => {
            return (
              <tr key={i}>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
                <td>
                  <Button onClick={() => EditUser(i)}>Edit</Button>
                </td>
                <td>
                  <Button onClick={() => DeleteUser(i)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default App;
