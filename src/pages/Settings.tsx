import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background tactical-grid-bg">
      <Navigation />
      
      <main className="container mx-auto px-6 py-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Settings</h1>
          <p className="text-muted-foreground">Configure system parameters and preferences</p>
        </div>

        <div className="grid gap-6 max-w-3xl">
          {/* Camera Settings */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Camera Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Night Vision Mode</Label>
                  <p className="text-sm text-muted-foreground">Enable LWIR/MWIR imaging</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto Focus</Label>
                  <p className="text-sm text-muted-foreground">Automatic target focusing</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Detection Range (km)</Label>
                <Input type="number" defaultValue="1.5" step="0.1" />
              </div>
            </div>
          </Card>

          {/* Recording Settings */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Recording Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto Record on Detection</Label>
                  <p className="text-sm text-muted-foreground">Start recording when target detected</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Video Quality</Label>
                <Input type="text" defaultValue="1080p @ 60fps" readOnly />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Storage Location</Label>
                <Input type="text" defaultValue="/recordings/archive" />
              </div>
            </div>
          </Card>

          {/* System Settings */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-6">
            <h2 className="text-xl font-semibold mb-4">System Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Live Feed Streaming</Label>
                  <p className="text-sm text-muted-foreground">Real-time video transmission</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>AR HUD Display</Label>
                  <p className="text-sm text-muted-foreground">Augmented reality overlay</p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>

          <Button className="w-full">Save Settings</Button>
        </div>
      </main>
    </div>
  );
};

export default Settings;
