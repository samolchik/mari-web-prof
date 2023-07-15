import React from 'react';
import './ProjectDetails.css';


interface ProjectDetailsProps {
    onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ onClose }) => {
    return (
        <div className="details-wrapper">
            <div className="details">
            <div className="close-button">
            <button className="close" onClick={onClose}>Close</button>
            </div>
        </div>
        </div>
    );
};

export default ProjectDetails;
