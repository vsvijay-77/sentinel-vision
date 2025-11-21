import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Video, Square, Eye, Maximize } from "lucide-react";
import { useState } from "react";

export const CameraFeed = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <Card className="p-6 bg-card">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Live Surveillance Feed</h3>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-primary text-primary">
              <Eye className="mr-1.5 h-3 w-3" />
              LWIR Active
            </Badge>
            {isRecording && (
              <Badge variant="outline" className="border-destructive text-destructive animate-pulse">
                ● REC
              </Badge>
            )}
          </div>
        </div>
        
        <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden tactical-grid-bg">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Scanning line effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan"></div>
              </div>
              
              {/* Crosshair overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-64 h-64">
                  <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-primary/50 -translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-primary/50 -translate-x-1/2"></div>
                  <div className="absolute left-0 top-1/2 w-8 h-0.5 bg-primary/50 -translate-y-1/2"></div>
                  <div className="absolute right-0 top-1/2 w-8 h-0.5 bg-primary/50 -translate-y-1/2"></div>
                  
                  {/* Corner markers */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary"></div>
                </div>
              </div>

              {/* Info overlay */}
              <div className="absolute top-4 left-4 space-y-1 font-mono text-xs text-primary">
                <div>RANGE: 847m</div>
                <div>BEARING: 045°</div>
                <div>TEMP: -2°C</div>
              </div>

              <div className="absolute top-4 right-4 space-y-1 font-mono text-xs text-primary text-right">
                <div>FOG PENETRATION: ACTIVE</div>
                <div>IR MODE: LWIR</div>
                <div>ZOOM: 4.2x</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button 
              variant={isRecording ? "destructive" : "default"}
              size="sm"
              onClick={() => setIsRecording(!isRecording)}
            >
              {isRecording ? (
                <>
                  <Square className="mr-2 h-4 w-4" />
                  Stop Recording
                </>
              ) : (
                <>
                  <Video className="mr-2 h-4 w-4" />
                  Start Recording
                </>
              )}
            </Button>
            <Button variant="secondary" size="sm">
              <Maximize className="mr-2 h-4 w-4" />
              Fullscreen
            </Button>
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            1920x1080 @ 60fps | Latency: 45ms
          </p>
        </div>
      </div>
    </Card>
  );
};
