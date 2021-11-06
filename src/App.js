import React, {useState, useEffect}  from 'react'
import Project from './components/Project'
import { Outlet, Link } from "react-router-dom"
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime";

const App = (props) => {

    const [projects, setProjects] = useState([]);

    // https://github.com/babel/babel/issues/9849
    useEffect(async () => {
        const resp = await axios.get('https://crudcrud.com/api/00096251d82c462eaadb9bac8c17087b/projects');
        setProjects(resp.data);
    },[]);

    return(
        <div className="grid gap-4 md:grid-cols-2">
            <div>
                <h1 className="text-xl">/testcases</h1>
                <nav><Link to="/project/add" className="btn border border-gray-900 bg-yellow-300">Add project</Link></nav>
                <h2 className="text-base font-bold">My projects</h2>
                {
                    projects.map(project => (
                        <Project key={project.id} {...project} />
                    ))
                }
            </div>
            <aside>
                <Outlet/>
            </aside>
        </div>
    )
}

export default App;