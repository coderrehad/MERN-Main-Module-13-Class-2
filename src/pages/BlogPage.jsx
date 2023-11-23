import React, {useState} from 'react';
import {CreateProduct} from "../apiRoutes/CreateRequest.js";
import {useNavigate} from "react-router-dom";

const BlogPage = () => {
    let [FromValue,SetFromValue] = useState({
        ProductName: "",
        ProductCode: "",
        Img: "",
        UnitPrice: "",
        Qty: "",
        TotalPrice: ""
    });
    
    const InputOnChange = (key, value)=>{
        SetFromValue(FromValue=>({
            ...FromValue,
            [key]: value
        }))
    }

    const navigate = useNavigate();
    
    const submit = async () => {
      let result = await CreateProduct(FromValue);
      alert(result);
        navigate('/docs');
    }
    return (
        <div>
            <h1>This is blog page</h1>
            <input value={FromValue.ProductName} onChange={(e)=>{InputOnChange('ProductName',e.target.value)}} placeholder="ProductName"/><br/><br/>
            <input value={FromValue.ProductCode} onChange={(e)=>{InputOnChange('ProductCode',e.target.value)}} placeholder="ProductCode"/><br/><br/>
            <input value={FromValue.Img} onChange={(e)=>{InputOnChange('Img',e.target.value)}} placeholder="Img"/><br/><br/>
            <input value={FromValue.UnitPrice} onChange={(e)=>{InputOnChange('UnitPrice',e.target.value)}} placeholder="UnitPrice"/><br/><br/>
            <input value={FromValue.Qty} onChange={(e)=>{InputOnChange('Qty',e.target.value)}} placeholder="Qty"/><br/><br/>
            <input value={FromValue.TotalPrice} onChange={(e)=>{InputOnChange('TotalPrice',e.target.value)}} placeholder="TotalPrice"/><br/><br/>
            <button onClick={submit}>Submit</button>
        </div>
    );
};

export default BlogPage;