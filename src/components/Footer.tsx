
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-16 px-6 md:px-12 lg:px-20">
      <div className="container-tight grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="text-xl font-bold mb-4">
            <span className="text-gradient">AutoVR</span>
          </div>
          <p className="text-muted-foreground text-sm mb-6">
            Transforming automotive sales with immersive VR and 3D solutions that drive engagement and results.
          </p>
          <div className="flex space-x-4">
            {["twitter", "linkedin", "facebook", "instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-8 h-8 rounded-full glass-morphism flex items-center justify-center hover:bg-primary/10 transition-colors duration-300"
              >
                <i className={`text-sm text-muted-foreground`}>
                  {social === "twitter" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  )}
                  {social === "linkedin" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  )}
                  {social === "facebook" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  )}
                  {social === "instagram" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  )}
                </i>
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About Us", "Case Studies", "Pricing", "Blog", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Solutions</h4>
          <ul className="space-y-2">
            {["Virtual Showrooms", "3D Configurators", "AR Applications", "Interactive Kiosks", "Analytics Platform"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start">
              <svg className="mr-2 mt-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>123 Innovation Drive, Tech City, CA 94043</span>
            </li>
            <li className="flex items-center">
              <svg className="mr-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>info@autovr.com</span>
            </li>
            <li className="flex items-center">
              <svg className="mr-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>+1 (888) 123-4567</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {currentYear} AutoVR. All rights reserved.
        </p>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors duration-300">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
