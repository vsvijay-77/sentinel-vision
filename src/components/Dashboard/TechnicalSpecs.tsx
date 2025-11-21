import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const specs = {
  hardware: [
    { label: "Weight", value: "< 2.5 kg", description: "Man-portable design" },
    { label: "Power", value: "Li-ion Battery", description: "8+ hours operation" },
    { label: "Operating Temp", value: "-20°C to +50°C", description: "All weather capable" },
    { label: "Weather Sealing", value: "IP67", description: "Dust & water resistant" }
  ],
  imaging: [
    { label: "Sensor Type", value: "LWIR/MWIR", description: "Dual spectrum capability" },
    { label: "Resolution", value: "1920 x 1080", description: "Full HD output" },
    { label: "Frame Rate", value: "60 fps", description: "Smooth real-time video" },
    { label: "Zoom", value: "10x Optical", description: "Digital up to 40x" }
  ],
  features: [
    { label: "Range Finder", value: "Laser", description: "±1m accuracy at 2km" },
    { label: "Video Recording", value: "H.265", description: "256GB internal storage" },
    { label: "Connectivity", value: "Wi-Fi 6 / 5G", description: "Low latency streaming" },
    { label: "AR Display", value: "Compatible", description: "Real-time overlay data" }
  ]
};

export const TechnicalSpecs = () => {
  return (
    <Card className="p-6 bg-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Technical Specifications</h3>
        <Badge variant="outline" className="border-success text-success">
          NSG Certified
        </Badge>
      </div>
      
      <Tabs defaultValue="hardware" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-secondary">
          <TabsTrigger value="hardware">Hardware</TabsTrigger>
          <TabsTrigger value="imaging">Imaging</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
        </TabsList>
        
        <TabsContent value="hardware" className="space-y-3 mt-4">
          {specs.hardware.map((spec, index) => (
            <div key={index} className="flex justify-between items-start p-3 bg-secondary rounded border border-border">
              <div>
                <p className="text-sm font-medium">{spec.label}</p>
                <p className="text-xs text-muted-foreground">{spec.description}</p>
              </div>
              <p className="text-sm font-mono text-primary">{spec.value}</p>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="imaging" className="space-y-3 mt-4">
          {specs.imaging.map((spec, index) => (
            <div key={index} className="flex justify-between items-start p-3 bg-secondary rounded border border-border">
              <div>
                <p className="text-sm font-medium">{spec.label}</p>
                <p className="text-xs text-muted-foreground">{spec.description}</p>
              </div>
              <p className="text-sm font-mono text-primary">{spec.value}</p>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="features" className="space-y-3 mt-4">
          {specs.features.map((spec, index) => (
            <div key={index} className="flex justify-between items-start p-3 bg-secondary rounded border border-border">
              <div>
                <p className="text-sm font-medium">{spec.label}</p>
                <p className="text-xs text-muted-foreground">{spec.description}</p>
              </div>
              <p className="text-sm font-mono text-primary">{spec.value}</p>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </Card>
  );
};
