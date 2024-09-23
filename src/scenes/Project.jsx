import { FaGithub } from 'react-icons/fa';
import externalLink from '../assets/icons/external-link-svgrepo-com.svg';


function Project({ thumbnail, title, githubUrl, highlights, description }) {
  return (
    <div className="relative flex flex-col items-center text-sm mx-2 my-1 px-0 py-2 rounded-3xl">

      {/* Link to Project */}
      <a className="group lg:hover:text-stone-400 lg:transition lg:duration-200" href={githubUrl} target="_blank" title='Project GitHub'>
        <div className="relative w-full h-150">

          {/* Thumbnail */}
          <div className="relative rounded-md overflow-hidden transition-all duration-200 shadow-md group-hover:scale-95">
            <img
              src={thumbnail} alt="project thumbnail" className="w-full h-full object-cover rounded-md transition-transform duration-200 "
            />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-200 rounded-md"></div>
          </div>

          {/* External Link Icon - For lg+ screens */}
          <div className='hidden lg:block'>
            <img src={externalLink} alt="external link icon"
              className="absolute inset-0 w-10 h-10 m-auto opacity-0 group-hover:opacity-80 transition-opacity duration-200 bg-white bg-opacity-50 rounded-lg shadow-md z-30"
            />
          </div>
        </div>

        {/* Title and Github Icon */}
        <div className='flex justify-center gap-5 py-4 items-center'>
          <h2 id={title} className="text-xl font-bold">{title}</h2>

          <FaGithub size="28px" />
        </div>
      </a>

      {/* Project Topics and Skills */}
      <div className='flex flex-wrap justify-center'>
        {highlights.map((highlight, index) => (
          <div key={index} className="bg-gray-300 text-black mx-2 mb-2 px-2 py-1 rounded-md shadow flex items-center">
            <p>{highlight}</p>
          </div>
        ))}
      </div>

      {/* Project Description */}
      <p>{description}</p>
    </div>
  );
}

export default Project;