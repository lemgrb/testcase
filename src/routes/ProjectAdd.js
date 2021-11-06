import React from 'react'
import { Link } from "react-router-dom"

const ProjectAdd = (props) => {

    const handleAddProject = (e) => {
        e.preventDefault();
        props.onSubmit();
    }

    return (
            <div className="shadow sm:rounded-md sm:overflow-hidden p-3">
                <h1 className="text-lg font-semibold">New project</h1>
                <form method="POST" onSubmit={handleAddProject}>
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                    <div class="grid grid-cols-3 gap-6">
                        <div class="col-span-3 sm:col-span-2">
                            <label for="project_name" className="block text-sm font-medium text-gray-700">
                                Name<span className="text-red-500">*</span>
                            </label>
                            <div class="mt-1 flex rounded-md shadow-sm">
                                <input type="text" name="project_name" id="project_name" className="focus:ring-green-500 focus:border-green-500 flex-1 block w-full rounded-sm text-sm border-gray-300" placeholder="System Test for Product A" maxlength="256" required/>
                            </div>
                        </div>
                        <div class="col-span-3 sm:col-span-2">
                            <label for="project_description" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <div class="mt-1 flex rounded-md shadow-sm">
                                <textarea maxlength="1024" className="w-full text-sm" name="project_description" placeholder="Enter project description">
                                </textarea>
                            </div>
                        </div>
                        <div class="col-span-3 sm:col-span-2">    
                            <Link to="/" className="btn border border-gray-500">Cancel</Link>
                            <button className="btn border border-gray-900 bg-yellow-300">Save</button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
    )
}

export default ProjectAdd