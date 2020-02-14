import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import jsCookie from "js-cookie";
import Switch from "@material-ui/core/Switch";
import fetch from "isomorphic-unfetch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import CustomInput from "../CustomInput/CustomInput.js";
import Button from "../CustomButtons/Button.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardText from "../Card/CardText.js";
// import CardIcon from "../Card/CardIcon.js";
import CardBody from "../Card/CardBody.js";
import { Config } from "../../config";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    // width: 400,
    // backgroundColor: theme.palette.background.paper,
    // border: "1px solid #000",
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function VcfExport({ open, handleClose, data, dataFrom }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [email, setEmail] = React.useState("");
  const handleFieldsChange = e => {
    // setUser({ ...user, [name]: e.target.value });
    const { value } = e.target;
    setEmail(value);
  };

  const sendVcf = async () => {
    const data = { email, task: dataFrom };
    await fetch(`${Config.apiUrl}vcfexport`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${jsCookie.get("token")}`
      },
      body: JSON.stringify(data)
    })
      .then(response =>
        response.json().then(data => ({ status: response.status, body: data }))
      )
      .then(myJson => {
        console.log(myJson.status, myJson.body.message);
        if (myJson.status > 300) {
          console.log(myJson.status, myJson.body.message);
        } else {
          handleClose();
        }
      });
  };
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleClose}
    >
      <div style={modalStyle} className={classes.paper}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose" text>
                <CardText color="rose">
                  <h4 className={classes.cardTitle}>Αποστολή {data} επαφών</h4>
                </CardText>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          id="modal-email"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "email",
                            name: "email",
                            placeholder: "email",
                            onChange: e => handleFieldsChange(e)
                          }}
                        />
                      </GridItem>

                      <GridItem xs={12} sm={12}>
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={6} md={6}>
                            <GridContainer justify="center">
                              <Button
                                round
                                color="rose"
                                onClick={() => handleClose()}
                              >
                                Ακύρωση
                              </Button>
                            </GridContainer>
                          </GridItem>

                          <GridItem xs={12} sm={6} md={6}>
                            <GridContainer justify="center">
                              <Button round color="rose" onClick={sendVcf}>
                                Αποστολή
                              </Button>
                            </GridContainer>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </Modal>
  );
}
