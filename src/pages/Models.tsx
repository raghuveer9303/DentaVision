
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const models = [
  {
    name: "DentaVision Core",
    version: "v3.2.1",
    description: "Our flagship model trained to identify the most common dental conditions with high accuracy.",
    accuracy: 94,
    featureType: "production",
    conditions: ["Dental Caries", "Gingivitis", "Periodontitis", "Dental Plaque"],
  },
  {
    name: "DentaVision Specialized",
    version: "v2.5.0",
    description: "Specialized model focused on detecting early signs of oral cancer and precancerous lesions.",
    accuracy: 91,
    featureType: "production",
    conditions: ["Oral Cancer", "Leukoplakia", "Erythroplakia", "Lichen Planus"],
  },
  {
    name: "DentaVision Pediatric",
    version: "v1.8.3",
    description: "Optimized for pediatric dental conditions with special focus on developmental anomalies.",
    accuracy: 92,
    featureType: "production",
    conditions: ["Early Childhood Caries", "Dental Developmental Defects", "Malocclusion"],
  },
  {
    name: "DentaVision Advanced",
    version: "v0.9.5",
    description: "Our next-generation model currently in beta, featuring improved accuracy and expanded condition detection.",
    accuracy: 96,
    featureType: "beta",
    conditions: ["All Core Conditions", "Root Fractures", "Periapical Lesions", "Dental Fluorosis", "Improved Sensitivity"],
  },
];

const Models = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="bg-dentapurple-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our AI Models
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              State-of-the-art machine learning models trained to detect oral diseases with high accuracy.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Model Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {models.map((model) => (
            <Card key={model.name} className={`${model.featureType === 'beta' ? 'border-dentapurple border-2' : ''}`}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{model.name}</CardTitle>
                    <CardDescription className="text-sm">{model.version}</CardDescription>
                  </div>
                  <Badge className={model.featureType === 'beta' ? 'bg-dentapurple' : 'bg-dentablue'}>
                    {model.featureType === 'beta' ? 'Beta' : 'Production'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {model.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Accuracy</span>
                    <span className="text-sm font-medium">{model.accuracy}%</span>
                  </div>
                  <Progress value={model.accuracy} className="h-2" />
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">Conditions Detected:</h4>
                  <div className="flex flex-wrap gap-2">
                    {model.conditions.map((condition) => (
                      <Badge key={condition} variant="outline" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Overview */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Technology</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                DentaVision's AI models are built using state-of-the-art deep learning architectures specially optimized for medical image analysis. Our approach combines convolutional neural networks (CNNs) with attention mechanisms to focus on significant features in dental images.
              </p>
              
              <p className="text-gray-600 mb-4">
                Each model undergoes rigorous training on our diverse dataset, followed by extensive validation by dental professionals to ensure both technical accuracy and clinical relevance.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mt-8 mb-4">Key Technical Features:</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Transfer learning from medical imaging domains for improved feature extraction</li>
                <li>Advanced data augmentation techniques to enhance model robustness</li>
                <li>Ensemble approaches combining multiple classification models</li>
                <li>Uncertainty quantification to indicate confidence levels in predictions</li>
                <li>Continual learning capabilities to improve over time with new data</li>
              </ul>
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

export default Models;
