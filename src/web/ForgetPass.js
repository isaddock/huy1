import React, {useState} from 'react';
import './style.css';
import { useHistory,Link } from "react-router-dom";
import a from './my.jpeg';
import axios from 'axios';
import styled from 'styled-components';
import ReactRoundedImage from "react-rounded-image";
import md5 from 'md5'
function ForgetPass() {
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
`;
    const [phone, setPhone] = useState('');
    const [add, setAdd] = useState('');
    const forgetPassConfirm = () => {
        axios.get('https://5f82dead0695720016433a74.mockapi.io/data', {
            params: {
                phone: phone,
                add: add,
            }
        }).then((response) => {
            console.log(response)
            if(response.data.length===1){
                alert("Mật khẩu của bạn là: abc@12345, vui lòng đăng nhập và đổi lại mật khẩu")
                axios.put(`https://5f82dead0695720016433a74.mockapi.io/data/${response.data[0].id}`,{
                   pass: md5('abc@12345')})
            }else {
                alert('Không lấy được mật khẩu!!!')
            }
        })
            .catch((err) => {
                console.log(err)
            })
    };
    return (
        <div className="Container">
        <div className="Myinfo">
           <div className="InfoContainer">
           <ReactRoundedImage
          image ={a}
          roundedColor="#321124"
          imageWidth="230"
          imageHeight="230"
          roundedSize="14"
          />
               <div className="InfoColumn">
               <label>Họ Tên: Nguyễn Đức Huy</label>
               <label>Lớp: L03</label>
               <label>STT: 15</label>
               <label>Msv: AT130622</label>
               </div>
           </div>
        </div>
        <div className="ContainerRight" style={{color: "white"}}>
          <h1> Lấy Lại Mật Khẩu  </h1>
          <div className="Form">
              <input type="text" value={phone} onChange={(phone)=> setPhone(phone.target.value)} placeholder="Số Điện Thoại" style={{width: "370px"}}></input>
          </div>
          <div className="Form">
              <input type="text" value={add} onChange={(add)=> setAdd(add.target.value)} placeholder="Địa Chỉ"style={{width: "370px"}}></input>
          </div>
          <div className="ButtonContainer">
              <Button onClick={() => {forgetPassConfirm()}} style={{width: "400px"}}> Get Pass </Button>
          </div>
          <ul>
            <Link to="/" style={{color: "#4f1893"}}>Quay Lại Đăng Nhập</Link>
        </ul>
          </div>
        </div>  
    );
}

export default ForgetPass