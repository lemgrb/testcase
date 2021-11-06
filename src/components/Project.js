import React from 'react'

const Project = (props) => {
    return (
        <div className="border p-1 m-2">
            <h1 className="text-lg font-semibold">[{props.name}]</h1>
            <p className="text-sm">Click to edit the description</p>
        </div>
    )
}

export default Project