import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, PieChart } from "@/components/ui/charts";

const Results = () => {
  const barChartData = {
    labels: ["Dental Caries", "Gingivitis", "Periodontitis", "Oral Cancer", "Plaque"],
    datasets: [
      {
        label: "Model Accuracy (%)",
        data: [95, 92, 89, 91, 97],
        backgroundColor: "#9b87f5",
      },
    ],
  };

  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Current Model",
        data: [83, 85, 87, 89, 90, 91, 92, 93, 94],
        borderColor: "#9b87f5",
        backgroundColor: "rgba(155, 135, 245, 0.1)",
        fill: true,
      },
      {
        label: "Previous Gen",
        data: [80, 81, 82, 84, 85, 85, 86, 87, 87],
        borderColor: "#0EA5E9",
        backgroundColor: "rgba(14, 165, 233, 0.1)",
        fill: true,
      },
    ],
  };

  const pieChartData = {
    labels: ["True Positive", "True Negative", "False Positive", "False Negative"],
    datasets: [
      {
        data: [82, 12, 4, 2],
        backgroundColor: ["#9b87f5", "#0EA5E9", "#fbbf24", "#ef4444"],
      },
    ],
  };

  const caseStudies = [
    {
      id: 1,
      title: "Early-Stage Dental Caries Detection",
      description: "Our model successfully identified early-stage dental caries in 94% of test cases, allowing for minimally invasive treatment options.",
      outcome: "Positive",
    },
    {
      id: 2,
      title: "Gingivitis vs. Periodontitis Differentiation",
      description: "The system achieved a 91% accuracy rate in distinguishing between gingivitis and early periodontitis, helping clinicians determine appropriate treatment paths.",
      outcome: "Positive",
    },
    {
      id: 3,
      title: "Oral Cancer Screening",
      description: "When tested against confirmed biopsy results, our specialized model detected suspicious lesions with 89% sensitivity and 92% specificity.",
      outcome: "Positive",
    },
    {
      id: 4,
      title: "Pediatric Application Challenges",
      description: "Initial testing on pediatric patients revealed limitations in accurately detecting developmental anomalies, leading to model refinements.",
      outcome: "Mixed",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="bg-dentapurple-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Results & Performance
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Analyzing the effectiveness and accuracy of our AI diagnostic models.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Performance Metrics Tabs */}
        <Tabs defaultValue="accuracy" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="accuracy">Accuracy by Condition</TabsTrigger>
            <TabsTrigger value="improvement">Improvement Over Time</TabsTrigger>
            <TabsTrigger value="classification">Classification Results</TabsTrigger>
          </TabsList>
          
          <TabsContent value="accuracy" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Model Accuracy by Condition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <BarChart data={barChartData} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="improvement" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Accuracy Improvement Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <LineChart data={lineChartData} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="classification" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Classification Results Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <PieChart data={pieChartData} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-dentablue">93%</p>
              <p className="mt-2 text-sm font-medium text-gray-500">Overall Accuracy</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-dentablue">91%</p>
              <p className="mt-2 text-sm font-medium text-gray-500">Sensitivity</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-dentablue">94%</p>
              <p className="mt-2 text-sm font-medium text-gray-500">Specificity</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-dentablue">0.92</p>
              <p className="mt-2 text-sm font-medium text-gray-500">F1 Score</p>
            </CardContent>
          </Card>
        </div>

        {/* Case Studies */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Clinical Case Studies</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <Card key={study.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                    <Badge className={
                      study.outcome === "Positive" ? "bg-green-500" : 
                      study.outcome === "Negative" ? "bg-red-500" : 
                      "bg-yellow-500"
                    }>
                      {study.outcome}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Publication */}
        <div className="mt-12">
          <Card className="bg-dentapurple-light border-none">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Research Publications</h3>
              <p className="text-gray-700 mb-4">
                Our research and development results have been published in peer-reviewed journals, validating our approach and sharing knowledge with the scientific community.
              </p>
              <p className="italic text-gray-600">
                "Novel Deep Learning Approaches for Automated Detection of Dental Pathologies from Intraoral Images" - Journal of Dental Research, 2024
              </p>
              <p className="mt-4 italic text-gray-600">
                "Comparing Human Expert and AI Performance in Identifying Early-Stage Oral Lesions: A Multi-Center Study" - International Journal of Medical Imaging, 2024
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

export default Results;
