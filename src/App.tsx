import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "./pages/NotFound";
import Teams from "@/pages/Teams";
import Dataset from "@/pages/Dataset";
import Models from "@/pages/Models";
import Results from "@/pages/Results";
import Navbar from "@/components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/team" element={<Teams />} />
            <Route path="/dataset" element={<Dataset />} />
            <Route path="/models" element={<Models />} />
            <Route path="/results" element={<Results />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
