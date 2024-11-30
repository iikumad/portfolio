import React, { useEffect, useState } from 'react';
import right_arrow from '../assets/right-arrow.png';
import left_arrow from '../assets/left-arrow.png';
import github from '../assets/github.png'


export default function Projects() {
  const [Projects, SetProjects] = useState([]);
  const [CurrentProject, SetCurrentProject] = useState(null);
  const [PageCount, SetPageCount] = useState<number>(1);
  const [TotalPages, SetTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/projects/");
        const json = await response.json();
        console.log({ json });
        
        SetProjects(json);  // Set the projects
        SetTotalPages(Math.ceil(json.length / 1));  
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Update CurrentProject whenever PageCount or Projects change
  useEffect(() => {
    if (Projects.length > 0 && PageCount <= Projects.length) {
      SetCurrentProject(Projects[PageCount - 1]);
    }
  }, [PageCount, Projects]);

  const handleNext = () => {
    if (PageCount < TotalPages) {
      SetPageCount((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (PageCount > 1) {
      SetPageCount((prev) => prev - 1);
    }
  };

  return (
    <div className='P-con'>
      <div className='projects'>
        <h1 className='projects-title'>
          Latest <span className='projects-title-green'>Projects</span>
        </h1>
        {CurrentProject && (
          <div className='project-container'>
            <div className='project-left'>
              <h1 className='project-number'>
                0<span className='number-border'>{PageCount}</span>
              </h1>
              <h2 className='project-title'>{CurrentProject.title}</h2>
              <p className='project-details'>{CurrentProject.description}</p>
              <p className='project-techs'>{CurrentProject.technologies.join(', ')}</p>
              <a href={CurrentProject.link} className='project-link'><img className='git-icon' src={github}></img></a>
            </div>
            <div className='project-right'>
              <img src={CurrentProject.image} className='project-image' alt="Project" />
            </div>
          </div>
        )}
      </div>
      <div className='pagination'>
        <img
          className={`arrow ${PageCount === 1 ? 'disabled-pagination' : ''}`}
          src={left_arrow}
          onClick={handlePrevious}
          alt="Previous"
        />
        <img
          className={`arrow ${PageCount === TotalPages ? 'disabled-pagination' : ''}`}
          src={right_arrow}
          onClick={handleNext}
          alt="Next"
        />
      </div>
    </div>
  );
}