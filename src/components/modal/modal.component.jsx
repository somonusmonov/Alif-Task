import * as React from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/reducers/users";

export const ModalComponent = ({ open, title, handleClose, handleClick }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [job, setJob] = useState("");
    const dispatch = useDispatch();

    const disabledBtn = name && age && email && phone && job;

    const added = () => {
        let newUser = {
            name,
            age,
            email,
            phone,
            job,
        };
        setName("");
        setAge("");
        setEmail("");
        setPhone("");
        setJob("");
        handleClose();
        handleClick();
        dispatch(addUser(newUser));
    };

    return (
        <>
            <Dialog fullWidth={true} maxWidth="sm" open={open} onClose={handleClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <div className=" gap-3 flex-col mt-2 flex">
                        <TextField
                            color="secondary"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            label="Name"
                        />
                        <TextField
                            color="secondary"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            label="Email"
                        />
                        <TextField
                            color="secondary"
                            variant="outlined"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            type="number"
                            label="Age"
                        />
                        <TextField
                            color="secondary"
                            variant="outlined"
                            value={job}
                            onChange={(e) => setJob(e.target.value)}
                            type="text"
                            label="Job"
                        />
                        <TextField
                            variant="outlined"
                            color="secondary"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="number"
                            label="Phone number"
                        />
                        <div className="flex w-[full] justify-end gap-[10px]">
                            <Button
                                color="error"
                                variant="outlined"
                                onClick={() => handleClose()}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                disabled={!disabledBtn}
                                onClick={() => {
                                    added();
                                }}
                            >
                                Add
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};
