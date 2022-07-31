import {
  Box,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Header } from "../Header";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { useStyles } from "./styles";
import { ButtonBottom, DivButton } from "../../styles";

interface Props {
  endereco: string;
  title: string;
  setDisplay: Function;
}
export const PickerTimeComponent: FC<Props> = ({
  endereco,
  title,
  setDisplay,
}) => {
  const steps = ["", "", ""];
  const classes = useStyles();
  return (
    <Box sx={{ width: "100%" }}>
      <Header
        children={
          <ArrowBack
            className={classes.arrowbackicon}
            onClick={() => {
              setDisplay();
            }}
          ></ArrowBack>
        }
        title="Set Pickup Time"
      ></Header>
      <Box className={classes.boxstep} p={2}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box p={2}>
        <Typography p={1} className={classes.textlabel}>
          Pick Up Location
        </Typography>
        <Typography p={1}>{endereco}</Typography>
        <Typography p={1} className={classes.textlabel}>
          {title} Hours
        </Typography>
        <Typography p={1}>Daily:</Typography>
        <Typography p={1} className={classes.textlabel}>
          Date & Time
        </Typography>
        <TextField
          className={classes.textfield}
          id="outlined-basic"
          type="date"
          variant="outlined"
        />
      </Box>
      <DivButton className={classes.divbutton}>
        <ButtonBottom>SET PICKUP TIME</ButtonBottom>
      </DivButton>
    </Box>
  );
};
