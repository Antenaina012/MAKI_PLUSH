import { useState } from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "./providers/ThemeProvider";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ProductsSection } from "./components/ProductsSection";
import { StorySection } from "./components/StorySection";
import { ContactSection } from "./components/ContactSection";
import { FooterComponent } from "./components/FooterComponent";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <ThemeProvider>
      <Toaster position="top-right" richColors />
      {showWelcome && <WelcomeScreen onComplete={() => setShowWelcome(false)} />}
      
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <Navigation />
        <HeroSection />
        <ProductsSection />
        <StorySection />
        <ContactSection />
        <FooterComponent />
      </div>
    </ThemeProvider>
  );
}