import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminPanel from "./pages/AdminPanel";
import { useEffect } from "react";

const ADMIN_TOKEN = "w4@mj8&05uchkq3ldn7rwfo8@6i8cy$lfucej9*0j!"; 

const Tracker = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const source = params.get('source') || 'direct';

    const visit = {
      source,
      date: new Date().toISOString(),
      path: location.pathname
    };
    
    const existingData = JSON.parse(localStorage.getItem('trafficData') || '[]');
    localStorage.setItem('trafficData', JSON.stringify([...existingData, visit]));
    
    console.log('Трекер: сохранено посещение от', source);
  }, [location]);

  return null;
};

const ProtectedAdmin = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const token = pathname.split('/')[2];
    if (token !== ADMIN_TOKEN) {
      navigate('/');
      console.error('Неверный токен админки!');
    }
  }, [pathname, navigate]);

  return <AdminPanel />;
};

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Tracker />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin/:token" element={<ProtectedAdmin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;