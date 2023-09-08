import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './UpdateUsers.module.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(style);
function UpdateUsers() {
  // ! Call api get user by id
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/getUserUpdate/${id}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [id]);

  // ! Update user
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .put(`http://localhost:5000/putUser/${id}`, user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
    navigate('/');
  };

  return (
    <div className={cx('wrapper')}>
      <h1>Update User</h1>
      <div className={cx('form-add')}>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Full Name : </label>
          <input
            type="text"
            defaultValue={user?.name}
            onChange={(e) => {
              setUser((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
          <label htmlFor="">Email :</label>
          <input
            type="email"
            defaultValue={user?.email}
            onChange={(e) => {
              setUser((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
          <label htmlFor="">Your Age :</label>
          <input
            type="number"
            defaultValue={user?.age}
            onChange={(e) => {
              setUser((prev) => ({ ...prev, age: e.target.value }));
            }}
          />
          <label htmlFor="">Address : </label>
          <input
            type="text"
            defaultValue={user?.address}
            onChange={(e) => {
              setUser((prev) => ({ ...prev, address: e.target.value }));
            }}
          />
          <label htmlFor=""> Phone : </label>
          <input
            type="text"
            defaultValue={user?.phone}
            onChange={(e) => {
              setUser((prev) => ({ ...prev, phone: e.target.value }));
            }}
          />
          <button type="submit">Update User</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUsers;
