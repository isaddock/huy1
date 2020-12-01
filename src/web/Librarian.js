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
const Librarian = () => {

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
  pnumbersing: 10px 120px;
  border-radius: 5px;
  color: #fff;
  font-size: 1.2rem;
  font-family: Nunito, sans-serif;
  background: #6381e8;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.13);
  transition: all 0.2s ease;
  margin-left: 422px;
`;
  const clear = () => {
    setNameB('');
    setAuthor('');
    setYear('');
    setPub('');
    setNum('');
    setPrice('');
    setContent('');
    setTypeB('');
  }
  const [nameBook, setNameB] = useState('');
  const [author, setAuthor] = useState('');
  const [yearProduct, setYear] = useState('');
  const [publish, setPub] = useState('');
  const [numbers, setNum] = useState('');
  const [price, setPrice] = useState('');
  const [typeB, setTypeB] = useState('');
  const [content, setContent] = useState('');

  const [nameBook2, setNameB2] = useState('');
  const [nameBook1, setNameB1] = useState('');
  const [author1, setAuthor1] = useState('');
  const [yearProduct1, setYear1] = useState('');
  const [publish1, setPub1] = useState('');
  const [numbers1, setNum1] = useState('');
  const [price1, setPrice1] = useState('');
  const [typeB1, setTypeB1] = useState('');
  const [content1, setContent1] = useState('');

  const [find, setFind] = useState(false);
  const [numberss, setnumberss] = useState(false);
  const [found, setFound] = useState(false);
  const validateResigter = () => {
      if (nameBook.trim().length === 0) {
          alert('Nhập Tên Sách');
          return false;
      }
      if (publish.trim().length === 0) {
          alert('Nhập Nhà Xuất Bản');
          return false;
      }
      if (numbers.trim().length === 0) {
          alert('Nhập Số Lượng');
          return false;
      }
      if (price.trim().length === 0) {
          alert('Nhập Đơn Giá');
          return false;
      }
      if (yearProduct.trim().length === 0) {
          alert('Nhập Năm Xuất Bản');
          return false;
      }
      if (typeB.trim().length === 0) {
          alert('Nhập Thể Loại');
          return false;
      }
      if (content.trim().length === 0) {
        alert('Nhập Nội Dung');
        return false;
    }
    if (author.trim().length === 0) {
        alert('Nhập Tác Giả');
        return false;
    }
      return true;
  };
const RegisterConfirm = () => {
    axios.post('https://5f82dead0695720016433a74.mockapi.io/book', {
        nameBook: nameBook,
        author: author,
        yearProduct: yearProduct,
        publish: publish,
        numbers: numbers,
        price: price,
        typeB: typeB,
        content: content,
        
    }).then((rep)=>{
      console.log(rep);
      if(rep.status===201){
        alert('Thêm thành công!!!')
    }
})
    .catch((err) => {
        console.log(err)
    })
  } 
  const Delete = () => {
    axios.get('https://5f82dead0695720016433a74.mockapi.io/book', {
        params: {
            nameBook: nameBook1,
        }
    }).then((rep)=>{
      console.log(rep);
      if(rep.data.length){
        axios.delete(`https://5f82dead0695720016433a74.mockapi.io/book/${rep.data[0].id}`, {
            data: {
                nameBook: nameBook1,
            }
        }).then((response) => {
            console.log(response)
            setFound(false)
            alert('Xóa Thành Công')
        })
    }else{
        alert('Không có Sách!!!')
    }
})
    .catch((err) => {
        console.log(err)
    })
  }
  
  const Find = () => {
    setFound(false)
    axios.get('https://5f82dead0695720016433a74.mockapi.io/book', {
        params: {
            nameBook: nameBook1,
        }
    }).then((rep)=>{
      console.log(rep);
      if(rep.data.length===1){
        setFound(true)
        setNameB1(rep.data[0].nameBook)
        setAuthor1(rep.data[0].author)
        setYear1(rep.data[0].yearProduct)
        setTypeB1(rep.data[0].typeB)
        setContent1(rep.data[0].content)
        setPrice1(rep.data[0].price)
        setNum1(rep.data[0].numbers)
        setPub1(rep.data[0].publish)
        
    }else{
        alert('Không Có Sách!!!')
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
          <h1>Quản Lý Sách</h1>
          <div className="cax">
          <button onClick={() =>
                    {setnumberss(true)
                    setFind(false)}
                }> Thêm</button>
          <button onClick={() =>
                     {setnumberss(false)
                      setFind(true)}
                    }> Xoa</button>
          </div>
        {numberss && <div><h1 > Thêm Sach </h1>
        <div className="Form">
            <input type="text"  value={nameBook} onChange={(nameBook)=> setNameB(nameBook.target.value)} placeholder="Tên Sách" style={{width: "370px"}}></input>
        </div>
        <div className="Form">
            <input type="text"  value={author} onChange={(author)=> setAuthor(author.target.value)}placeholder="Tác Giả" style={{width: "370px"}}></input>
        </div>
        <div className="Form">
            
            <input type="text"  value={yearProduct} onChange={(yearProduct)=> setYear(yearProduct.target.value)} placeholder="Năm Xuất Bản" style={{width: "370px"}}></input>
        </div>
        <div className="Form">
            
            <input type="text"  value={publish} onChange={(publish)=> setPub(publish.target.value)}placeholder="Nhà Xuất Bản" style={{width: "370px"}}></input>
        </div>
        <div className="Form">
            
            <input type="text"  value={content} onChange={(content)=> setContent(content.target.value)} placeholder="Nội Dung" style={{width: "370px"}}></input>
        </div>
        <div className="Form">
            <input type="text"  value={typeB} onChange={(typeB)=> setTypeB(typeB.target.value)} placeholder="Thể Loại" style={{width: "370px"}}></input>
        </div>
        <div className="Form">
            <input type="text"  value={numbers} onChange={(numbers)=> setNum(numbers.target.value)} placeholder="Số Lượng" style={{width: "370px"}}></input>
        </div>
        <div className="Form">
            <input type="text"  value={price} onChange={(price)=> setPrice(price.target.value)} placeholder="Đơn Giá" style={{width: "370px"}}></input>
        </div>
        <div className="ButtonContainer">
            <button onClick={() =>
                {if (validateResigter()){
                    RegisterConfirm()
                    clear()
                } 
                }} style={{width: "400px"}}> Thêm</button>
        </div></div>}
        {find && <div className="Another">
            <input type="text"  value={nameBook1} onChange={(nameBook)=> setNameB1(nameBook.target.value)} placeholder="Tên Sách" style={{width: "370px"}}></input>
            {found && <div className="cax2" style={{color: "black"}}>
                <label>Tên Sách: {nameBook1}</label>
                <label>Tác Giả: {author1}</label>
                <label>Thể Loại: {typeB1}</label>
                <label>Nội Dung: {content1}</label>
                <label>Nhà Xuất Bản: {publish1}</label>
                <label>Năm Sản Xuất: {yearProduct1}</label>
                <label>Đơn Giá: {price1}</label>
                <label>Số Lượng: {numbers1}</label>
                </div>}
            <div className="Another"><button onClick={() =>
                   Find()
                }> Tìm Kiếm</button>
          <Popup
                    trigger={<button className="Another"> Xóa </button>}
                     modal
                    >
                    {close => (
                    <div className="modal">
                    <button className="close" onClick={close}>
                    &times;
                    </button>
                    <div className="header"> Bạn Muốn Xóa Sách Này ? </div>
                    <div className="actions">
                        <button onClick={() => {Delete(); close()}}> Xóa </button>
                    <button
                        onClick={() => {
                        console.log('modal closed ');
                        close();
                        }}
                    >Hủy
                    </button>
                            </div>
                        </div>
                        )}
            </Popup></div>
        </div>}
      </div>
    </div>
  );
}

export default Librarian;
