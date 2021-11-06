import React, {useState}  from 'react'
import Project from './components/Project'
import { Outlet, Link } from "react-router-dom"
import faker from 'faker'

const App = (props) => {

    const [projects, setProjects] = useState([]);
 
    const handleAddProject = (e) => {
        setProjects([{code:"GOAL-21", id:faker.datatype.uuid(),name:faker.lorem.word()},...projects])
    }

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
                <Outlet onSubmit={handleAddProject} />
            </aside>
        </div>
    )
}

export default App;