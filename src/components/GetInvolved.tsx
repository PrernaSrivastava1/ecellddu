import React from 'react';
import { PenTool, Users, Palette, Search, Calendar, ArrowRight } from 'lucide-react';

const GetInvolved = () => {
  const roles = [
    {
      icon: <PenTool size={32} />,
      title: 'Content Writer',
      description: 'Create compelling content for our blog, social media, and marketing materials. Help tell the stories of entrepreneurs and startups.',
      requirements: ['Strong writing skills', 'Creative thinking', 'Social media savvy'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Users size={32} />,
      title: 'Outreach Coordinator',
      description: 'Build relationships with startups, mentors, and industry professionals. Organize networking events and partnerships.',
      requirements: ['Communication skills', 'Networking ability', 'Event planning'],
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: <Palette size={32} />,
      title: 'Design Lead',
      description: 'Create visual identity, marketing materials, and user experiences. Design for both digital and print media.',
      requirements: ['Design software skills', 'Creative vision', 'Brand understanding'],
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: <Search size={32} />,
      title: 'Startup Research Intern',
      description: 'Research market trends, analyze startup ecosystems, and identify opportunities for our community.',
      requirements: ['Analytical skills', 'Research ability', 'Market awareness'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Calendar size={32} />,
      title: 'Event Planner',
      description: 'Plan and execute workshops, seminars, pitch competitions, and networking events for our community.',
      requirements: ['Organization skills', 'Attention to detail', 'Leadership'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Involved</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our mission to build the entrepreneurial ecosystem at DDU. We have exciting opportunities for passionate students.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {roles.map((role, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${role.color} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    {role.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{role.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{role.description}</p>
                
                {/* Requirements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What we're looking for:</h4>
                  <ul className="space-y-2">
                    {role.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                <button onClick={() => window.location.href = 'mailto:abhijeet.gupta@theelitess.com'} className={`w-full bg-gradient-to-r ${role.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}>
                  <span>Send Us a Mail</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* General Application */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Don't See Your Perfect Role?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always open to passionate individuals who want to contribute to our mission. 
            Tell us about your skills and how you'd like to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => window.location.href = 'mailto:ecell.ddu@gmail.com'} className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Network</h4>
            <p className="text-gray-600">Connect with like-minded entrepreneurs and industry professionals</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Learn</h4>
            <p className="text-gray-600">Gain hands-on experience in entrepreneurship and business development</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Grow</h4>
            <p className="text-gray-600">Develop leadership skills and build your entrepreneurial mindset</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;