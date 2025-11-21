import { Navigation } from "@/components/Navigation";
import { CapabilitiesGrid } from "@/components/Dashboard/CapabilitiesGrid";
import { TechnicalSpecs } from "@/components/Dashboard/TechnicalSpecs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Target, Cloud, Moon, Eye, Radio, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background tactical-grid-bg">
      <Navigation />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm p-8 md:p-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <Badge variant="outline" className="border-primary text-primary mb-4">
              <Shield className="h-3 w-3 mr-1" />
              NSG Certified Equipment
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Advanced Weather-Resistant Surveillance System
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-6">
              State-of-the-art surveillance camera designed for NSG operations, featuring unparalleled visibility in extreme weather conditions including fog, haze, dust, and pitch-dark environments. Single-operator portable system with AR compatibility.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-muted-foreground">Day Range: <span className="font-semibold text-foreground">1.5km</span></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-muted-foreground">Night Range: <span className="font-semibold text-foreground">1.0km</span></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-muted-foreground">Weight: <span className="font-semibold text-foreground">&lt;2.5kg</span></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-muted-foreground">Operation: <span className="font-semibold text-foreground">8+ hours</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">All-Weather</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Penetrates fog, haze, and dust with LWIR/MWIR technology for uncompromised visibility in adverse conditions.
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Moon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Night Vision</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Long-wave and medium-wave infrared sensors enable human detection up to 1km in complete darkness.
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Precision Targeting</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Integrated laser rangefinder provides accurate distance measurements up to 2km with ±1m precision.
            </p>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Radio className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Live Streaming</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Real-time video transmission via Wi-Fi 6 and 5G with low-latency feed to command centers and AR displays.
            </p>
          </Card>
        </div>

        {/* Mission Scenarios */}
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
          <h2 className="text-2xl font-bold mb-4">Operational Scenarios</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">01</span>
                </div>
                <h3 className="font-semibold">Urban Surveillance</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Monitor urban environments through fog and smog. Glass penetration capability allows room surveillance through windows in ambient light conditions.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">02</span>
                </div>
                <h3 className="font-semibold">Border Patrol</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Extended detection range in dust storms and desert haze. Man-portable design enables rapid deployment by single operator for perimeter security.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">03</span>
                </div>
                <h3 className="font-semibold">Night Operations</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Thermal and IR fusion technology provides clear target identification in pitch-dark conditions up to 1km range with post-operation recording analysis.
              </p>
            </div>
          </div>
        </Card>

        {/* System Advantages */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <h3 className="text-xl font-bold mb-4">Superior to Standard Equipment</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded bg-success/20">
                  <Eye className="h-4 w-4 text-success" />
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">Enhanced Visibility</p>
                  <p className="text-xs text-muted-foreground">Outperforms standard thermal and IR cameras in fog, haze, and dust conditions that previously rendered surveillance ineffective.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded bg-success/20">
                  <Target className="h-4 w-4 text-success" />
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">Longer Detection Range</p>
                  <p className="text-xs text-muted-foreground">Extended target acquisition up to 1.5km in daylight and 1km at night, providing critical early warning capabilities.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded bg-success/20">
                  <Shield className="h-4 w-4 text-success" />
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">Mission Critical Reliability</p>
                  <p className="text-xs text-muted-foreground">IP67 weather sealing and -20°C to +50°C operating range ensures functionality in all environmental conditions.</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <h3 className="text-xl font-bold mb-4">Operator Advantages</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded bg-primary/20">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">Single Operator Design</p>
                  <p className="text-xs text-muted-foreground">Lightweight (&lt;2.5kg) and ergonomic design allows deployment and operation by a single commando without support crew.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded bg-primary/20">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">AR Display Compatible</p>
                  <p className="text-xs text-muted-foreground">Video output integrates with augmented reality heads-up displays for hands-free operation and tactical awareness.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded bg-primary/20">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm mb-1">Extended Operation Time</p>
                  <p className="text-xs text-muted-foreground">8+ hour battery life with Li-ion power system supports full mission duration without recharge requirements.</p>
                </div>
              </div>
            </div>
          </Card>
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
