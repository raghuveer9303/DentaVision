import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PieChart } from "@/components/ui/charts";

const Dataset: React.FC = () => {
  const datasetInfo = {
    labels: ["Oral Disease Dataset", "Healthy Tooth Dataset"],
    datasets: [{
      data: [1000, 500],
      backgroundColor: ["#6366f1", "#8b5cf6"],
    }]
  };

  const classDistribution = {
    labels: ["Calculus", "Caries", "Gingivitis", "Hypodontia", "Mouth Ulcer", "Tooth Discoloration", "Healthy"],
    datasets: [{
      data: [150, 200, 180, 120, 150, 200, 500],
      backgroundColor: ["#6366f1", "#8b5cf6", "#ec4899", "#f43f5e", "#f97316", "#eab308", "#22c55e"],
    }]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Dataset Information
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Comprehensive collection of dental images for AI model training
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Dataset Overview</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Our dataset consists of two main components:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Oral Disease Dataset: 1,000 images</li>
                  <li>Healthy Tooth Dataset: 500 images</li>
                </ul>
                <p className="text-gray-600">
                  Total dataset size: 1,500 images
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Dataset Distribution</h3>
              <div className="h-[300px]">
                <PieChart data={datasetInfo} />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Class Distribution</h3>
            <div className="h-[400px]">
              <PieChart data={classDistribution} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Preprocessing Steps</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Step</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Resizing</TableCell>
                  <TableCell>Images resized to 224x224 pixels for model input</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Normalization</TableCell>
                  <TableCell>Pixel values normalized to range [0,1]</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Data Augmentation</TableCell>
                  <TableCell>Random rotations, flips, and brightness adjustments</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tensor Conversion</TableCell>
                  <TableCell>Images converted to PyTorch tensors</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dataset; 