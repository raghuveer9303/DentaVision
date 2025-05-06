
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const datasetStats = [
  { name: "Total Images", value: "45,000+" },
  { name: "Conditions Covered", value: "32" },
  { name: "Quality Verified Images", value: "98%" },
  { name: "Contributors", value: "40+" },
];

const datasetCategories = [
  { name: "Dental Caries", count: 12500, percentage: 28 },
  { name: "Gingivitis", count: 8700, percentage: 19 },
  { name: "Periodontitis", count: 7200, percentage: 16 },
  { name: "Oral Cancer", count: 5400, percentage: 12 },
  { name: "Dental Plaque", count: 4900, percentage: 11 },
  { name: "Dental Abscess", count: 3800, percentage: 8 },
  { name: "Other Conditions", count: 2500, percentage: 6 },
];

const Dataset = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="bg-dentapurple-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Dataset
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Comprehensive, diverse, and ethically sourced dental images for accurate AI training.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Dataset Overview Stats */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {datasetStats.map((stat) => (
            <Card key={stat.name}>
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-dentablue">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-500">{stat.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dataset Description */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>About Our Dataset</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Our comprehensive dental imaging dataset has been meticulously curated from anonymized patient records, research contributions, and public datasets with proper permissions and ethical clearance.
              </p>
              <p>
                Each image undergoes a rigorous verification process by our team of dental professionals to ensure accuracy in labeling and high-quality visual data for training our machine learning models.
              </p>
              <p>
                The dataset encompasses a wide range of oral conditions across diverse demographics, ensuring our AI models can recognize diseases across different patient populations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Dataset Categories */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dataset Categories</h2>
          <div className="space-y-4">
            {datasetCategories.map((category) => (
              <div key={category.name} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-900">{category.name}</span>
                  <span className="text-sm text-gray-500">{category.count.toLocaleString()} images</span>
                </div>
                <Progress value={category.percentage} className="h-2" />
                <div className="mt-2 text-xs text-gray-500 text-right">
                  {category.percentage}% of total dataset
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Collection Ethics */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Data Ethics & Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                All images in our dataset are properly anonymized and collected with appropriate consent in accordance with healthcare data regulations and ethical standards.
              </p>
              <p>
                We continuously work to identify and mitigate biases in our dataset, ensuring our AI models provide accurate results across different demographics.
              </p>
              <p>
                Our data governance framework ensures ongoing oversight of how data is collected, stored, and utilized throughout the development process.
              </p>
            </CardContent>
          </Card>
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

export default Dataset;
