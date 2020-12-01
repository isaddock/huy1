import React, {useState} from 'react';
import './style.css';
import { useHistory } from "react-router-dom";
import a from './my.jpeg';
import axios from 'axios';
import styled from 'styled-components';
import ReactRoundedImage from "react-rounded-image";
import InforAd from './InforAd';
import md5 from 'md5'
function ChangePass() {
    const Button = styled.button`
    border: 0;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
    padding: 10px 120px;
    border-radius: 5px;
    color: #fff;
    font-size: 1.2rem;
    font-family: Nunito, sans-serif;
    background: #6381e8;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.13);
    transition: all 0.2s ease;
    margin-left: 422px;
  `;const clear = () =>{
    setName('');
    setPass('');
    setPassNew('');
    setPassNew2('');
  }
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [passNew, setPassNew] = useState('');
    const [passNew2, setPassNew2] = useState('');
    const forgetPassConfirm = () => {
        axios.get('https://5f82dead0695720016433a74.mockapi.io/data', {
            params: {
               name: name, 
               pass: md5(pass)
            },
        }).then((response) => {
            console.log(response)
            if(response.data.length===1){
               axios.put(`https://5f82dead0695720016433a74.mockapi.io/data/${response.data[0].id}`,{
                   pass: md5(passNew)
               }).then((res) => {
                   console.log(res)
                   if (res.status===200){
                       alert('Thay đổi mật khẩu thành công!!!')
                   }
               })
            }else {
                alert('Nhập sai mật khẩu cũ !!!')
            }
        })
            .catch((err) => {
                console.log(err)
            })
    };
    return (
        <div className="Container">
        <InforAd />
        <div className="ContainerRight" style={{color: "white"}}>
        <h1>Thay Đổi Mật Khẩu </h1>
        <div className="Form">
              <input type="Text" value={name} onChange={(name)=> setName(name.target.value)} placeholder="Họ Tên" style={{width: "370px"}}></input>
          </div>
          <div className="Form">
              <input type="password" value={pass} onChange={(pass)=> setPass(pass.target.value)} placeholder="Mật Khẩu Cũ" style={{width: "370px"}}></input>
          </div>
          <div className="Form">
              <input type="password" value={passNew} onChange={(passNew)=> setPassNew(passNew.target.value)} placeholder="Mật Khẩu Mới" style={{width: "370px"}}></input>
          </div>
          <div className="Form">
              <input type="password" value={passNew2} onChange={(passNew2)=> setPassNew2(passNew2.target.value)} placeholder="Nhập Lại Mật Khẩu Mới" style={{width: "370px"}}></input>
          </div>
          <div className="ButtonContainer">
              
              <Button onClick={() => {forgetPassConfirm();clear()}} style={{width: "400px"}}> Đổi Mật Khẩu</Button>
          </div>
        </div>
      </div>
    );
}

export default ChangePass;