import React from 'react'
import { BookOpen, Users, Target, Award, Heart, Code, Lightbulb, Globe } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: 'Quality Content',
      description: 'We believe in creating high-quality, well-researched articles that provide real value to our readers.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Our community of developers and tech enthusiasts is at the heart of everything we do.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of the curve, covering the latest trends and technologies in the tech world.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for technology and learning drives us to create content that inspires and educates.'
    }
  ];

  const stats = [
    { icon: BookOpen, label: 'Articles Published', value: '100+' },
    { icon: Users, label: 'Monthly Readers', value: '50K+' },
    { icon: Globe, label: 'Countries Reached', value: '30+' },
    { icon: Award, label: 'Years Experience', value: '5+' }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & Lead Writer',
      bio: 'Full-stack developer with 8+ years of experience in web technologies.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Sarah Chen',
      role: 'Technical Editor',
      bio: 'Former software engineer turned technical writer with expertise in React and Node.js.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Content Strategist',
      bio: 'Digital marketing expert who helps shape our content strategy and community engagement.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className='mb-20'>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>About Quilll</h1>
        <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8'>
          We're passionate about sharing knowledge and empowering developers through high-quality content. 
          Our mission is to make complex technologies accessible and help you grow in your development journey.
        </p>
        <div className="flex justify-center">
          <div className="bg-indigo-100 p-4 rounded-full">
            <Code className="w-12 h-12 text-indigo-600" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <stat.icon className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Our Story */}
      <div className="mb-20">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Quilll began as a simple idea: to create a platform where developers could find reliable, 
                well-written content that actually helps them solve real problems. What started as a personal blog 
                has grown into a community-driven platform that serves thousands of developers worldwide.
              </p>
              <p className="text-lg">
                Our journey started in 2019 when our founder, frustrated by the lack of quality technical content, 
                decided to start writing detailed tutorials and insights. The positive response from the community 
                encouraged us to expand and bring together a team of experienced developers and technical writers.
              </p>
              <p className="text-lg">
                Today, we're proud to be a trusted resource for developers at all levels, from beginners taking 
                their first steps in programming to experienced professionals looking to stay updated with the 
                latest trends and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These core values guide everything we do and shape the content we create for our community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <value.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate individuals behind Quilll who work tirelessly to bring you quality content.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <Target className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-indigo-100 leading-relaxed mb-8">
            To democratize access to high-quality technical education and empower developers worldwide 
            to build amazing things. We believe that knowledge should be accessible, practical, and 
            presented in a way that makes complex concepts easy to understand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Join Our Community
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Read Our Articles
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About