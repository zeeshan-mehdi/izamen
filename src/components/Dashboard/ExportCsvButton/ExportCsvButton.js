import React from 'react';
import Button from '@material-ui/core/Button';
export default function ExportCsvButton(props){
    const handleClick=()=>{
        props.onExport();
    }
    return(
        <Button 
            color="primary"
            onClick={handleClick}
            style={{
            float:'right',
            color:'#fff',
            backgroundColor:'#4D80E4'
            }}
            >
                Export CSV
            </Button>
    );
}