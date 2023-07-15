import React from 'react';
import './ProjectDetails.css';


interface ProjectDetailsProps {
    onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ onClose }) => {
    return (
        <div className="details">

            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default ProjectDetails;
