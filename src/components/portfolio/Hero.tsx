
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ImageUpload } from "./ImageUpload";
import { Edit } from "lucide-react";

const Hero = () => {
  const [profileImage, setProfileImage] = useState("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face");
  const [showImageUpload, setShowImageUpload] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <Avatar className="h-32 w-32 mx-auto">
              <AvatarImage src={profileImage} alt="Abdirizak Hassan Farah" />
              <AvatarFallback className="text-2xl">AH</AvatarFallback>
            </Avatar>
            <Button
              variant="outline"
              size="sm"
              className="absolute -bottom-2 -right-2 rounded-full"
              onClick={() => setShowImageUpload(!showImageUpload)}
            >
              <Edit className="w-4 h-4" />
            </Button>
          </div>

          {showImageUpload && (
            <div className="max-w-md mx-auto mb-8 p-4 border rounded-lg bg-background">
              <ImageUpload
                currentImage={profileImage}
                onImageChange={(imageUrl) => {
                  setProfileImage(imageUrl);
                  setShowImageUpload(false);
                }}
              />
            </div>
          )}
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Full Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Python & JavaScript Enthusiast
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building fast, responsive, and scalable web applications
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("#portfolio")}
              className="animate-fade-in"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="animate-fade-in"
            >
              Contact Me
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8">
            Delivering mobile-friendly and API-integrated web solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export { Hero };
