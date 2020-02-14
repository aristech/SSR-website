import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Consumer from "../../AppProvider";

export default function UserDelete({ selected, delOpen, handleDelClose }) {
  return (
    <Consumer>
      {ctx => {
        return (
          <Dialog
            open={delOpen}
            onClose={handleDelClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              Ειστε σίγουροι ότι θέλετε να διαγράψετε αύτη την εγγραφή;
            </DialogTitle>

            <DialogActions>
              <Button onClick={() => ctx.handleDelCloseModal()} color="primary">
                Όχι
              </Button>
              <Button
                onClick={() => ctx.deleteSelected(selected)}
                color="primary"
                autoFocus
              >
                Ναι
              </Button>
            </DialogActions>
          </Dialog>
        );
      }}
    </Consumer>
  );
}
