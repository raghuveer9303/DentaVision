
import Navbar from "@/components/Navbar";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Lead Dental Researcher",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Dr. Johnson has over 15 years of experience in dental research and leads our clinical validation team.",
  },
  {
    name: "Alex Chen, PhD",
    role: "AI Research Scientist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Alex specializes in computer vision and has developed several breakthrough algorithms for medical image analysis.",
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Head of Dentistry",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "With extensive clinical experience, Dr. Rodriguez provides critical insights to improve our diagnostic accuracy.",
  },
  {
    name: "Dr. Emily Wong",
    role: "Data Science Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Emily leads our data science initiatives, ensuring our models are trained on diverse and comprehensive datasets.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="bg-dentapurple-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              A collaborative group of dental experts and AI researchers dedicated to advancing oral healthcare through technology.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {teamMembers.map((member) => (
            <div 
              key={member.name}
              className="flex flex-col md:flex-row items-center p-6 bg-white rounded-lg shadow-md border border-gray-100"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-32 w-32 rounded-full object-cover"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="mt-6 md:mt-0 md:ml-6 text-center md:text-left">
                <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                <div className="text-sm font-medium text-dentablue">{member.role}</div>
                <p className="mt-3 text-base text-gray-500">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Our Mission Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Our Mission</h2>
          <div className="mt-6 bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <p className="text-base text-gray-500">
                At DentaVision, our mission is to leverage cutting-edge AI technology to improve oral healthcare outcomes worldwide. By developing accurate diagnostic tools that are accessible to dental professionals everywhere, we aim to enable earlier detection of oral diseases, leading to better patient outcomes and reduced healthcare costs.
              </p>
              <p className="mt-4 text-base text-gray-500">
                We believe that by combining the expertise of dental professionals with the power of machine learning, we can create tools that augment human capabilities and improve the standard of care in dentistry.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-24">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <span className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">DentaVision</span>
              © 2025 DentaVision. All rights reserved.
            </span>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              AI-Powered Oral Disease Detection
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Team;
