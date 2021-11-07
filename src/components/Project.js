import React from 'react'

const Project = (props) => {
    return (
        <div className="border p-1 m-2  hover:bg-yellow-100">
            <h1 className="text-lg font-semibold underline text-yellow-600 break-all"><a href="#">{props.name}</a></h1>
            <p className="text-sm">{props.description}</p>
        </div>
    )
}

export default Project