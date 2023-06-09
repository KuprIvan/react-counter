import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import GeneralButton from "./components/GeneralButton";
import GeneralTextField from "./components/GeneralTextField";
import './App.css'
import {Paper} from "@mui/material";

function App() {
    const addButtonHandler = () => {
        alert('add')
    }
    const resetButtonHandler = () => {
        alert('reset')
    }
    const setButtonHandler = () => {
        alert('set')
    }

    return <>
        <Container maxWidth="md">
            <Box className="wrapper">
                <Paper>
                    <Box className="container">
                        <Box className="inputWrapper">
                            <GeneralTextField label="Max Value"/>
                            <GeneralTextField label="Min Value"/>
                        </Box>
                        <Box>
                            <GeneralButton title="SET" onClick={setButtonHandler}/>
                        </Box>
                    </Box>
                </Paper>
                <Paper>
                    <Box className="container">
                        <Box className="inputWrapper">
                            <GeneralTextField label="Enter your value"/>
                        </Box>
                        <Box>
                            <GeneralButton title="INC" onClick={addButtonHandler}/>
                            <GeneralButton title="RESET" onClick={resetButtonHandler}/>
                        </Box>

                    </Box>
                </Paper>
            </Box>

        </Container>
    </>
}

export default App;
