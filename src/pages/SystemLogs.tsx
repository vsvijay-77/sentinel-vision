import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

const SystemLogs = () => {
  const logs = [
    { time: "14:32:15", type: "info", message: "System startup complete", icon: CheckCircle },
    { time: "14:31:48", type: "warning", message: "Environmental conditions: FOG detected", icon: AlertTriangle },
    { time: "14:30:22", type: "success", message: "Camera calibration successful", icon: CheckCircle },
    { time: "14:29:55", type: "info", message: "Thermal sensor initialized", icon: Info },
    { time: "14:29:30", type: "error", message: "Failed to connect to backup server", icon: AlertCircle },
    { time: "14:28:12", type: "info", message: "Recording started - Session #2847", icon: Info },
  ];

  return (
    <div className="min-h-screen bg-background tactical-grid-bg">
      <Navigation />
      
      <main className="container mx-auto px-6 py-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">System Logs</h1>
          <p className="text-muted-foreground">Real-time system activity and diagnostics</p>
        </div>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <ScrollArea className="h-[600px] p-6">
            <div className="space-y-3">
              {logs.map((log, index) => {
                const Icon = log.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-border/30 hover:border-border transition-colors"
                  >
                    <Icon className={`h-5 w-5 mt-0.5 ${
                      log.type === 'error' ? 'text-alert' :
                      log.type === 'warning' ? 'text-warning' :
                      log.type === 'success' ? 'text-success' :
                      'text-primary'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-mono text-muted-foreground">{log.time}</span>
                        <Badge variant="outline" className={`text-xs ${
                          log.type === 'error' ? 'border-alert text-alert' :
                          log.type === 'warning' ? 'border-warning text-warning' :
                          log.type === 'success' ? 'border-success text-success' :
                          'border-primary text-primary'
                        }`}>
                          {log.type.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-sm text-foreground">{log.message}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </Card>
      </main>
    </div>
  );
};

export default SystemLogs;
