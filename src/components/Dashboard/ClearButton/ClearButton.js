import React from 'react';
import Button from '@material-ui/core/Button';
export default function ClearButton(props){
    const handleClick=()=>{
        props.onClear();
    }
    return(
        <Button 
            color="primary"
            variant="contained"
            onClick={handleClick}
            style={{
            marginTop:'15px',
            marginBottom:'15px',
            backgroundColor:'#4D80E4',
            color:'#fff'
            }}
            >
                Clear
            </Button>
    );
}