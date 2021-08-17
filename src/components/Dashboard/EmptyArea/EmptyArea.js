import React from 'react';
import {Empty} from 'antd';
import noData from '../style/noData.svg';

export default function Area(){
    return(
        <Empty
        
            image={noData}
            imageStyle={{
                height: 60,
            }}
            description={<p style={{marginTop:'8px'}}>
                No Data Found
              </p>}/>
    );
}