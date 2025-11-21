import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatusCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  status?: "active" | "warning" | "normal";
  unit?: string;
}

export const StatusCard = ({ title, value, icon: Icon, status = "normal", unit }: StatusCardProps) => {
  const statusColors = {
    active: "text-primary",
    warning: "text-accent",
    normal: "text-foreground"
  };

  const glowClass = status === "active" ? "glow-primary" : status === "warning" ? "glow-accent" : "";

  return (
    <Card className={`p-4 bg-card hover:bg-card/80 transition-all ${glowClass}`}>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className={`text-2xl font-bold font-mono ${statusColors[status]}`}>
            {value}{unit && <span className="text-sm ml-1">{unit}</span>}
          </p>
        </div>
        <Icon className={`h-8 w-8 ${statusColors[status]}`} />
      </div>
    </Card>
  );
};
