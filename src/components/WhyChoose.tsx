import { CheckCircle, Clock, Shield, Globe, HeadphonesIcon, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChoose = () => {
  const features = [
    {
      icon: FileCheck,
      title: "Expert Visa Processing",
      description: "Step-by-step guidance through the entire visa application process with our experienced team. We handle document verification, form filling, and submission tracking to ensure your application is complete and accurate.",
    },
    {
      icon: Globe,
      title: "150+ Destinations",
      description: "Comprehensive travel information and visa services for over 150 countries worldwide. From popular tourist destinations to remote locations, we provide detailed guides on entry requirements, local customs, and travel tips.",
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Expedited visa processing services with real-time application tracking. Our priority service can reduce processing time by up to 50% for urgent travel needs, with regular updates sent directly to your email.",
    },
    {
      icon: Shield,
      title: "Secure & Trusted",
      description: "Bank-level security for your personal documents and data. We are certified by international data protection agencies and have successfully processed over 100,000 visa applications with a 98% approval rate.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock customer support through phone, email, and live chat. Our multilingual support team is available to answer your questions, provide status updates, and assist with any concerns at any time.",
    },
    {
      icon: CheckCircle,
      title: "Success Guarantee",
      description: "98% visa approval rate backed by our expertise and thorough application review process. If your application is rejected due to an error on our part, we'll refund your service fees and help you reapply at no additional cost.",
    },
  ];

  return (
  <section className="relative z-40 pt-24 md:pt-32 pb-20 why-choose-bg scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Holiday Nest?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We make visa applications and travel planning effortless with our comprehensive services and expert support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 bg-white/85 backdrop-blur-sm">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
