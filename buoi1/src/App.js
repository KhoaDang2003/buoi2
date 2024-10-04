import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Hello, HelloPerson} from './compoment/HelloPerson.js';
import Header from './compoment/Header.js';
import Hi from './compoment/Hello.js';
import Car from './compoment/Car.js';
import Login from './compoment/Login.js';

function App() {
  return (
    <div>
      <Header />
      <Hello />
      <HelloPerson name = "Đặng Hoàng Anh Khoa"/>
      <Hi />
      <Car />
      <Login />
    </div>
  );
}

export default App;
