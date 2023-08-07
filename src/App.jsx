import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { TableComponent } from "./components/table/table.component.jsx";
import { ModalComponent } from "./components/modal/modal.component.jsx";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { forwardRef } from "react";
import { Container } from "@mui/material";
import { Appbar } from "./components/appbar/appbar.component.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./store/reducers/users.js";
import CircularProgress from '@mui/material/CircularProgress';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={3} ref={ref} variant="filled" {...props} />;
});

const App = () => {
  const data = useSelector(({ users }) => users.users);
  const status = useSelector(({ users }) => users.status);
  const error = useSelector(({ users }) => users.error);
  const [addModal, setAddModal] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>

      <Appbar />
      <Container maxWidth="lg">
        <div className="flex items-center justify-end my-5 ">
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              setAddModal(true);
            }}
          >
            Add User
          </Button>
        </div>
        <TableComponent data={data} handleClick={handleClick} />
        {
          status === 'loading' && <div className="text-center">
            <CircularProgress disableShrink color="secondary" />
          </div>
        }
        {error && (
          <h2 className="text-center text-[20px] font-bold">
            Server error {error}
          </h2>
        )}
        <ModalComponent
          open={addModal}
          handleClose={() => setAddModal(false)}
          title="ADD USER"
          handleClick={handleClick}
        />
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%", backgroundColor: "#66bb6a" }}
          >
            Success
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
};

export default App;
