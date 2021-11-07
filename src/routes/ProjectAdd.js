import React, {useState, useContext} from 'react'
import { Link, useNavigate } from "react-router-dom"
import faker from 'faker'
import axios from 'axios'
import {RefreshProjectContext} from '../components/RefreshProjectContext'

const ProjectAdd = (props) => {

    let navigate = useNavigate();
    const [error, setError] = useState("");
    // TODO: Use ReactForm
    const [projectName, setProjectName] = useState(""); 
    const [projectDescription, setProjectDescription] = useState("");
    const [success, setSuccess] = useState(false);
    const triggerRefresh = useContext(RefreshProjectContext)

    const handleAddProject = async (e) => {
        e.preventDefault();
        let payload = {name:projectName, description:projectDescription};
        try {
            const resp = await axios.post(`${process.env.REACT_APP_ENDPOINT}/projects`, payload);
            setSuccess(projectName + " has been added. Please click 'Refresh' on the left");
            triggerRefresh();
        } catch (e) {
            setError(e.message);
        }
    }

    const handleNameChange = (e) => {
        setProjectName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setProjectDescription(e.target.value);
    }


    return (
            <div className="shadow sm:rounded-md sm:overflow-hidden p-3">
                <h1 className="text-lg font-semibold">New project</h1>
                {
                    error?<span className="text-red-500">{error}</span>:""
                }
                {
                    success?<div><span className="text-green-500">{success}</span> <button className="btn border border-gray-900 bg-yellow-300" onClick={()=>navigate("/")}>Close</button></div>:""
                }
                {
                !success?
                <form method="POST" onSubmit={handleAddProject}>
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="project_name" className="block text-sm font-medium text-gray-700">
                                Name<span className="text-red-500">*</span>
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" onChange={handleNameChange} name="project_name" id="project_name" className="focus:ring-green-500 focus:border-green-500 flex-1 block w-full rounded-sm text-sm border-gray-300" placeholder="System Test for Product A" maxLength="256" required/>
                            </div>
                        </div>
                        <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="project_description" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <textarea onChange={handleDescriptionChange} maxLength="1024" className="w-full text-sm" name="project_description" placeholder="Enter project description">
                                </textarea>
                            </div>
                        </div>
                        <div className="col-span-3 sm:col-span-2">    
                            <Link to="/" className="btn border border-gray-500">Cancel</Link>
                            <button className="btn border border-gray-900 bg-yellow-300">Save</button>
                        </div>
                    </div>
                </div>
                </form>:""
                }
            </div>
    )
}

export default ProjectAdd