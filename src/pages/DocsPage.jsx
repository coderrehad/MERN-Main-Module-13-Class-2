import React, {useEffect, useState} from 'react';
import {ReadRequest} from "../apiRoutes/ReadRequest.js";

const DocsPage = () => {
    let [data,setData] = useState([]);

    useEffect(()=>{
        (async ()=>{
            let result = await ReadRequest();
            setData(result);
        })()
    })


    return (
        <>
            <h1>This is docs page</h1>
            <ul>
                {data.map((item,i)=>{
                    return <li>{item['ProductName']}</li>
                })}
            </ul>
            {data.map((item,i)=>{
                return <li>{item['Img']}</li>
            })}
        </>
    );
};

export default DocsPage;