import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Users,
  ShieldCheck,
  MessageSquare,
  Wrench,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const lifecycle = [
    { name: "OPEN", color: "text-red-500" },
    { name: "ASSIGNED", color: "text-orange-500" },
    { name: "IN_PROGRESS", color: "text-blue-500" },
    { name: "RESOLVED", color: "text-green-500" },
    { name: "CLOSED", color: "text-gray-500" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="ResiTrack logo" className="w-8 h-8" />
            <span className="text-xl sm:text-2xl font-bold tracking-tight">
              ResiTrack
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium hover:text-blue-600 cursor-pointer"
            >
              Features
            </a>
            <a
              href="#workflow"
              className="text-sm font-medium hover:text-blue-600 cursor-pointer"
            >
              Workflow
            </a>
            <a
              href="#roles"
              className="text-sm font-medium hover:text-blue-600 cursor-pointer"
            >
              Roles
            </a>

            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </nav>

          {/* Mobile nav */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-6 mt-10">
                <a href="#features" className="text-lg font-medium">
                  Features
                </a>
                <a href="#workflow" className="text-lg font-medium">
                  Workflow
                </a>
                <a href="#roles" className="text-lg font-medium">
                  Roles
                </a>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden" id="workflow">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-green-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-700">
              Apartment Complaint Management
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Smart Complaint Tracking for Modern Apartments
            </h1>

            <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl">
              ResiTrack helps residents, admins, and maintenance staff manage
              apartment issues with transparency, accountability and real-time
              updates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => navigate("/login")}
              >
                Get Started
              </Button>

              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mt-10 max-w-md">
              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs text-gray-500">Transparency</p>
              </div>

              <div>
                <p className="text-2xl font-bold">Real-time</p>
                <p className="text-xs text-gray-500">Live Updates</p>
              </div>

              <div>
                <p className="text-2xl font-bold">Secure</p>
                <p className="text-xs text-gray-500">JWT Auth</p>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <Card className="shadow-2xl border">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Complaint Lifecycle</h3>

              <div className="space-y-3">
                {lifecycle.map((status) => (
                  <div
                    key={status.name}
                    className="flex items-center justify-between border rounded-lg px-4 py-2 hover:bg-gray-50"
                  >
                    <span className={`text-sm font-medium ${status.color}`}>
                      {status.name}
                    </span>

                    <span className="text-xs text-gray-400">status</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">Powerful Features</h2>

            <p className="text-gray-600 mt-2">
              Everything needed to manage apartment maintenance efficiently.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition ">
              <CardContent className="p-6 text-center ">
                <Users className="mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Role Based Access</h3>
                <p className="text-sm text-gray-600">
                  Separate dashboards for residents, admins and staff.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <MessageSquare className="mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Community Comments</h3>
                <p className="text-sm text-gray-600">
                  Residents can discuss public complaints.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <ShieldCheck className="mx-auto mb-4 text-green-600" />
                <h3 className="font-semibold mb-2">Secure Authentication</h3>
                <p className="text-sm text-gray-600">
                  JWT authentication with refresh tokens.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <Zap className="mx-auto mb-4 text-green-600" />
                <h3 className="font-semibold mb-2">High Performance</h3>
                <p className="text-sm text-gray-600">
                  Redis caching for faster dashboards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="py-20" id="roles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold">Built for Every Role</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Users className="mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Residents</h3>
                <p className="text-sm text-gray-600">
                  Raise complaints and track issue resolution in real time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <ShieldCheck className="mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Administrators</h3>
                <p className="text-sm text-gray-600">
                  Assign staff, prioritize issues and monitor the system.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Wrench className="mb-4 text-green-600" />
                <h3 className="font-semibold mb-2">Maintenance Staff</h3>
                <p className="text-sm text-gray-600">
                  Work on assigned complaints and update progress.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-blue-600 to-green-500 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Bring Transparency to Apartment Maintenance
          </h2>

          <p className="text-blue-100 mb-8">
            Replace WhatsApp complaints and manual registers with a structured
            complaint management system.
          </p>

          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/login")}
          >
            Start Using ResiTrack
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ResiTrack
          </p>

          <div className="flex gap-6 text-sm text-gray-600">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
