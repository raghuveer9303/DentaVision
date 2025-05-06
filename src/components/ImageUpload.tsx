import React, { useState, useRef } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Upload, Camera, Image } from "lucide-react";
import { toast } from "sonner";
import WebcamCapture from "./WebcamCapture";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showWebcam, setShowWebcam] = useState(false);
  const [analyzedImage, setAnalyzedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedImage(reader.result as string);
          toast.success('Image uploaded successfully');
        };
        reader.readAsDataURL(file);
      } else {
        toast.error('Please select an image file');
      }
    }
  };

  const handleWebcamCapture = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setShowWebcam(false);
    toast.success('Photo captured successfully');
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleAnalyze = async () => {
    if (!selectedImage) {
      toast.error('Please upload or capture an image first');
      return;
    }
    setLoading(true);
    setAnalyzedImage(null);
    setPrediction(null);
    
    try {
      // Convert base64 to blob
      const base64Response = await fetch(selectedImage);
      const blob = await base64Response.blob();

      const formData = new FormData();
      formData.append('file', blob, 'image.jpg');

      const response = await fetch('https://raghuserver.tail769edb.ts.net:8005/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to analyze image');
      }
      
      const result = await response.json();
      setPrediction(result.prediction);
      setAnalyzedImage(selectedImage);
      toast.success('Image analyzed successfully');
    } catch (err) {
      console.error('Analysis error:', err);
      toast.error(err instanceof Error ? err.message : 'Failed to analyze image');
    } finally {
      setLoading(false);
    }
  };

  const predictionExplanations: Record<string, { explanation: string; nextSteps: string }> = {
    Calculus: {
      explanation: 'Calculus (tartar) is hardened dental plaque that can lead to gum disease if not removed.',
      nextSteps: 'Consider scheduling a dental cleaning to remove calculus and maintain oral hygiene.'
    },
    Caries: {
      explanation: 'Dental caries (cavities) are areas of tooth decay caused by bacteria.',
      nextSteps: 'Consult a dentist for a thorough examination and possible restorative treatment.'
    },
    Gingivitis: {
      explanation: 'Gingivitis is inflammation of the gums, often due to plaque buildup.',
      nextSteps: 'Improve oral hygiene and consider a dental checkup for professional advice.'
    },
    Hypodontia: {
      explanation: 'Hypodontia refers to missing teeth that did not develop.',
      nextSteps: 'Consult a dental professional for options such as prosthetics or orthodontics.'
    },
    'Mouth Ulcer': {
      explanation: 'Mouth ulcers are small, painful lesions in the mouth.',
      nextSteps: 'Maintain oral hygiene and consult a dentist if ulcers persist or worsen.'
    },
    'Tooth Discoloration': {
      explanation: 'Tooth discoloration can result from various causes including diet, habits, or underlying issues.',
      nextSteps: 'Consider professional cleaning or whitening, and consult a dentist for persistent discoloration.'
    },
    healthy: {
      explanation: 'No significant dental issues detected in the image.',
      nextSteps: 'Continue regular oral hygiene and routine dental checkups.'
    },
  };

  return (
    <div className="flex justify-center bg-gray-50">
      <Card className="bg-white shadow-lg border-gray-200 w-full max-w-2xl mx-auto">
        <CardContent className="p-6 flex flex-col items-center">
          <div className="text-center mb-6 w-full">
            <h2 className="text-2xl font-bold text-gray-900">
              Upload or Capture an Image
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Upload a clear image of the oral cavity or use your camera to take a photo
            </p>
          </div>

          {!showWebcam && !selectedImage && (
            <div className="w-full flex flex-col items-center gap-6">
              <div className="w-full">
                <span className="text-xs text-gray-500 mb-2 block text-center">Example of clear images:</span>
                <div className="flex justify-center gap-4">
                  <img src="/images/mohd 23.jpg" alt="Example 1" className="w-20 h-20 object-cover rounded-lg border hover:scale-105 transition-transform" />
                  <img src="/images/mous30.jpeg" alt="Example 2" className="w-20 h-20 object-cover rounded-lg border hover:scale-105 transition-transform" />
                  <img src="/images/mous33.jpeg" alt="Example 3" className="w-20 h-20 object-cover rounded-lg border hover:scale-105 transition-transform" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
                <button
                  onClick={triggerFileInput}
                  className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-dentablue hover:bg-dentablue/5 transition-all group"
                >
                  <div className="mb-3">
                    <Upload className="h-8 w-8 text-dentablue group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Upload Image</span>
                  <span className="text-xs text-gray-500 mt-1">or drag and drop</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                  />
                </button>

                <button
                  onClick={() => setShowWebcam(true)}
                  className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-dentapurple hover:bg-dentapurple/5 transition-all group"
                >
                  <div className="mb-3">
                    <Camera className="h-8 w-8 text-dentapurple group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Use Camera</span>
                  <span className="text-xs text-gray-500 mt-1">take a photo</span>
                </button>
              </div>
            </div>
          )}

          {/* Only mount WebcamCapture when showWebcam is true */}
          {showWebcam && (
            <WebcamCapture
              onCapture={handleWebcamCapture}
              onClose={() => setShowWebcam(false)}
              isActive={true}
            />
          )}

          {selectedImage && (
            <div className="mt-4 w-full flex flex-col items-center">
              <div className="aspect-[4/3] overflow-hidden rounded-lg w-full max-w-md">
                <img
                  src={analyzedImage || selectedImage}
                  alt="Uploaded"
                  className="h-full w-full object-cover"
                />
              </div>
              {prediction && (
                <div className="mt-4 text-center flex flex-col items-center">
                  <span className="text-lg font-semibold text-dentapurple">Prediction: {prediction}</span>
                  <div className="mt-4 max-w-xl">
                    <div className="mb-2 text-gray-800 font-medium">Explanation:</div>
                    <div className="mb-4 text-gray-600">{predictionExplanations[prediction]?.explanation || 'No explanation available.'}</div>
                    <div className="mb-2 text-gray-800 font-medium">Next Steps:</div>
                    <div className="mb-4 text-gray-600">{predictionExplanations[prediction]?.nextSteps || 'No next steps available.'}</div>
                    <div className="mt-6 text-xs text-gray-500 border-t pt-3">
                      <strong>Disclaimer:</strong> This result is generated by an AI model and is for informational purposes only. It should not be considered medical advice. Please consult a qualified dental professional for diagnosis and treatment.
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-4 flex justify-end gap-2 w-full max-w-md">
                <Button 
                  variant="outline" 
                  onClick={() => { setSelectedImage(null); setAnalyzedImage(null); setPrediction(null); }}
                >
                  Remove
                </Button>
                <Button 
                  onClick={handleAnalyze}
                  className="bg-dentablue hover:bg-dentablue/90"
                  disabled={loading}
                >
                  {loading ? 'Analyzing...' : 'Analyze Image'}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageUpload;
