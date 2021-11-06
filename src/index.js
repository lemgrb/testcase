import React from 'react'
import reactDOM from 'react-dom'
import App from './App'
import './styles/main.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProjectAdd from "./routes/ProjectAdd"

reactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="project/add" element={<ProjectAdd/>} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root"));
