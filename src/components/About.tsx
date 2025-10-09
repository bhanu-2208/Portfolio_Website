import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft space-y-6">
            <h3 className="text-3xl font-bold text-slate-100">Career Objective</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              Full-stack software engineer with experience in designing and implementing scalable, low-latency
              applications using Node.js, React, and MongoDB. Skilled in Data Structures, Algorithms, Object-Oriented
              Design, and Agile development. Proven ability to own end-to-end architecture and deliver high-quality
              software solutions.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <MapPin size={20} className="text-blue-400" />
              <span>Tirupati, India</span>
            </div>
          </div>

          <div className="animate-slideInRight">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <GraduationCap size={32} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-2">Education</h3>
                  <div className="space-y-2">
                    <p className="text-xl font-semibold text-blue-400">Mohan Babu University</p>
                    <p className="text-slate-300">B.Tech - Computer Science Engineering</p>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar size={16} />
                      <span>2022 - 2026</span>
                    </div>
                    <div className="mt-4 inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg">
                      <span className="text-2xl font-bold text-blue-400">9.42 CGPA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'LeetCode Problems', value: '750+' },
            { label: 'Max Rating', value: '1700+' },
            { label: 'Projects Built', value: '8+' },
            { label: 'CGPA', value: '9.42' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
