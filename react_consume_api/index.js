import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import './index.css';
import React_API from './Components/React_API';
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Bank_Detail from './Components/Bank_Details';
import Add from './Components/Add';
import Edit from './Components/Edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/getall" element={<React_API />}></Route>
        <Route path="/getbyid/:id" element={<Bank_Detail />}></Route>
        <Route path="/insert" element={<Add />}></Route>
        <Route path="/update/:id" element={<Edit />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);