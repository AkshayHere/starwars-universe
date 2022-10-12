import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Container,
} from "@mui/material";

import { connect } from "react-redux";
import { AnyAction } from "redux";

import Header from "./components/Header";
import "../src/App.css";
import { fetchRequest } from "./store/species/action";
import { ThunkDispatch } from "redux-thunk";
import { ApplicationState } from "./store";
import { Species } from "./store/species/types";

interface PropsFromState {
  loading: boolean;
  species: Species[];
  errors?: string;
}

interface propsFromDispatch {
  fetchRequest: () => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const App: React.FC<AllProps> = ({
  loading,
  errors,
  species,
  fetchRequest,
}) => {
  console.log("species", species);
  console.log("loading", loading);

  const [currentSpecies, setSpecies] = React.useState("");

  const handleChange = (event: any) => {
    setSpecies(event.target.value);
  };

  useEffect(() => {
    fetchRequest();
  }, [fetchRequest]);

  useEffect(() => {
    console.log("loading > ", loading);
  }, [loading]);

  return (
    <CssBaseline>
      <Container maxWidth="xl">
        <Header />
        <div className="App-body">
          {loading ? 
          <h5>Loading Data...</h5>
          : (
            <>
              <FormControl fullWidth>
                <InputLabel id="species-label">Species</InputLabel>
                <Select
                  labelId="species-label"
                  id="species-select"
                  value={currentSpecies}
                  label="Species"
                  onChange={handleChange}
                >
                  {species.map((data) => {
                    return (
                      <MenuItem key={data.name} value={data.name}>
                        {data.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </>
          )}
        </div>
      </Container>
    </CssBaseline>
  );
};

const mapStateToProps = ({ species }: ApplicationState) => ({
  loading: species.loading,
  errors: species.errors,
  species: species.species,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchRequest: () => {
      dispatch(fetchRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
