import React, {useState} from 'react';
import './style.css';
import { useHistory,Link } from "react-router-dom";
import a from './my.jpeg';
import axios from 'axios';
import styled from 'styled-components';
import ReactRoundedImage from "react-rounded-image";
import { Button, } from "react-bootstrap";
import md5 from 'md5'
function Login(props)
{
  const [name1, setName] = useState('');
// khai bao bien name de luu gia tri name, setName de bat su thay doi cua name de luu lai vao name 
  const [pass1, setPass] = useState('');
  // console.log(name, pass);
  // const loginConfirm = () => {
  //   axios.post('https://5f82dead0695720016433a74.mockapi.io/login', {
  //     name: name,
  //     pass: pass,
  //   }).then((rep)=>{
  //     console.log(rep);
  //     console.log(rep.status);
  //       if(rep.status===201){
  //         alert('Success')
  //       }
  //   })
  // } 
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
  const loginConfirm = () => {
    axios.get('https://5f82dead0695720016433a74.mockapi.io/data',
    {
      params: {
        name: name1,
        pass: md5(pass1),
      }
    }).then((rep)=>{
      console.log(rep);
      if(rep.data[0].pass===md5(pass1)){
        alert('Login Success')
        history.push('/Home');
    }else {
        alert('Đăng nhập thất bại, vui lòng kiểm tra lại tên tài khoản hoặc mật khẩu !!!')
    }
})
    .catch((err) => {
        console.log(err)
    })
  } 
  // const {history}=props;
  let history = useHistory();
  const res = () => {
    history.push("/register");
  };
  const clear = () =>{
    setName('');
    setPass('');
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
        <h1 > Vui Lòng Đăng Nhập  </h1>
        <div className="Form">
            <input type="text" value={name1} onChange={(name1)=> setName(name1.target.value)} placeholder="Tên Đăng Nhập" style={{width: "370px"}}></input>
        </div>
        <div className="Form">
            <input type="password" value={pass1} onChange={(pass1)=> setPass(pass1.target.value)} placeholder="Mật Khẩu"style={{width: "370px"}}></input>
        </div>
        <div className="ButtonContainer">
            <Button onClick={()=>{console.log(name1, pass1); loginConfirm();clear()}}style={{width: "400px"}}> Đăng Nhập </Button>
        </div>
        <ul>
            <label>Chưa Có Tài Khoản ?    </label>
            <Link to="/register" style={{color: "#4f1893"}}>  Đăng Ký</Link>
        </ul>
        <ul>
            <label>Quên Mật Khẩu ?    </label>
            <Link to="/ForgetPass" style={{color: "#4f1893"}}>  Lấy Lại Mật Khẩu</Link>
        </ul>
      </div>
    </div>
  );
}

export default Login;
