import React from 'react'
import ProjectAdd from "./routes/ProjectAdd"
import Home from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="project/add" element={<ProjectAdd/>} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default App