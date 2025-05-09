import Hero from "@/components/Hero";
import ImageUpload from "@/components/ImageUpload";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
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

export default Index;
