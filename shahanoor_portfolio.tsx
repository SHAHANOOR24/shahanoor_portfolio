import React, { useState } from 'react';
import { Mail, Linkedin, Phone, Code, Database, BarChart3, FileSpreadsheet, TrendingUp, Brain, Github } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const skills = [
    { name: 'Python', icon: Code, level: 90 },
    { name: 'SQL', icon: Database, level: 85 },
    { name: 'Power BI', icon: BarChart3, level: 88 },
    { name: 'Tableau', icon: TrendingUp, level: 80 },
    { name: 'Excel', icon: FileSpreadsheet, level: 85 },
    { name: 'Data Analysis', icon: Brain, level: 90 }
  ];

  const experiences = [
    {
      title: 'Data Analytics Intern',
      company: 'DataMites',
      period: 'Sep 2025 - Ongoing',
      points: [
        'Pursuing 6-month Certified Data Analyst program covering Python, SQL, Power BI, Excel, and Statistics',
        'Performing data cleaning, EDA, visualization, and dashboard creation',
        'Working on capstone projects involving predictive analytics and SQL querying'
      ]
    },
    {
      title: 'Freelance AI Trainer',
      company: 'Outlier (Remote)',
      period: 'Sep 2024 - March 2025',
      points: [
        'Improved AI-generated responses through human feedback and evaluation',
        'Evaluated AI responses for math and logic prompts to enhance model accuracy',
        'Gained experience in AI training workflows and quality assessment'
      ]
    },
    {
      title: 'Data Analysis Intern',
      company: 'Odcet Technologies',
      period: 'May 2023 - June 2023',
      points: [
        'Conducted EDA and preprocessing of student academic data using Python',
        'Visualized student performance trends and identified at-risk categories',
        'Provided insights to improve academic support strategy'
      ]
    }
  ];

  const projects = [
    {
      title: 'Walmart Sales Dashboard',
      tech: 'Python, SQL, Power BI',
      description: 'Analyzed retail sales data identifying revenue trends and seasonal patterns. Designed interactive dashboard revealing 10% monthly growth in electronics.',
      highlights: ['SQL data extraction', 'Python cleaning', 'Power BI visualization']
    },
    {
      title: 'HR Analytics Dashboard',
      tech: 'Power BI, Excel',
      description: 'Created dynamic HR dashboard displaying Attendance %, WFH %, and Sick Leave % over time with interactive reports.',
      highlights: ['Peak WFH on Fridays (12.2%)', 'Interactive slicers', 'Day-wise breakdowns']
    },
    {
      title: 'Student Performance Analytics',
      tech: 'Python, NumPy, Pandas',
      description: 'Analyzed 1,000+ academic records to identify trends. Found students with <60% attendance had 45% lower pass rate.',
      highlights: ['EDA techniques', 'Actionable insights', 'Academic interventions']
    }
  ];

  const certifications = [
    'Programming for Everybody - University of Michigan (Coursera)',
    '100 Days of Code: Python Pro Bootcamp (Udemy)',
    'Introduction to Data Analysis using MS Excel (Coursera)',
    'Introduction to Career Skills in Data Analytics (LinkedIn)',
    'Deloitte Australia - Data Analytics Job Simulation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-5xl font-bold">
              SH
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Shahanoor Hussain Shaik
          </h1>
          <p className="text-2xl text-blue-300 mb-6">Data Analyst</p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Transforming raw data into actionable business insights through Python, SQL, Power BI, and advanced analytics
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:skshahanoor916@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition">
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a href="https://linkedin.com/in/shaik-shahanoor-hussain-402255231" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="tel:+918886910916" className="flex items-center gap-2 hover:text-blue-400 transition">
              <Phone size={20} />
              <span>+91 8886910916</span>
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-8 py-4">
            {['about', 'skills', 'experience', 'projects', 'education'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize font-medium transition ${
                  activeSection === section
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* About Section */}
        {activeSection === 'about' && (
          <section className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">About Me</h2>
            <div className="bg-slate-800/50 backdrop-blur rounded-lg p-8 border border-slate-700">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Aspiring Data Analyst with hands-on experience in Python, SQL, Power BI, Tableau, and Excel. 
                Skilled in data cleaning, exploratory data analysis (EDA), and dashboard creation. 
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Adept at transforming raw data into actionable business insights through real-world projects and internships. 
                Currently pursuing a Certified Data Analyst internship at DataMites to strengthen practical analytics and visualization skills.
              </p>
              <div className="mt-8 grid md:grid-cols-3 gap-4">
                <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-400">9.0</div>
                  <div className="text-sm text-gray-400">CGPA</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-400">3+</div>
                  <div className="text-sm text-gray-400">Internships</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-400">5+</div>
                  <div className="text-sm text-gray-400">Certifications</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur rounded-lg p-6 border border-slate-700">
                  <div className="flex items-center gap-3 mb-4">
                    <skill.icon className="text-blue-400" size={24} />
                    <span className="text-xl font-semibold">{skill.name}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="text-right text-sm text-gray-400 mt-2">{skill.level}%</div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-slate-800/50 backdrop-blur rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {['Data Analysis', 'Exploratory Data Analysis (EDA)', 'Data Visualization', 'Problem Solving', 'Analytical Thinking'].map((area, idx) => (
                  <span key={idx} className="bg-slate-700 px-4 py-2 rounded-full text-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-300">{exp.title}</h3>
                      <p className="text-purple-400">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-400 bg-slate-700 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, pidx) => (
                      <li key={pidx} className="flex gap-3 text-gray-300">
                        <span className="text-blue-400 mt-1">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-slate-800/50 backdrop-blur rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Certifications</h3>
              <ul className="space-y-2">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300">
                    <span className="text-green-400">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Projects</h2>
            <div className="space-y-6">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur rounded-lg p-6 border border-slate-700 hover:border-purple-500 transition">
                  <h3 className="text-2xl font-semibold text-purple-300 mb-2">{project.title}</h3>
                  <p className="text-blue-400 text-sm mb-4">{project.tech}</p>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, hidx) => (
                      <span key={hidx} className="bg-slate-700 text-green-400 px-3 py-1 rounded-full text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <section className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Education</h2>
            <div className="bg-slate-800/50 backdrop-blur rounded-lg p-8 border border-slate-700">
              <h3 className="text-2xl font-semibold text-purple-300 mb-2">
                Bachelor of Technology in Computer Science and Engineering
              </h3>
              <p className="text-blue-400 mb-4">Narayana Engineering College, Nellore, Andhra Pradesh</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">2021 - 2025</span>
                <span className="text-2xl font-bold text-green-400">CGPA: 9.0</span>
              </div>
            </div>
            <div className="mt-8 bg-slate-800/50 backdrop-blur rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Additional Information</h3>
              <div className="space-y-3 text-gray-300">
                <p><span className="text-blue-400 font-semibold">Availability:</span> Open to relocation and flexible with work schedules</p>
                <p><span className="text-blue-400 font-semibold">Languages:</span> Fluent in English, Hindi, and Telugu</p>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8 mt-16">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p className="mb-2">© 2025 Shahanoor Hussain Shaik. All rights reserved.</p>
          <p className="text-sm">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;