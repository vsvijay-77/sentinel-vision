import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Eye, Zap, Target, Database, Wifi, Gauge, AlertCircle } from "lucide-react";

const capabilities = [
  {
    icon: Eye,
    title: "Day Detection Range",
    value: "1.5 km",
    status: "Operational",
    color: "text-primary"
  },
  {
    icon: Target,
    title: "Night Detection Range",
    value: "1.0 km",
    status: "Operational",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Weather Penetration",
    value: "Fog/Haze/Dust",
    status: "Active",
    color: "text-success"
  },
  {
    icon: Database,
    title: "Recording System",
    value: "Post-Op Analysis",
    status: "Ready",
    color: "text-primary"
  },
  {
    icon: Wifi,
    title: "Live Video Feed",
    value: "Real-time Transmission",
    status: "Streaming",
    color: "text-success"
  },
  {
    icon: Gauge,
    title: "Range Finder",
    value: "Up to 2 km",
    status: "Calibrated",
    color: "text-primary"
  },
  {
    icon: AlertCircle,
    title: "Glass Penetration",
    value: "Ambient Light",
    status: "Available",
    color: "text-accent"
  },
  {
    icon: Check,
    title: "AR HUD Compatible",
    value: "Video Output",
    status: "Ready",
    color: "text-primary"
  }
];

export const CapabilitiesGrid = () => {
  return (
    <Card className="p-6 bg-card">
      <h3 className="text-lg font-semibold mb-4">System Capabilities</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {capabilities.map((capability, index) => (
          <div 
            key={index}
            className="p-4 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <capability.icon className={`h-5 w-5 ${capability.color}`} />
              <Badge variant="outline" className="text-xs border-primary/30">
                {capability.status}
              </Badge>
            </div>
            <h4 className="text-sm font-medium mb-1">{capability.title}</h4>
            <p className="text-xs text-muted-foreground">{capability.value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
