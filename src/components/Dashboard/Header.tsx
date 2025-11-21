import { Shield, Radio } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold tracking-tight">NSG Surveillance System</h1>
              <p className="text-sm text-muted-foreground">Advanced Weather-Resistant Monitoring</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="border-success text-success">
              <Radio className="mr-1.5 h-3 w-3" />
              System Online
            </Badge>
            <Badge variant="outline" className="border-primary text-primary font-mono">
              {new Date().toLocaleTimeString()}
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
};
