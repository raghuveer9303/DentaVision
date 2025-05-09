import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Models: React.FC = () => {
  const models = [
    {
      name: "Vanilla CNN",
      description: "Basic convolutional neural network with multiple convolutional layers",
      architecture: "Conv2D → MaxPool2D → Conv2D → MaxPool2D → Conv2D → MaxPool2D → Flatten → Dense",
      parameters: "~2.5M",
      advantages: "Simple architecture, fast training",
      limitations: "Limited feature extraction capability"
    },
    {
      name: "CNN with Attention",
      description: "CNN enhanced with attention mechanism for better feature focus",
      architecture: "Conv2D → Attention → MaxPool2D → Conv2D → Attention → MaxPool2D → Flatten → Dense",
      parameters: "~3M",
      advantages: "Better feature focus, improved accuracy",
      limitations: "Increased computational complexity"
    },
    {
      name: "EfficientNet-B0",
      description: "State-of-the-art CNN architecture optimized for efficiency",
      architecture: "Compound scaling of depth, width, and resolution",
      parameters: "~5.3M",
      advantages: "Excellent accuracy-efficiency trade-off",
      limitations: "Requires careful hyperparameter tuning"
    },
    {
      name: "Custom Vision Transformer",
      description: "Transformer-based architecture adapted for image classification",
      architecture: "Patch Embedding → Transformer Encoder → Classification Head",
      parameters: "~4.8M",
      advantages: "Strong feature learning, good generalization",
      limitations: "Higher computational requirements"
    },
    {
      name: "Pre-Trained Vision Transformer (ViT)",
      description: "Pre-trained transformer model fine-tuned for dental image classification",
      architecture: "Pre-trained ViT → Fine-tuning → Classification Head",
      parameters: "~86M",
      advantages: "Best performance, transfer learning benefits",
      limitations: "Highest computational requirements"
    }
  ];

  const trainingConfig = {
    lossFunction: "Cross Entropy Loss",
    learningRate: "1e-4",
    optimizer: "Adam",
    weightDecay: "1e-4",
    epochs: "50",
    batchSize: "32"
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Model Architectures
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Five different deep learning models trained and compared for optimal performance
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          {models.map((model, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{model.name}</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">{model.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Architecture</h4>
                      <p className="text-gray-600">{model.architecture}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Parameters</h4>
                      <p className="text-gray-600">{model.parameters}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Advantages</h4>
                      <p className="text-gray-600">{model.advantages}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Limitations</h4>
                      <p className="text-gray-600">{model.limitations}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Training Configuration</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Parameter</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries(trainingConfig).map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell className="font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}</TableCell>
                    <TableCell>{value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Models; 