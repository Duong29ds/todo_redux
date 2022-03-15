import { useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const RadioButton = (props) => {
  const [status, setStatus] = useState("All");

  const handleChange = (event) => {
    setStatus(event.target.value);
    props.getStatus(event.target.value);
  };
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={status}
        onChange={handleChange}
      >
        <FormControlLabel value="All" control={<Radio />} label="All" />
        <FormControlLabel
          value="Completed"
          control={<Radio />}
          label="Completed"
        />
        <FormControlLabel
          value="Not-Complete"
          control={<Radio />}
          label="Not-Complete"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
