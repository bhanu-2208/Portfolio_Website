import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pbhanuprakashreddy2208@gmail.com',
      link: 'mailto:pbhanuprakashreddy2208@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8309057201',
      link: 'tel:+918309057201',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tirupati, India',
      link: null,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/bhanu-2208',
      color: 'hover:bg-slate-700',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/bhanu-prakash-reddy-poli',
      color: 'hover:bg-blue-600',
    },
    {
      icon: ExternalLink,
      label: 'LeetCode',
      link: 'https://leetcode.com/u/pbhanuprakashreddy2208/',
      color: 'hover:bg-orange-600',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 text-lg">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = (
              <div
                className={`group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 animate-fadeInUp ${
                  info.link ? 'cursor-pointer' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                <div className={`inline-flex p-4 bg-gradient-to-br ${info.color} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">{info.label}</h3>
                <p className="text-slate-300 break-all">{info.value}</p>
              </div>
            );

            return info.link ? (
              <a key={index} href={info.link} className="block">
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 sm:p-12 rounded-2xl shadow-2xl border border-slate-700">
          <h3 className="text-3xl font-bold text-slate-100 mb-8 text-center">Connect With Me</h3>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-6 py-4 bg-slate-700 ${social.color} text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium`}
                >
                  <Icon size={24} />
                  {social.label}
                </a>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-slate-300 mb-6 leading-relaxed max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities, projects, or collaborations. Whether you have
              a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a
              href="mailto:pbhanuprakashreddy2208@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 text-lg font-semibold"
            >
              <Send size={24} />
              Send Me an Email
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-slate-400">
          <p className="mb-2">© 2024 Poli Bhanu Prakash Reddy. All rights reserved.</p>
          <p className="text-sm">Built with React, TypeScript, and Tailwind CSS 4.1</p>
        </div>
      </div>
    </section>
  );
}
