import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.jpeg" alt="E-Comm Design Hub" className="h-10 w-10 rounded-lg object-cover" />
              <span className="font-heading font-bold text-lg text-foreground">
                E-com<span className="text-primary">designs</span>hub
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Artistry and strategy in every design. Crafting premium digital experiences that drive results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "About", "Services", "Portfolio", "Careers", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              {["Web Development", "UI/UX Design", "SEO Optimization", "Digital Marketing", "Brand Strategy"].map(
                (s) => (
                  <span key={s} className="text-sm text-muted-foreground">
                    {s}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:support@ecomdesignshub.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={14} className="text-primary" />
                support@ecomdesignshub.com
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                <span>98 E Branch RD, Allentown, New Jersey 08501, USA</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/ecom_design_hub?igsh=MXI0Y3NwbnM0NzFzbw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/share/1DVHQF1u71/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 E-ComDesignsHub. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <span key={item} className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
