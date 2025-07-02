import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Mail, Twitter, Github, Linkedin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Articles', path: '/articles' },
      { name: 'Contact', path: '/contact' },
      { name: 'Privacy Policy', path: '/privacy' }
    ],
    resources: [
      { name: 'Getting Started', path: '/getting-started' },
      { name: 'Documentation', path: '/docs' },
      { name: 'Tutorials', path: '/tutorials' },
      { name: 'FAQ', path: '/faq' }
    ],
    social: [
      { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/quilll' },
      { name: 'GitHub', icon: Github, href: 'https://github.com/quilll' },
      { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/quilll' },
      { name: 'Email', icon: Mail, href: 'mailto:support@quilll.com' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        {/* Logo & Summary */}
        <div>
          <div className="flex items-center gap-2 text-white mb-4">
            <BookOpen className="w-6 h-6" />
            <span className="text-xl font-bold">Quilll</span>
          </div>
          <p className="text-sm leading-relaxed">
            Quilll is your gateway to insightful reads and expert commentary across technology, science, and creativity.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            {footerLinks.company.map(link => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-white transition duration-200">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            {footerLinks.resources.map(link => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-white transition duration-200">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Connect</h4>
          <ul className="space-y-3">
            {footerLinks.social.map(({ name, icon: Icon, href }) => (
              <li key={name}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition duration-200">
                  <Icon className="w-4 h-4" />
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        <p>
          &copy; {currentYear} Quilll. Made with <Heart className="inline-block w-4 h-4 text-red-500 mx-1" /> by Eccentric Explorer.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
