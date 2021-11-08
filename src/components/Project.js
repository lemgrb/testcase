import React from 'react'
import PropTypes from 'prop-types';

const Project = ({name, description, ...props}) => {
    return (
        <div className="project-list-item border p-1 m-2  hover:bg-yellow-100">
            <h1 className="text-lg font-semibold underline text-yellow-600 break-all"><a href="#">{name}</a></h1>
            <p className="text-sm">{description}</p>
        </div>
    )
}

Project.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
};
  
Project.defaultProps = {
    name: "Default name",
    description: "Default description"
};


export default Project