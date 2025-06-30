
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Custom Web Development",
      description: "Full-stack web applications built with modern technologies like React, Flask, and Django. Scalable, secure, and optimized for performance.",
      icon: "🌐"
    },
    {
      title: "API Integration & Backend Systems",
      description: "RESTful APIs, database design, authentication systems, and third-party service integrations to power your applications.",
      icon: "⚙️"
    },
    {
      title: "Responsive Frontend UI Design",
      description: "Mobile-first, responsive user interfaces that provide excellent user experience across all devices and screen sizes.",
      icon: "📱"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Offer</h2>
          <p className="text-lg text-muted-foreground">
            Professional development services to bring your digital ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-left">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Services };
