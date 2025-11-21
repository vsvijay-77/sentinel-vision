import { Header } from "@/components/Dashboard/Header";
import { StatusCard } from "@/components/Dashboard/StatusCard";
import { CameraFeed } from "@/components/Dashboard/CameraFeed";
import { CapabilitiesGrid } from "@/components/Dashboard/CapabilitiesGrid";
import { TechnicalSpecs } from "@/components/Dashboard/TechnicalSpecs";
import { Activity, Thermometer, Wind, Eye } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background tactical-grid-bg">
      <Header />
      
      <main className="container mx-auto px-6 py-8 space-y-6">
        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatusCard
            title="System Status"
            value="ONLINE"
            icon={Activity}
            status="active"
          />
          <StatusCard
            title="Detection Range"
            value={1.5}
            unit="km"
            icon={Eye}
            status="active"
          />
          <StatusCard
            title="Environmental"
            value="FOG"
            icon={Wind}
            status="warning"
          />
          <StatusCard
            title="Sensor Temp"
            value={42}
            unit="°C"
            icon={Thermometer}
            status="normal"
          />
        </div>

        {/* Live Feed */}
        <CameraFeed />

        {/* Capabilities */}
        <CapabilitiesGrid />

        {/* Technical Specifications */}
        <TechnicalSpecs />
      </main>
    </div>
  );
};

export default Index;
