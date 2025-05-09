import React, { useRef, useState, useCallback, useEffect } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Camera, X } from "lucide-react";

interface WebcamCaptureProps {
  onCapture: (imageSrc: string) => void;
  onClose: () => void;
  isActive?: boolean;
}

const WebcamCapture: React.FC<WebcamCaptureProps> = ({ onCapture, onClose, isActive = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const stopWebcam = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }, []);

  const initializeWebcam = useCallback(async () => {
    try {
      if (!streamRef.current) {
        setIsLoading(true);
        const constraints = {
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            facingMode: "user"
          }
        };
        
        const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        streamRef.current = mediaStream;
        
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          await videoRef.current.play();
        }
      }
    } catch (err) {
      console.error("Error accessing webcam:", err);
      setError("Unable to access camera. Please make sure camera permissions are enabled.");
      toast.error("Camera access denied or not available");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isActive) {
      initializeWebcam();
    }
    return () => {
      stopWebcam();
    };
  }, [isActive, initializeWebcam, stopWebcam]);

  const captureImage = () => {
    if (videoRef.current && streamRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");
      
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageSrc = canvas.toDataURL("image/png");
        onCapture(imageSrc);
        stopWebcam();
      }
    }
  };

  const handleClose = () => {
    stopWebcam();
    onClose();
  };

  if (error) {
    return (
      <div className="rounded-lg bg-red-50 p-8 text-center">
        <div className="text-red-500 mb-4">
          <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938-9L12 3l6.938 4L19 12l-6.938 4L5 12l.062-5z" />
          </svg>
        </div>
        <p className="text-sm text-gray-600 mb-4">{error}</p>
        <Button variant="outline" onClick={handleClose}>
          Close
        </Button>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden bg-black">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Dental Alignment Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Outer frame */}
        <div className="absolute inset-[10%] border-2 border-white/50 rounded-lg"></div>
        
        {/* Center horizontal line */}
        <div className="absolute left-[10%] right-[10%] top-1/2 h-[1px] bg-white/50"></div>
        
        {/* Center vertical line */}
        <div className="absolute top-[10%] bottom-[10%] left-1/2 w-[1px] bg-white/50"></div>
        
        {/* Guide text */}
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 text-white/75 text-sm bg-black/30 px-2 py-1 rounded">
          Align teeth within frame
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
        <Button 
          onClick={captureImage} 
          className="bg-dentablue hover:bg-dentablue/90 rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
          disabled={isLoading}
        >
          <Camera size={24} />
        </Button>
      </div>

      <Button 
        variant="ghost" 
        className="absolute top-2 right-2 text-white hover:bg-black/20 rounded-full w-10 h-10 p-0"
        onClick={handleClose}
      >
        <X size={20} />
      </Button>
    </div>
  );
};

export default WebcamCapture;
