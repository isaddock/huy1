import React, {useState} from 'react';
import './style.css';
import { useHistory,Link } from "react-router-dom";
import a from './my.jpeg';
import axios from 'axios';
import styled from 'styled-components';
import ReactRoundedImage from "react-rounded-image";

function InforAd() {
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
                <Link to="/Home" > Home</Link>
            </ul>
             <ul>
                <Link to="/ChangePass" > Đổi Mật Khẩu </Link>
            </ul>
            <ul>
                <Link to="/Librarian" > Quản Lý Sách </Link>
            </ul>
            <ul>
                <Link to="/AddAcount" > Quản Lý Tài Khoản </Link>
            </ul>
            <ul>
                <Link to="/" > Log out </Link>
            </ul>
             </div>
         </div>
      </div>
    );
}

export default InforAd