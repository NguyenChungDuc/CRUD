import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from './Home.module.scss';

const cx = classNames.bind(style);
function HomePage() {
  return (
    <div className={cx('wrapper')}>
      <h1>manager users list</h1>
      <div className={cx('button')}>
        <Link to="/managerusers">
          <button>User Manager</button>
        </Link>
        <Link to="/addusers">
          <button>Add New Users</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
