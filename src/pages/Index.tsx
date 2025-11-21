import { Navigation } from "@/components/Navigation";
import { CapabilitiesGrid } from "@/components/Dashboard/CapabilitiesGrid";
import { TechnicalSpecs } from "@/components/Dashboard/TechnicalSpecs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background tactical-grid-bg">
      <Navigation />
      
      <main className="container mx-auto px-6 py-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">NSG Surveillance System</h1>
          <p className="text-muted-foreground">Advanced Weather-Resistant Monitoring</p>
        </div>

        {/* Capabilities */}
        <CapabilitiesGrid />

        {/* Technical Specifications */}
        <TechnicalSpecs />
      </main>
    </div>
  );
};

export default Index;
