import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ImageUpload } from "./ImageUpload";
import { Edit } from "lucide-react";

const Hero = () => {
  const [profileImage, setProfileImage] = useState("https://i.postimg.cc/prnZRGnq/me1.jpg"); // ✅ Updated here
  const [showImageUpload, setShowImageUpload] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary via-purple-600 to-pink-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-purple-600/90 to-pink-500/90"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <div className="relative">
              <Avatar className="h-40 w-40 mx-auto border-4 border-white/30 shadow-2xl backdrop-blur-sm">
                <AvatarImage src={profileImage} alt="Abdirizak Hassan Farah" />
                <AvatarFallback className="text-3xl bg-white/20 text-white font-bold">AH</AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="absolute -bottom-2 -right-2 rounded-full h-10 w-10 bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm"
              onClick={() => setShowImageUpload(!showImageUpload)}
            >
              <Edit className="w-4 h-4" />
            </Button>
          </div>

          {showImageUpload && (
            <div className="max-w-md mx-auto mb-8 p-6 border border-white/20 rounded-xl bg-white/10 backdrop-blur-md">
              <ImageUpload
                currentImage={profileImage}
                onImageChange={(imageUrl) => {
                  setProfileImage(imageUrl);
                  setShowImageUpload(false);
                }}
              />
            </div>
          )}
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6 font-medium">
            Python & JavaScript Enthusiast
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building fast, responsive, and scalable web applications with modern technologies
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("#portfolio")}
              className="bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold"
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg font-semibold"
            >
              Get In Touch
            </Button>
          </div>
          
          <p className="text-sm text-white/70 mt-12 font-medium">
            Delivering mobile-friendly and API-integrated web solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export { Hero };
