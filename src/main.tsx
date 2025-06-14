import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { logInfo } from "@/lib/errorUtils";

logInfo('main.tsx loaded');

createRoot(document.getElementById("root")!).render(<App />);
