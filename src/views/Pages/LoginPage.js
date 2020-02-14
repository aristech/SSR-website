import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "../../../src/components/Grid/GridContainer";
import GridItem from "../../../src/components/Grid/GridItem.js";
import CustomInput from "../../../src/components/CustomInput/CustomInput.js";
import Button from "../../../src/components/CustomButtons/Button.js";
import Card from "../../../src/components/Card/Card.js";
import CardBody from "../../../src/components/Card/CardBody.js";
import CardHeader from "../../../src/components/Card/CardHeader.js";
import CardFooter from "../../../src/components/Card/CardFooter.js";
import Consumer from "../../AppProvider";

// import styles from "../../../assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
import styles from "../../../public/assets/jss/material-dashboard-pro-react/views/loginPageStyle";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [checked, setChecked] = React.useState(false);
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  });
  const handleChange = (name, e) => {
    setUser({ ...user, [name]: e.target.value });
  };
  const handleChecked = () => {
    setChecked(!checked);
  };
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();

  return (
    <Consumer>
      {ctx => {
        return (
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={6} md={6}>
                <form style={{ marginTop: 100 }}>
                  <Card login className={classes[cardAnimaton]}>
                    <CardHeader
                      className={`${classes.cardHeader} ${classes.textCenter}`}
                      color="rose"
                    >
                      <h4 className={classes.cardTitle}>Log in</h4>
                      <div className={classes.socialLine}>
                        {["fab fa-facebook-square", "fab fa-twitter"].map(
                          (prop, key) => {
                            return (
                              <Button
                                color="transparent"
                                justIcon
                                key={key}
                                className={classes.customButtonClass}
                              >
                                <i className={prop} />
                              </Button>
                            );
                          }
                        )}
                      </div>
                    </CardHeader>
                    <CardBody>
                      {/* <CustomInput
                        labelText="First Name.."
                        id="firstname"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Face className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          )
                        }}
                      /> */}
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => handleChange("email", event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => handleChange("password", event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputAdornmentIcon}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          ),
                          type: "password",
                          autoComplete: "off"
                        }}
                      />
                      <FormControlLabel
                        classes={{
                          root: classes.checkboxLabelControl,
                          label: classes.checkboxLabel
                        }}
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => handleChecked()}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                              root: classes.checkRoot
                            }}
                          />
                        }
                        label={<span>Remember Me</span>}
                      />
                    </CardBody>
                    <CardFooter className={classes.justifyContentCenter}>
                      <Button
                        color="rose"
                        simple
                        size="lg"
                        block
                        onClick={e =>
                          //ctx.handleLogin(e, user.email, user.password, checked)
                          console.log('progressnet')
                        }
                      >
                        Let{"'"}s Go
                      </Button>
                    </CardFooter>
                  </Card>
                </form>
              </GridItem>
            </GridContainer>
          </div>
        );
      }}
    </Consumer>
  );
}
