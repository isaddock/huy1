import React, {useState} from 'react';
import './style.css';
import { useHistory,Link } from "react-router-dom";
import a from './my.jpeg';
import axios from 'axios';
import styled from 'styled-components';
import ReactRoundedImage from "react-rounded-image";

function Home(props)
{
  const [name, setName] = useState('');
// khai bao bien name de luu gia tri name, setName de bat su thay doi cua name de luu lai vao name 
  const [pass, setPass] = useState('');
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
             <label> </label>
             <label>Acount: nguyenduchuy</label>
             <ul>
                <Link to="/ChangePass" > Đổi Mật Khẩu </Link>
            </ul>
            <ul>
                <Link to="AddAcount" > Thêm Tài Khoản</Link>
            </ul> 
            <ul>
                <Link to="/Librarian" > Quan li sach </Link>
            </ul>
            <ul>
                <Link to="/AddAcount" > Quan li tai khoan </Link>
            </ul>
            <ul>
                <Link to="/" > Log out </Link>
            </ul>
             </div>
         </div>
      </div>
      
      <div className="ContainerRight" style={{color: "white"}}>
        <h1 > AnyThing Here  </h1>
        
      </div>
    </div>
  );
}

export default Home;
