/*
 * @Author: your name
 * @Date: 2021-02-02 09:26:26
 * @LastEditTime: 2021-02-07 09:50:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app\src\index.js
 */
// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Xiaojiejie from './Xiaojiejie'
// import Baobei from './CusComponent/test'
// import element from './CusComponent/fun'
// import Demo from './views/新的生命周期'
import App from './App'
ReactDOM.render(
  <App/>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
