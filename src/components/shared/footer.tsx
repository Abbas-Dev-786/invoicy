import React from "react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="flex flex-col border-t h-full pt-3 gap-2 justify-center items-center px-4 md:px-0">
      <h4>Made with 💖 by Abbas Bhanpura wala</h4>
      <div className="flex items-center justify-center gap-1">
        <Button variant="ghost" size="lg" asChild>
          <a
            href="https://www.linkedin.com/abbas-bhanpura-wala"
            target="_blank"
          >
            <Linkedin />
          </a>
        </Button>
        <Button variant="ghost" size="lg" asChild>
          <a href="https://www.github.com/Abbas-Dev-786" target="_blank">
            <Github />
          </a>
        </Button>
        <Button variant="ghost" size="lg" asChild>
          <a href="https://www.x.com/AbbasDev7" target="_blank">
            <Twitter />
          </a>
        </Button>
        <Button variant="ghost" size="lg" asChild>
          <a
            href="https://www.instagram.com/abbas_bhanpura_wala"
            target="_blank"
          >
            <Instagram />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Footer;
