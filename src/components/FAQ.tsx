import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      q: "How long does a Schengen visa take?",
      a: "Typical processing is 10-20 business days depending on the country and time of year. We offer expedited services for urgent travel.",
    },
    {
      q: "Can you help with document checks?",
      a: "Yes — we review your documents before submission to reduce the risk of refusal and ensure completeness.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept card payments and bank transfers. For large volume corporate requests we can set up invoicing.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Answers to common questions about visas and our services.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
