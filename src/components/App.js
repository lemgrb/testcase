import React, {useState} from 'react'
import Project from './Project'
import faker from 'faker'

const App = (props) => {

    const [projects, setProjects] = useState([]);
 
    const handleAddProject = (e) => {
        setProjects([{id:faker.datatype.uuid(),name:faker.lorem.word()},...projects])
    }

    return(
        <>
            <h1 className="text-xl">Test Case MGMT</h1>
            <button className="btn border border-blue-700" onClick={handleAddProject}>Add project</button>
            {
                projects.map(project => (
                    <Project key={project.id} name={project.name} />
                ))
            }
        </>
    )
}

export default App;