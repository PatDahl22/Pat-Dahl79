import { testimonials } from "@/data/index";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const References = () => {
  return (
    <section className="py-20 px-6 bg-background-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Client References
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients say about working with me and the results we've achieved together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full hover:shadow-lg transition-all duration-300 border-border-light bg-card">
              <CardContent className="p-8 flex flex-col h-full">
                <Quote className="w-4 h-4 text-primary mb-4 flex-shrink-0" />
                
                <blockquote className="text-text-secondary leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} profile picture`}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-border-light"
                  />
                  <div>
                    <cite className="font-semibold text-text-primary not-italic block">
                      {testimonial.name}
                    </cite>
                    <p className="text-sm text-text-secondary">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;