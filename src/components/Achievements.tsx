import { Award, Trophy, Code2, Medal, BookOpen, ExternalLink } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Code2,
      title: '800+ Problems Solved',
      description: 'Successfully solved over 800 coding problems on LeetCode, demonstrating strong problem-solving skills',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Trophy,
      title: '1720+ Max Rating',
      description: 'Achieved a maximum rating of 1720+ on LeetCode, placing in the top percentile of competitive programmers',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Medal,
      title: 'Global Rank 2293',
      description: 'Secured Global Rank 2293 out of 33,040 participants in LeetCode Weekly Contest 467',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const certifications = [
    {
      title: 'SQL Basic',
      issuer: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/b4f4c3c6c8c9',
      icon: BookOpen,
    },
    {
      title: 'SQL Intermediate',
      issuer: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/a1f9d5c7e2f3',
      icon: BookOpen,
    },
    {
      title: 'Introduction to Java',
      issuer: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/d7e8f9a0b1c2',
      icon: BookOpen,
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-100 mb-8 text-center flex items-center justify-center gap-3">
            <Award size={32} className="text-yellow-400" />
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
                >
                  <div className={`inline-flex p-4 bg-gradient-to-br ${achievement.color} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={36} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-100 mb-3">{achievement.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-slate-100 mb-8 text-center flex items-center justify-center gap-3">
            <BookOpen size={32} className="text-blue-400" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s`, opacity: 0, animationFillMode: 'forwards' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <Icon size={24} className="text-blue-400" />
                    </div>
                    <ExternalLink size={20} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-slate-400">{cert.issuer}</p>
                </a>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 p-8 rounded-2xl border border-blue-500/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">Competitive Programming Profile</h3>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-3xl mx-auto">
              Active competitive programmer with consistent participation in coding contests and challenges.
              Continuously improving problem-solving skills and algorithmic thinking through regular practice.
            </p>
            <a
              href="https://leetcode.com/u/polibhanu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 text-lg font-semibold"
            >
              <Code2 size={24} />
              View LeetCode Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
