import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, LineChart } from "@/components/ui/charts";

const Results: React.FC = () => {
  const modelMetrics = {
    labels: ["Vanilla CNN", "CNN with Attention", "EfficientNet-B0", "Custom ViT", "Pre-trained ViT"],
    datasets: [
      {
        label: "Accuracy",
        data: [0.82, 0.85, 0.88, 0.90, 0.93],
        backgroundColor: "#6366f1"
      },
      {
        label: "F1-Score",
        data: [0.79, 0.83, 0.86, 0.89, 0.92],
        backgroundColor: "#8b5cf6"
      }
    ]
  };

  const classMetrics = {
    labels: ["Calculus", "Caries", "Gingivitis", "Hypodontia", "Mouth Ulcer", "Tooth Discoloration", "Healthy"],
    datasets: [
      {
        label: "Precision",
        data: [0.91, 0.89, 0.88, 0.92, 0.87, 0.90, 0.95],
        backgroundColor: "#6366f1"
      },
      {
        label: "Recall",
        data: [0.88, 0.86, 0.85, 0.90, 0.84, 0.89, 0.94],
        backgroundColor: "#8b5cf6"
      }
    ]
  };

  const trainingProgress = {
    labels: ["Epoch 1", "Epoch 10", "Epoch 20", "Epoch 30", "Epoch 40", "Epoch 50"],
    datasets: [
      {
        label: "Training Loss",
        data: [2.1, 1.4, 0.9, 0.6, 0.4, 0.3],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99, 102, 241, 0.1)"
      },
      {
        label: "Validation Loss",
        data: [2.2, 1.5, 1.0, 0.7, 0.5, 0.4],
        borderColor: "#8b5cf6",
        backgroundColor: "rgba(139, 92, 246, 0.1)"
      }
    ]
  };

  const confusionMatrix = {
    labels: ["Calculus", "Caries", "Gingivitis", "Hypodontia", "Mouth Ulcer", "Tooth Discoloration", "Healthy"],
    data: [
      [85, 5, 3, 2, 1, 2, 2],
      [4, 88, 3, 1, 2, 1, 1],
      [3, 4, 82, 2, 3, 2, 4],
      [2, 1, 2, 90, 1, 2, 2],
      [2, 3, 4, 1, 84, 3, 3],
      [3, 2, 3, 2, 3, 86, 1],
      [2, 1, 3, 2, 2, 1, 89]
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Model Performance Results
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Comprehensive evaluation of model performance across different metrics
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Model Comparison</h3>
              <div className="h-[400px]">
                <BarChart data={modelMetrics} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Class-wise Performance</h3>
              <div className="h-[400px]">
                <BarChart data={classMetrics} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Training Progress</h3>
              <div className="h-[400px]">
                <LineChart data={trainingProgress} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Confusion Matrix (Pre-trained ViT)</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Class</TableHead>
                      {confusionMatrix.labels.map((label) => (
                        <TableHead key={label}>{label}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {confusionMatrix.data.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{confusionMatrix.labels[i]}</TableCell>
                        {row.map((cell, j) => (
                          <TableCell key={j} className={cell > 85 ? "text-green-600" : cell > 80 ? "text-yellow-600" : "text-red-600"}>
                            {cell}%
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Key Findings</h3>
              <div className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Pre-trained Vision Transformer achieved the highest accuracy (93%) and F1-score (92%)</li>
                  <li>Best performance in detecting Hypodontia (92% precision, 90% recall)</li>
                  <li>Healthy class detection shows highest confidence (95% precision, 94% recall)</li>
                  <li>Most confusion occurs between Gingivitis and other conditions</li>
                  <li>Model shows strong generalization with minimal overfitting</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Results; 