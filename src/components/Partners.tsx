import React from 'react';
import { Handshake, Download, Building, Users, Target, ArrowRight } from 'lucide-react';

const Partners = () => {
  const partnerTypes = [
    {
      icon: <Building size={32} />,
      title: 'Incubators & Accelerators',
      description: 'Partner with us to provide mentorship, resources, and funding opportunities to our student entrepreneurs.',
      benefits: ['Access to talented students', 'Early-stage startup pipeline', 'University collaboration']
    },
    {
      icon: <Users size={32} />,
      title: 'Corporate Partners',
      description: 'Collaborate with E-Cell DDU for innovation challenges, internships, and talent acquisition.',
      benefits: ['Innovation partnerships', 'Talent pipeline', 'CSR opportunities']
    },
    {
      icon: <Target size={32} />,
      title: 'Mentors & Industry Experts',
      description: 'Share your expertise and guide the next generation of entrepreneurs at DDU Gorakhpur.',
      benefits: ['Give back to community', 'Network expansion', 'Recognition']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Partner <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">With Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in building the entrepreneurial ecosystem at DDU Gorakhpur. Together, we can create opportunities and drive innovation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-6"></div>
        </div>

        {/* Partnership Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {partnerTypes.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {partner.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{partner.title}</h3>
                <p className="text-gray-600 leading-relaxed">{partner.description}</p>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {partner.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Partner With Us</span>
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Partnership Proposal */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-16">
          <div className="text-center mb-8">
            <Handshake size={48} className="text-purple-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Partnership Proposal</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Download our comprehensive partnership proposal to learn more about collaboration opportunities with E-Cell DDU.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">What's Included:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Our vision and mission
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Partnership opportunities
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Expected outcomes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Contact information
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-400/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mb-4">
                <Download size={20} />
                <span>Download Proposal</span>
              </button>
              <p className="text-sm text-gray-500 text-center">PDF • 2.5 MB • Updated regularly</p>
            </div>
          </div>
        </div>

        {/* Contact for Partnership */}
        <div className="bg-gradient-to-r from-gray-900 to-purple-900 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Collaborate?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can work together to build the entrepreneurial future of DDU Gorakhpur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105">
              Schedule a Meeting
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              Send Partnership Inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;