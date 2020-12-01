import React, {useState} from 'react';
import './style.css';
import a from './my.jpeg';
import { useHistory,Link } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import ReactRoundedImage from "react-rounded-image";
import md5 from 'md5'

const Register = () => {
  let history = useHistory();
  const res = () => {
    history.push("/");
  };
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
  margin-left: 426px;
`;
  const clear = () => {
    setName('');
    setPass('');
    setPass2('');
    setPhone('');
    setAdd('');
    setEmail('');
  }
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [add, setAdd] = useState('');
  const validateResigter = () => {
      if (name.trim().length === 0) {
          alert('Nhập tên');
          return false;
      }
      if (email.trim().length === 0) {
          alert('Nhập email');
          return false;
      }
      if (add.trim().length === 0) {
          alert('Nhập địa chỉ');
          return false;
      }
      if (phone.trim().length < 10) {
          alert('Nhập số điện thoại');
          return false;
      }
      if (pass.trim().length === 0) {
          alert('Nhập mật khẩu');
          return false;
      }
      if (pass.trim().length < 8) {
          alert('Mật khẩu ít nhất có 8 kí tự');
          return false;
      }
      return true;
  };
const RegisterConfirm = () => {
    axios.post('https://5f82dead0695720016433a74.mockapi.io/data', {
        name: name,
        pass: md5(pass),
        email: email,
        add: add,
        phone: phone,
    }).then((rep)=>{
      console.log(rep);
      if(rep.status===201){
        alert('Đăng kí thành công!!!')
    }
})
    .catch((err) => {
        console.log(err)
    })
  } 

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
      <h1 > Đăng Ký Tài Khoản </h1>
        <div className="Form">
            <input type="text"  value={name} onChange={(name)=> setName(name.target.value)} placeholder="Tên Đăng Nhập" style={{width: "370px"}}></input>
        </div>
        <div className="Form">
            <input type="password"  value={pass} onChange={(pass)=> setPass(pass.target.value)}placeholder="Mật Khẩu" style={{width: "370px"}}></input>
        </div>
        <div className="Form">
            
            <input type="password"  value={pass2} onChange={(pass2)=> setPass2(pass2.target.value)} placeholder="Nhập Lại Mật Khẩu" style={{width: "370px"}}></input>
        </div>
        <div className="Form">
            
            <input type="text"  value={email} onChange={(email)=> setEmail(email.target.value)}placeholder="E-Mail" style={{width: "370px"}}></input>
        </div>
        <div className="Form">
            
            <input type="text"  value={phone} onChange={(phone)=> setPhone(phone.target.value)} placeholder="Số Điện Thoại" style={{width: "370px"}}></input>
        </div>
        <div className="Form">
            
            <input type="text"  value={add} onChange={(add)=> setAdd(add.target.value)} placeholder="Địa Chỉ" style={{width: "370px"}}></input>
        </div>
        <div className="ButtonContainer">
            <Button onClick={() =>
                {if (validateResigter()){
                    RegisterConfirm()
                    clear()

                } 
                }} style={{width: "400px"}}>Register</Button>
        </div>
        <ul>
            <label>Đã Có Tài Khoản ?    </label>
            <Link to="/" style={{color: "#4f1893"}}>  Đăng Nhập</Link>
        </ul>
      </div>
    </div>
  );
}

export default Register;
