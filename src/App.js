import "./App.css";
import { Table, Button } from "react-bootstrap";
import CreateModal from "./component/CreateModal";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAllUser, setSingleUser } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState(useSelector((state) => state.AllUser));
  // console.log(newUser);
  const [reduxSingleUser, setReduxSingleUser] = useState(
    useSelector((state) => state.SingleUser)
  );

  // console.log("reduxSingleUser >>>>", reduxSingleUser);

  const changeRedux = useSelector((state) => state.AllUser);

  // const [i, setI] = useState("");

  const [newuserData, setnewUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  // console.log("newuserdata >>", newuserData);

  const clearData = () => {
    setnewUserData({
      ...newuserData,
      name: "",
      email: "",
      phone: "",
    });
  };

  const [openEditModal, setOpenEditModal] = useState(false);

  useEffect(() => {
    setNewUser(changeRedux);
  }, [changeRedux]);

  const handleShow = () => {
    clearData();
    setShow(true);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => {
    // clearData();
    setShow(false);
    setOpenEditModal(false);
  };
  function submitNewUserData() {
    // console.log(newuserData);
    dispatch(setAllUser(newuserData));
    setShow(false);
    clearData();
  }
  function EditUser(i) {
    // console.log("edit >>>>", i);

    dispatch(setSingleUser(i));
    setOpenEditModal(true);
    setShow(true);
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
        setShow={setShow}
        newUser={newUser}
        submitNewUserData={submitNewUserData}
        newuserData={newuserData}
        setnewUserData={setnewUserData}
        openEditModal={openEditModal}
        // submitEditData={submitEditData}
        reduxSingleUser={reduxSingleUser}
        setReduxSingleUser={setReduxSingleUser}
        setOpenEditModal={setOpenEditModal}
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
                  <Button>Delete</Button>
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
