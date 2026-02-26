import { Linkedin, Twitter, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold font-display text-gradient-blue">CivicGuard</h3>
          <p className="text-muted-foreground text-sm mt-1">Citizen-Powered Compliance</p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-muted-foreground">Founded by <span className="text-foreground font-semibold">Sahil Ramteke</span></p>
          <p className="text-xs text-muted-foreground mt-1">sahilramteke001@gmail.com 
























































































































































































































          </p>
        </div>

        <div className="flex gap-3">
          {[Linkedin, Twitter, Mail].map((Icon, i) => <a key={i} href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors group">
              <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>)}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} CivicGuard. All rights reserved.
        </p>
      </div>
    </footer>);};export default FooterSection;