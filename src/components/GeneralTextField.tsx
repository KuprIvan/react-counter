import React from 'react';
import TextField from "@mui/material/TextField";

type GeneralTextFieldType = {
    label: string
    variant?: 'outlined' | 'filled' | 'standard'
}

const GeneralTextField = (props: GeneralTextFieldType): JSX.Element => {
    return <>
        <TextField label={props.label} variant="filled" />
    </>
};

export default GeneralTextField;