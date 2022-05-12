import React from 'react';
import { ProjectCardContainer } from './ProjectCardContainer.style';
const ProjectCard = ({ title, img, tech, desc, demo }) => {
  return (
    <ProjectCardContainer>
      <p className='title'>{title}</p>
      <img src={img} alt={title} />
      <p className='tech'>{tech}</p>
      <p className='desc'>{desc}</p>
      {demo ? <a href={demo} target='_blank' rel='noreferrer'>Live Demo</a> : null}
    </ProjectCardContainer>
  );
};

export default ProjectCard;