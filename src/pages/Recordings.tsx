import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Download, Trash2, Video } from "lucide-react";

const Recordings = () => {
  const recordings = [
    { id: "REC-2847", date: "2024-01-15", duration: "2:45:30", size: "1.2 GB", status: "complete" },
    { id: "REC-2846", date: "2024-01-15", duration: "1:30:15", size: "820 MB", status: "complete" },
    { id: "REC-2845", date: "2024-01-14", duration: "3:15:45", size: "1.8 GB", status: "complete" },
    { id: "REC-2844", date: "2024-01-14", duration: "0:45:22", size: "410 MB", status: "processing" },
  ];

  return (
    <div className="min-h-screen bg-background tactical-grid-bg">
      <Navigation />
      
      <main className="container mx-auto px-6 py-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Recordings Archive</h1>
            <p className="text-muted-foreground">Post-operation video analysis and storage</p>
          </div>
          <Badge variant="outline" className="border-primary text-primary">
            {recordings.length} Recordings
          </Badge>
        </div>

        <div className="grid gap-4">
          {recordings.map((recording) => (
            <Card key={recording.id} className="border-border/50 bg-card/50 backdrop-blur-sm p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-lg bg-background/50 border border-border/30 flex items-center justify-center">
                    <Video className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-lg font-mono">{recording.id}</h3>
                      <Badge variant="outline" className={
                        recording.status === 'complete' 
                          ? 'border-success text-success'
                          : 'border-warning text-warning'
                      }>
                        {recording.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{recording.date}</span>
                      <span>•</span>
                      <span>{recording.duration}</span>
                      <span>•</span>
                      <span>{recording.size}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Play className="h-4 w-4 mr-2" />
                    Play
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm" className="border-alert/50 text-alert hover:bg-alert/10">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Recordings;
