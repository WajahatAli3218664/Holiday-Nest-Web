import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormState>({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const statusRef = useRef<HTMLDivElement | null>(null);

  // Vite env var - set VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/yourid
  const formspreeEndpoint = (import.meta as any).env?.VITE_FORMSPREE_ENDPOINT;

  const validate = (data: FormState) => {
    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) return false;
    // basic email check
    if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(data.email)) return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate(formData)) {
      toast.error("Please fill all fields with a valid email.");
      setStatusMessage("Please fill all fields with a valid email.");
      statusRef.current?.focus();
      return;
    }

    setIsSubmitting(true);

    // If a Formspree endpoint is configured, POST to it.
    if (formspreeEndpoint) {
      try {
        const res = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message }),
        });

        if (res.ok) {
          toast.success("Message sent successfully! We'll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
          setStatusMessage("Message sent successfully! We'll get back to you soon.");
        } else {
          const text = await res.text();
          console.error("Formspree error:", text);
          setStatusMessage("Failed to send message. Please try again or email us directly.");
        }
      } catch (err) {
        console.error(err);
        toast.error("Network error sending message. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }

      return;
    }

    // Fallback: open mail client using mailto
    try {
      const subject = encodeURIComponent(`Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
  window.location.href = `mailto:support@holidaynest.com?subject=${subject}&body=${body}`;
  toast.success("Opened mail client. If nothing happened, please email support@holidaynest.com");
  setFormData({ name: "", email: "", message: "" });
          setStatusMessage("Opened mail client. If nothing happened, please email support@holidaynest.com");
    } catch (err) {
      console.error(err);
  toast.error("Unable to open mail client. Please email support@holidaynest.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "24/7 Phone Support",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      description: "Available round-the-clock for urgent visa queries",
    },
    {
      icon: Mail,
      title: "Email Support",
  details: "support@holidaynest.com",
  link: "mailto:support@holidaynest.com",
      description: "Typically respond within 2 hours during business days",
    },
    {
      icon: MapPin,
      title: "Main Office",
      details: "123 Travel Street, NY 10001",
      link: "#",
      description: "Visit us Mon-Fri, 9 AM - 6 PM EST",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about visa services? Our expert team is here to help you 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                <a
                  href={info.link}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors block mb-2"
                >
                  {info.details}
                </a>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardContent className="p-8">
            <div ref={statusRef} tabIndex={-1} aria-live="polite" className="sr-only" />
            {statusMessage && (
              <div className="mb-4 p-3 rounded-md bg-green-50 text-green-900 border border-green-200">
                {statusMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help you..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-32"
                />
              </div>
              <Button type="submit" size="lg" className="w-full h-12" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
            <p className="mt-4 text-sm text-muted-foreground">Prefer to email directly? <a className="text-primary font-medium" href="mailto:support@holidaynest.com">support@holidaynest.com</a></p>
            {formspreeEndpoint ? (
              <p className="mt-2 text-xs text-muted-foreground">Formspree endpoint configured.</p>
            ) : (
              <p className="mt-2 text-xs text-muted-foreground">No form endpoint configured — will open the default mail client as a fallback.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
