import "./App.css";
import { Table, Button } from "react-bootstrap";
import CreateModal from "./component/CreateModal";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAllUser } from "./redux/actions";
// import {} from "./redux/reducers/Curd";

function App() {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState(useSelector((state) => state.AllUser));
  // console.log(newUser);

  const changeRedux = useSelector((state) => state.AllUser);

  const [newuserData, setnewUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  // console.log(newuserData);

  useEffect(() => {
    setNewUser(changeRedux);
  }, [changeRedux]);

  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  function submitNewUserData() {
    dispatch(setAllUser(newuserData));
    setShow(false);
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
        submitNewUserData={submitNewUserData}
        newuserData={newuserData}
        setnewUserData={setnewUserData}
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
                  <Button>Edit</Button>
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
