
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm Abdirizak Hassan Farah, a Nairobi-based full stack developer fluent in three languages 
            (English, Kiswahili, Somali). I specialize in developing scalable applications using Flask, 
            Django, JavaScript, and React. I work with startups and small businesses to turn ideas into 
            polished digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">Moringa School</h4>
                  <p className="text-muted-foreground">Full Stack Bootcamp</p>
                  <p className="text-sm text-muted-foreground">Feb 2025 - Jun 2025</p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <h4 className="font-medium">High School Graduate</h4>
                  <p className="text-sm text-muted-foreground">Nov 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="text-muted-foreground">Fluent</span>
                </div>
                <div className="flex justify-between">
                  <span>Kiswahili</span>
                  <span className="text-muted-foreground">Fluent</span>
                </div>
                <div className="flex justify-between">
                  <span>Somali</span>
                  <span className="text-muted-foreground">Native</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { About };
