import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Server, Cloud, GitBranch, Terminal, Container, Activity, ChevronDown, ExternalLink } from 'lucide-react';

export default function DevOpsPortfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { icon: <Cloud className="w-8 h-8" />, name: 'Cloud Platforms', items: ['AWS', 'Azure', 'GCP'] },
    { icon: <Container className="w-8 h-8" />, name: 'Containerization', items: ['Docker', 'Kubernetes', 'Helm'] },
    { icon: <GitBranch className="w-8 h-8" />, name: 'CI/CD', items: ['GitHub Actions', 'Jenkins', 'GitLab CI'] },
    { icon: <Terminal className="w-8 h-8" />, name: 'IaC', items: ['Terraform', 'Ansible', 'CloudFormation'] },
    { icon: <Activity className="w-8 h-8" />, name: 'Monitoring', items: ['Prometheus', 'Grafana', 'ELK Stack'] },
    { icon: <Server className="w-8 h-8" />, name: 'Scripting', items: ['Python', 'Bash', 'PowerShell'] }
  ];

  const projects = [
    {
      title: 'Kubernetes Multi-Cluster Management',
      description: 'Automated deployment pipeline for multi-cluster Kubernetes environments with GitOps using ArgoCD',
      tech: ['Kubernetes', 'ArgoCD', 'Terraform', 'GitHub Actions'],
      link: '#'
    },
    {
      title: 'Infrastructure as Code Platform',
      description: 'Complete AWS infrastructure automation with Terraform modules and CI/CD integration',
      tech: ['Terraform', 'AWS', 'Python', 'Jenkins'],
      link: '#'
    },
    {
      title: 'Monitoring & Observability Stack',
      description: 'Full-stack monitoring solution with Prometheus, Grafana, and custom exporters',
      tech: ['Prometheus', 'Grafana', 'Docker', 'Alertmanager'],
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            DevOps Engineer
          </div>
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors hover:text-cyan-400 ${activeSection === item ? 'text-cyan-400' : 'text-gray-300'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>
        
        <div className="text-center z-10 px-6">
          {/* Profile Image */}
          
        
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            DevOps Engineer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Building scalable infrastructure, automating workflows, and delivering excellence through code
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
              Get In Touch
            </a>
            <a href="#projects" className="px-8 py-3 border-2 border-cyan-400 rounded-full hover:bg-cyan-400/10 transition-all">
              View Projects
            </a>
          </div>
          <div className="flex gap-6 justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your@email.com" className="hover:text-cyan-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate DevOps Engineer with expertise in cloud infrastructure, automation, and continuous delivery. 
              I specialize in building robust, scalable systems that enable teams to deploy faster and more reliably.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With experience across AWS, Azure, and GCP, I've implemented CI/CD pipelines, managed Kubernetes clusters, 
              and automated infrastructure provisioning using modern DevOps tools and practices.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div 
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all hover:transform hover:scale-105 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all hover:transform hover:scale-105 group"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-cyan-500/20 rounded text-xs text-cyan-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Interested in working together? Let's connect and discuss how I can help with your DevOps needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:your@email.com"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-cyan-400 rounded-full hover:bg-cyan-400/10 transition-all inline-flex items-center justify-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 text-center text-gray-400">
        <p>© 2024 DevOps Portfolio. Built with React & Tailwind CSS. Deployed with GitHub Actions.</p>
      </footer>
    </div>
  );
}