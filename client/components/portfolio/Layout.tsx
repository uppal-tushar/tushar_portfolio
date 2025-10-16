import { PropsWithChildren } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";
import { resume } from "@/data/resume";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
  >
    {children}
  </a>
);

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--primary)_/_0.12)] via-[hsl(var(--accent)_/_0.08)] to-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between"></div>
      </header>
      <main className="">{children ?? <Outlet />}</main>
      <footer className="border-t">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Tushar Uppal</p>
          <p className="text-center">
            Robotics • Systems Support • Integration
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
