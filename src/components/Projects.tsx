import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Chat Application',
      description:
        'Designed and implemented a scalable, low-latency real-time chat system using the MERN stack and Socket.io, enabling instant messaging and real-time user presence updates. Applied complexity analysis and optimized message delivery algorithms, improving real-time messaging latency by 20%.',
      technologies: ['React.js', 'Node.js', 'Socket.io', 'Tailwind CSS', 'MongoDB'],
      github: 'https://github.com/bhanu-2208/fullstack-chatapp',
      live: 'https://chat-app-bhey.onrender.com/',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Travel-Easy',
      description:
        'Owned end-to-end architecture and development of Travel-Easy full-stack travel management application enabling users to explore and manage travel listings efficiently. Developed scalable backend services and optimized database queries for dynamic reviews.',
      technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'EJS'],
      github: 'https://github.com/bhanu-2208/travel-easy',
      live: null,
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Wikipedia Search Application',
      description:
        'Designed and executed a responsive Wikipedia search application using HTML, CSS, Bootstrap, and JavaScript, providing a modern and intuitive interface for curated search results. Developed asynchronous fetch GET HTTP API calls for dynamic real-time search results.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'REST API'],
      github: 'https://github.com/bhanu-2208/search-app',
      live: 'https://wikipedias.ccbp.tech/',
      gradient: 'from-green-600 to-emerald-600',
    },
    {
      title: 'RidePool-MBU',
      description:
        'A comprehensive ride-sharing platform built with TypeScript, designed to connect students and facilitate efficient carpooling within the university campus. Features real-time ride matching and user authentication.',
      technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/bhanu-2208/RidePool-MBU',
      live: null,
      gradient: 'from-orange-600 to-red-600',
    },
    {
      title: 'Todo Application',
      description:
        'Build a dynamic web application that allows users to add their tasks and also delete those tasks. Features a clean and intuitive interface with local storage persistence.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Local Storage'],
      github: 'https://github.com/bhanu-2208/todo-app',
      live: 'https://todomanages.ccbp.tech/',
      gradient: 'from-indigo-600 to-purple-600',
    },
    {
      title: 'Responsive Food App',
      description:
        'Developed a responsive food application that provides clean and good UI to the users. Features a modern design with smooth animations and mobile-first approach.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/bhanu-2208/responsive_food_app',
      live: 'https://foodmunchies.ccbp.tech/',
      gradient: 'from-yellow-600 to-orange-600',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 text-lg">
            Explore my portfolio of full-stack applications and web development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-4 line-clamp-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white rounded-lg transition-all duration-300 transform hover:scale-105 text-sm font-medium`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/bhanu-2208?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 text-lg font-semibold"
          >
            <Github size={24} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
