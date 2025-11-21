import { Shield, Bell } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Navigation = () => {
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Main Nav */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Shield className="h-7 w-7 text-primary" />
              <span className="text-lg font-bold tracking-tight">NSG</span>
            </div>
            
            <div className="hidden md:flex items-center gap-1">
              <NavLink
                to="/"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
                activeClassName="text-primary bg-accent/50"
              >
                Home
              </NavLink>
              <NavLink
                to="/dashboard"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
                activeClassName="text-primary bg-accent/50"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/system-logs"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
                activeClassName="text-primary bg-accent/50"
              >
                System Logs
              </NavLink>
              <NavLink
                to="/recordings"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
                activeClassName="text-primary bg-accent/50"
              >
                Recordings
              </NavLink>
              <NavLink
                to="/settings"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
                activeClassName="text-primary bg-accent/50"
              >
                Settings
              </NavLink>
            </div>
          </div>

          {/* Right side - Auth and Alerts */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-alert text-alert-foreground text-xs">
                3
              </Badge>
            </Button>
            
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
              <Button variant="default" size="sm">
                Sign Up
              </Button>
              <Button variant="outline" size="sm">
                Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
