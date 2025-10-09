import { Code2, Database, Wrench, Brain } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Java', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Frameworks & Libraries',
      icon: Wrench,
      skills: ['Express', 'Node.js', 'React.js'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Databases & Tools',
      icon: Database,
      skills: ['SQL', 'MongoDB', 'Git'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Core CS Skills',
      icon: Brain,
      skills: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'Complexity Analysis',
        'Object-Oriented Design',
      ],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg shadow-lg`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-medium transition-all duration-300 border border-slate-600 hover:border-blue-500/50 hover:shadow-lg transform hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl border border-blue-500/30">
          <h3 className="text-2xl font-bold text-slate-100 mb-4 text-center">Technical Proficiencies</h3>
          <p className="text-slate-300 text-center leading-relaxed">
            Experienced in building full-stack applications with modern web technologies. Strong foundation in
            computer science fundamentals including data structures, algorithms, and system design. Committed to
            writing clean, maintainable code following industry best practices and Agile methodologies.
          </p>
        </div>
      </div>
    </section>
  );
}
