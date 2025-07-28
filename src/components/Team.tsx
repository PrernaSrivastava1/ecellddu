import React from 'react';
import { Linkedin, Mail, Quote } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Tony Stark Gupta',
      role: 'Founder & President',
      quote: 'Building the entrepreneurial future of DDU, one idea at a time.',
      image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/04/Tony-Stark-7.jpg',
      linkedin: '#'
    },
    {
      name: 'Elon Musk Singh',
      role: 'Vice President',
      quote: 'Empowering students to think beyond boundaries and create impact.',
      image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/04/Tony-Stark-7.jpg',
      linkedin: '#'
    },
    {
      name: 'Jeff Bezos Kushwaha',
      role: 'Technical Head',
      quote: 'Technology is the bridge between ideas and innovation.',
      image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/04/Tony-Stark-7.jpg',
      linkedin: '#'
    },
    {
      name: 'Mark Burgerwala',
      role: 'Design Lead',
      quote: 'Great design makes great ideas accessible to everyone.',
      image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/04/Tony-Stark-7.jpg',
      linkedin: '#'
    },
    {
      name: 'Paneer Grover',
      role: 'Outreach Coordinator',
      quote: 'Connecting dreams with opportunities, one conversation at a time.',
      image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/04/Tony-Stark-7.jpg',
      linkedin: '#'
    },
    {
      name: 'Uttapam',
      role: 'Content Head',
      quote: 'Stories have the power to inspire and transform lives.',
      image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/04/Tony-Stark-7.jpg',
      linkedin: '#'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate individuals driving the entrepreneurial revolution at DDU Gorakhpur
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-lg font-semibold text-yellow-600 mb-4">{member.role}</p>
                
                {/* Quote */}
                <div className="relative mb-6">
                  <Quote size={20} className="text-gray-300 absolute -top-2 -left-1" />
                  <p className="text-gray-600 italic pl-6">{member.quote}</p>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <a 
                    href={member.linkedin}
                    className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@ecellddu.in`}
                    className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Want to Join Our Team?</h3>
            <p className="text-xl text-purple-100 mb-8">We're always looking for passionate individuals to join our mission</p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;