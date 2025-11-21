import { Navigation } from "@/components/Navigation";
import { StatusCard } from "@/components/Dashboard/StatusCard";
import { CameraFeed } from "@/components/Dashboard/CameraFeed";
import { Activity, Thermometer, Wind, Eye } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background tactical-grid-bg">
      <Navigation />
      
      <main className="container mx-auto px-6 py-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">System Dashboard</h1>
          <p className="text-muted-foreground">Real-time surveillance system monitoring</p>
        </div>

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
      </main>
    </div>
  );
};

export default Dashboard;
