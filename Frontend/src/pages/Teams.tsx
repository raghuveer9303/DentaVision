import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Raghuveer Venkatesh",
    role: "Team Member",
    image: "/images/Raghu.png",
    linkedin: "https://www.linkedin.com/in/raghuveer-venkatesh/"
  },
  {
    name: "Madhavan Balaji",
    role: "Team Member",
    image: "/images/Maddy.png",
    linkedin: "https://www.linkedin.com/in/madhavanbalaji/"
  },
  {
    name: "Vigneshwar Ravi Rao",
    role: "Team Member",
    image: "/images/Vicky.png",
    linkedin: "https://www.linkedin.com/in/vigneshwarravirao/"
  }
];

const Teams: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Meet the talented individuals behind DentaVision
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="flex justify-center p-4">
                <div className="w-48 h-48 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="mt-1 text-gray-500">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin className="h-5 w-5 mr-2" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams; 