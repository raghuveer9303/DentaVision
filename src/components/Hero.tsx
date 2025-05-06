import { Smile, Shield, Award } from "lucide-react";
import ImageUpload from "@/components/ImageUpload";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-dentapurple-light/20 to-white">
      {/* Hero Section */}
      <section className="relative pt-8 pb-12 lg:pt-12 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left space-y-8">
              <div>
                <h1 className="text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
                  <span className="block mb-2">Detect Oral Diseases</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-dentablue to-dentapurple">
                    With AI Precision
                  </span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
                  DentaVision combines advanced AI technology with dental expertise to provide quick and accurate oral health assessments. Upload a photo or use your camera for instant analysis.
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <Shield className="h-5 w-5 text-dentablue" />
                  <span className="text-sm font-medium">Instant Analysis</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <Smile className="h-5 w-5 text-dentapurple" />
                  <span className="text-sm font-medium">User Friendly</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <Award className="h-5 w-5 text-dentablue" />
                  <span className="text-sm font-medium">Professional Grade</span>
                </div>
              </div>
            </div>

            {/* Right Column - Upload Card */}
            <div className="lg:ml-auto w-full max-w-xl flex items-start">
              <Card className="p-4 shadow-xl bg-white/90 backdrop-blur-sm border-0 ring-1 ring-gray-100">
                <ImageUpload />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
