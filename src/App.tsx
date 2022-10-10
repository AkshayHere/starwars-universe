import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Container,
} from "@mui/material";
import Header from "./components/Header";
import "../src/App.css";

function App() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <CssBaseline>
      <Container maxWidth="xl">
        <Header />
        <div className="App-body">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Character</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Character"
              onChange={handleChange}
            >
              <MenuItem value={10}>Obiwan Kenobi</MenuItem>
              <MenuItem value={20}>Han Solo</MenuItem>
              <MenuItem value={30}>Anakin Skywalker</MenuItem>
              <MenuItem value={30}>Yoda</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Container>
    </CssBaseline>
  );
}

export default App;
