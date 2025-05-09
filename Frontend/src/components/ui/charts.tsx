
import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./chart";

interface ChartProps {
  data: {
    labels: string[];
    datasets: {
      label?: string;
      data: number[];
      backgroundColor?: string | string[];
      borderColor?: string;
      fill?: boolean;
    }[];
  };
}

export const BarChart = ({ data }: ChartProps) => {
  // Transform the data format from our custom format to Recharts format
  const transformedData = data.labels.map((label, index) => {
    const dataObject: Record<string, any> = { name: label };
    data.datasets.forEach((dataset) => {
      dataObject[dataset.label || "value"] = dataset.data[index];
    });
    return dataObject;
  });

  return (
    <ChartContainer config={{}} className="w-full h-full">
      <RechartsBarChart data={transformedData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />
        {data.datasets.map((dataset, index) => {
          // Handle string[] type by using only the first color
          const fillColor = Array.isArray(dataset.backgroundColor) 
            ? dataset.backgroundColor[0] 
            : dataset.backgroundColor || "#8884d8";
            
          return (
            <Bar
              key={index}
              dataKey={dataset.label || "value"}
              fill={fillColor}
            />
          );
        })}
      </RechartsBarChart>
    </ChartContainer>
  );
};

export const LineChart = ({ data }: ChartProps) => {
  // Transform the data format from our custom format to Recharts format
  const transformedData = data.labels.map((label, index) => {
    const dataObject: Record<string, any> = { name: label };
    data.datasets.forEach((dataset) => {
      dataObject[dataset.label || "value"] = dataset.data[index];
    });
    return dataObject;
  });

  return (
    <ChartContainer config={{}} className="w-full h-full">
      <RechartsLineChart data={transformedData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />
        {data.datasets.map((dataset, index) => {
          // Handle string[] type for borderColor by using only the first color
          const strokeColor = Array.isArray(dataset.borderColor) 
            ? dataset.borderColor[0] 
            : dataset.borderColor || "#8884d8";
          
          // Handle string[] type for backgroundColor by using only the first color
          const bgColor = Array.isArray(dataset.backgroundColor) 
            ? dataset.backgroundColor[0] 
            : dataset.backgroundColor || "rgba(136, 132, 216, 0.1)";
          
          return (
            <Line
              key={index}
              type="monotone"
              dataKey={dataset.label || "value"}
              stroke={strokeColor}
              fill={dataset.fill ? bgColor : undefined}
              activeDot={{ r: 8 }}
            />
          );
        })}
      </RechartsLineChart>
    </ChartContainer>
  );
};

export const PieChart = ({ data }: ChartProps) => {
  // For pie charts, we need a different data transformation
  const transformedData = data.labels.map((label, index) => {
    return {
      name: label,
      value: data.datasets[0].data[index]
    };
  });

  // Extract colors from the dataset
  const colors = Array.isArray(data.datasets[0].backgroundColor)
    ? data.datasets[0].backgroundColor
    : [data.datasets[0].backgroundColor || "#8884d8"];

  return (
    <ChartContainer config={{}} className="w-full h-full">
      <RechartsPieChart margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
        <Pie
          data={transformedData}
          cx="50%"
          cy="50%"
          labelLine={true}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {transformedData.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={colors[index % colors.length] as string} 
            />
          ))}
        </Pie>
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />
      </RechartsPieChart>
    </ChartContainer>
  );
};
