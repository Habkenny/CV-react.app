export default function Projects() {
  const projects = [
    {
      title: "Rokkers Foundation (NGO Website)",
      desc: "Fully responsive charity website with SEO optimization and WCAG 2.1 AA compliance. Implemented semantic HTML structure and optimized images, resulting in 95+ Lighthouse scores.",
      tech: "HTML5, CSS3, JavaScript, Bootstrap",
      github: "https://github.com/Habkenny/Rokkers_Foundation_Charity",
      demo: "https://habkenny.github.io/Rokkers_Foundation_Charity/",
    },
    {
      title: "Habtech To-Do List (PWA)",
      desc: "Offline-first Progressive Web App with local storage persistence and installability. Features include task management, filtering, and cross-device synchronization.",
      tech: "JavaScript, Service Workers, IndexedDB, PWA",
      github: "https://github.com/Habkenny/Habtech-To_Do_List",
      demo: "https://habkenny.github.io/Habtech-To_Do_List/",
    },
    {
      title: "TaskFlow Landing Page",
      desc: "Conversion-optimized responsive landing page with focus on CTAs and user engagement. Achieved 100% responsive design score across all devices.",
      tech: "HTML5, CSS Grid/Flexbox, JavaScript",
      github: "https://github.com/Habkenny/TaskFlow_Landing_Page",
      demo: "https://habkenny.github.io/TaskFlow_Landing_Page/",
    },
    {
      title: "Habtech Blog",
      desc: "Share your thoughts and ideas",
      tech: "HTML5, CSS3, JavaScript, UI/UX Design",
      demo: "https://habkenny.github.io/BlogAppWithCursorAI/",
      github: "https://github.com/Habkenny/BlogAppWithCursorAI",
    },
    {
      title: "Real Estate/E-Commerce grid",
      desc: "Find Your Dream Property",

      demo: "https://habkenny.github.io/RealEstateEcommerceGrid/",
      github: "https://github.com/Habkenny/RealEstateEcommerceGrid",
      tech: "HTML5, CSS3, JavaScript, UI/UX Design",
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-300 uppercase tracking-wider">
        Featured Projects
      </h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="mb-6 p-5 bg-gray-50 rounded-lg border-l-4 border-blue-600 transition-all hover:translate-x-1 hover:shadow-md"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {project.title}
          </h3>
          <p className="text-gray-700 mb-3">{project.desc}</p>
          {project.tech && (
            <p className="text-sm text-gray-600 mt-3 p-2 bg-gray-100 rounded">
              <strong className="text-gray-900">Tech Stack:</strong>{" "}
              {project.tech}
            </p>
          )}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded-md font-medium text-sm transition-all hover:bg-blue-600 hover:text-white hover:-translate-y-0.5 hover:shadow-lg"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              💻 View Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 border-2 border-blue-600 text-white rounded-md font-medium text-sm transition-all hover:bg-blue-700 hover:border-blue-700 hover:-translate-y-0.5 hover:shadow-lg"
              aria-label={`View ${project.title} live demo`}
            >
              🚀 Live Demo
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
