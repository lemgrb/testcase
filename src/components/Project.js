import React from 'react'

const Project = (props) => {
    return (
        <div className="border p-1 m-2">
            <h1 className="text-lg font-semibold hover:bg-gray-100">[{props.code}] {props.name}</h1>
            <p className="text-sm hover:bg-gray-100">Click to edit the description</p>
        </div>
    )
}

export default Project