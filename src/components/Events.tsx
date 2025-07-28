import React from 'react';
import { Calendar, Users, Lightbulb, Coffee, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'Pitch & Pizza',
      description: 'Monthly startup idea sharing session where students present their innovative concepts over pizza and networking.',
      icon: <Coffee size={32} />,
      frequency: 'Monthly',
      status: 'upcoming',
      color: 'from-red-500 to-pink-500',
      details: 'Every last Friday of the month'
    },
    {
      title: 'Founders Friday',
      description: 'Virtual meetups with successful entrepreneurs sharing their journey, challenges, and insights.',
      icon: <Users size={32} />,
      frequency: 'Weekly',
      status: 'upcoming',
      color: 'from-blue-500 to-purple-600',
      details: 'Every Friday at 6 PM'
    },
    {
      title: 'Startup Trek',
      description: 'Exclusive visits to successful startups and VC offices to understand the ecosystem firsthand.',
      icon: <MapPin size={32} />,
      frequency: 'Quarterly',
      status: 'planned',
      color: 'from-green-500 to-blue-500',
      details: 'Delhi & Bangalore visits planned'
    },
    {
      title: 'Hack the Problem',
      description: '48-hour ideathon and hackathon focusing on solving real-world problems through innovative solutions.',
      icon: <Lightbulb size={32} />,
      frequency: 'Bi-annual',
      status: 'planned',
      color: 'from-yellow-500 to-orange-500',
      details: 'Major event with prizes & mentorship'
    }
  ];

  const upcomingEvents = [
    {
      title: 'E-Cell DDU Launch Event',
      date: 'March 15, 2024',
      time: '4:00 PM',
      location: 'DDU Auditorium',
      description: 'Official launch of E-Cell DDU with keynote speakers and networking session.'
    },
    {
      title: 'First Pitch & Pizza',
      date: 'March 29, 2024',
      time: '6:00 PM',
      location: 'Student Activity Center',
      description: 'Inaugural pitch session - bring your ideas and appetite!'
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exciting activities and programs designed to nurture entrepreneurial thinking and build our startup community
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-6"></div>
        </div>

        {/* Regular Events */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Regular Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${event.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-white/20 rounded-lg">
                        {event.icon}
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold">{event.title}</h4>
                        <p className="text-white/80">{event.frequency}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      event.status === 'upcoming' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}>
                      {event.status === 'upcoming' ? 'Coming Soon' : 'Planned'}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={16} className="mr-2" />
                    {event.details}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        {/* <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl font-bold text-gray-900">{event.title}</h4>
                  <div className="p-2 bg-blue-500 text-white rounded-lg">
                    <Calendar size={20} />
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-blue-500" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-blue-500" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2 text-blue-500" />
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-xl text-orange-100 mb-8">
              Don't miss out on our events! Follow us on social media and join our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105">
                Join Our WhatsApp Group
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300 transform hover:scale-105">
                Follow on Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;