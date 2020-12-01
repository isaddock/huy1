import React, {useState} from 'react';
import './style.css';
import a from './my.jpeg';
import { useHistory,Link } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import ReactRoundedImage from "react-rounded-image";
import InforAd from './InforAd';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const AddAcount = () => {

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
  margin-left: 422px;
  margin-top: 10px;
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

  const [name1, setName1] = useState('');
  const [add2, setAdd2] = useState('');
  const [name2, setName2] = useState('');
  const [email2, setEmail2] = useState('');
  const [phone2, setPhone2] = useState('');
  const [find, setFind] = useState(false);
  const [adds, setAdds] = useState(false);
  const [found, setFound] = useState(false);
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
          alert('Mật khẩu ít nhất 8 kí tự');
          return false;
      }
      return true;
  };
const RegisterConfirm = () => {
    axios.post('https://5f82dead0695720016433a74.mockapi.io/data', {
        name: name,
        pass: pass,
        email: email,
        add: add,
        phone: phone,
    }).then((rep)=>{
      console.log(rep);
      if(rep.status===201){
        alert('Thêm Tài Khoản Thành Công!!!')
    }
})
    .catch((err) => {
        console.log(err)
    })
  } 
  const Delete = () => {
    axios.get('https://5f82dead0695720016433a74.mockapi.io/data', {
        params: {
            name: name1,
        }
    }).then((rep)=>{
      console.log(rep);
      if(rep.data.length===1){
        axios.delete(`https://5f82dead0695720016433a74.mockapi.io/data/${rep.data[0].id}`, {
            data: {
                name: name1,
            }
        }).then((response) => {
            console.log(response)
            alert('xoa thanh cong')
            setFound(false)
        })
    }else{
        alert('khong co user !!!')
    }
})
    .catch((err) => {
        console.log(err)
    })
  }
  
  const Find = () => {
      setFound(false)
    axios.get('https://5f82dead0695720016433a74.mockapi.io/data', {
        params: {
            name: name1,
        }
    }).then((rep)=>{
      console.log(rep);
      if(rep.data.length===1){
        setFound(true)
        setName2(rep.data[0].name)
        setPhone2(rep.data[0].phone)
        setAdd2(rep.data[0].add)
        setEmail2(rep.data[0].email)
    }else{
        alert('khong co user !!!')
    }
})
    .catch((err) => {
        console.log(err)
    })
  }

  return (
    <div className="Container">
      <InforAd />
      <div className="ContainerRight" style={{color: "white"}}>
          <h1>Quản Lý Tài Khoản</h1>
          <div className="cax">
          <button onClick={() =>
                    {setAdds(true)
                    setFind(false)}
                }>Thêm </button>
          <button onClick={() =>
                     {setAdds(false)
                      setFind(true)}
                    }>Xóa </button>
          </div>
        {adds && <dix><h1 > Thêm Tài Khoản </h1>
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
                }} style={{width: "400px"}}> Thêm</Button>
        </div></dix>}
        {find && <div>
            <div className="Another">
            <input type="text"  value={name1} onChange={(name)=> setName1(name.target.value)} placeholder="Tên Đăng Nhập" style={{width: "370px"}}></input>
            {found && <div className="cax2" style={{color: "black"}}>
                <label>Họ Tên: {name2}</label>
                <label>Số Điện Thoại: {phone2}</label>
                <label>Địa Chỉ: {add2}</label>
                <label>Địa Chỉ Email: {email2}</label></div>}
            
            <div className="Another">
                <button onClick={() =>
                   Find()
                }>Tìm Kiếm</button>
                  <Popup
                    trigger={<button> Xóa </button>}
                     modal
    
                    >
                    {close => (
                    <div className="modal">
                    <button className="close" onClick={close}>
                    &times;
                    </button>
                    <div className="header"> Bạn Muốn Xóa Tài Khoản Này ? </div>
                    <div className="actions">
                        <button onClick={() => {Delete(); close();}} style={{width: "50px"}} > Xóa </button>
                    <button
                        onClick={() => {
                        console.log('modal closed ');
                        close();
                        }}
                        style={{width: "50px"}}
                    >Hủy
                    </button>
                            </div>
                        </div>
                        )}
                    </Popup>
            </div>
         </div>
        </div>}
            
      </div>
    </div>
  );
}

export default AddAcount;
