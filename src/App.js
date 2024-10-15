import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import "./App.css";
//import Header from './Header';
import SearchForm from './SearchForm';
import PlanTable from './PlanTable';

function App() {
    return ( <div className = "app" >
        <NavBar/ >
        <SearchForm/ >
        {/* <PlanTable/ > */}
        </div>
    );
}

export default App;