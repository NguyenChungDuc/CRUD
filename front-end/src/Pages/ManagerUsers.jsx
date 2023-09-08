import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import classNames from 'classnames/bind';
import style from './ManagerUsers.module.scss';

const cx = classNames.bind(style);

function ManagerUsers() {
  const navigate = useNavigate();
  // ! call api get all users
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getApi = async () => {
      await axios.get('http://localhost:5000/getUsers').then((res) => {
        setUsers(res.data);
      });
    };
    getApi();
    // console.log(users);
  }, []);

  // ! Remove user from list
  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete user ${name} ?`)) {
      console.log(id);
      const result = await axios.delete(
        `http://localhost:5000/deleteUsers/${id}`
      );
      if (result.status !== 200) {
        alert('Error');
        // console.log('1');
      } else {
        // console.log('2');
        setUsers(Array.from(users).filter((x) => x._id !== id));
      }
    } else {
      return;
    }
  };

  // ! Search user
  const [search, setSearch] = useState('');
  //   console.log(users.filter((user) => user.name.toLowerCase().includes(search)));

  return (
    <div className={cx('wrapper')}>
      <h1>Manager Users</h1>
      <div className={cx('form-search')}>
        <input
          type="text"
          placeholder=""
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className={cx('btn-search')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className={cx('form-display')}>
        <h1>List Users</h1>
        <form action="">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            {users &&
              users
                .filter((user) => user.name.toLowerCase().includes(search))
                .map((user, index) => (
                  <tbody key={index}>
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.address}</td>
                      <td>{user.age}</td>
                      <td className={cx('action')}>
                        <button
                          className={cx('btn-edit')}
                          type="button"
                          onClick={() => {
                            navigate(`/update/${user._id}`);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className={cx('btn-edit')}
                          type="button"
                          onClick={() => handleDelete(user._id, user.name)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
          </table>
        </form>
      </div>
    </div>
  );
}

export default ManagerUsers;
