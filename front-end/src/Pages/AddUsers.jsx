import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import style from './AddUsers.module.scss';
import axios from 'axios';

const cx = classNames.bind(style);
function AddUsers() {
  const navigate = useNavigate();
  // ! Add users to list
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async () => {
    const value = { name, email, address, age, phone };
    await axios.post('http://localhost:5000/addUsers', value).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className={cx('wrapper')}>
      <h1>UPDATE USERS IN HERE </h1>

      <hr />
      <div className={cx('form-add')}>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Full Name : </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="">Email :</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="">Your Age :</label>
          <input
            type="text"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <label htmlFor="">Address : </label>
          <input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <label htmlFor="">Phone : </label>
          <input
            type="text"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <button className={cx('btn-addUser')} type="submit">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUsers;
