import Button from '@mui/material/Button';
import React from 'react';


export type RootButtonType = {
    title: string
    onClick: () => void
}

const GeneralButton = (props: RootButtonType) => {
    return <>
        <Button variant="contained" onClick={props.onClick}>{props.title}</Button>
    </>
};

export default GeneralButton

