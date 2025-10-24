import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { FileText, Download } from "lucide-react";
import { jsPDF } from "jspdf";

const VisaApplication = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    visaType: "",
    travelDate: "",
    purpose: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully! We'll contact you within 24 hours.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      country: "",
      visaType: "",
      travelDate: "",
      purpose: "",
    });
  };

  const downloadChecklist = () => {
    try {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      const margin = 40;
      let y = 60;
      doc.setFontSize(18);
      doc.text('Holiday Nest', margin, y);
      y += 24;
      doc.setFontSize(12);
      doc.setTextColor('#475569');
      doc.text('Visa Application - Required Documents', margin, y);
      y += 28;

      doc.setFontSize(14);
      doc.setTextColor('#0f172a');
      doc.text('Required Documents', margin, y);
      y += 20;

      doc.setFontSize(11);
      doc.setTextColor('#0f172a');
      visaRequirements.forEach((req, idx) => {
        const bullet = `✓`;
        const text = `${req}`;
        // add bullet and text; wrap text if necessary
        const split = doc.splitTextToSize(text, 500);
        doc.text(bullet + ' ' + split[0], margin, y);
        y += 16;
        for (let i = 1; i < split.length; i++) {
          doc.text('   ' + split[i], margin, y);
          y += 14;
        }
        y += 6;
        // add new page if we run out of space
        if (y > 760) {
          doc.addPage();
          y = 60;
        }
      });

      doc.setFontSize(10);
      doc.setTextColor('#475569');
      doc.text(`Generated on ${new Date().toLocaleString()}`, margin, 780);
      doc.save('HolidayNest_Required_Documents.pdf');
    } catch (err) {
      console.error(err);
      toast.error('Failed to generate PDF.');
    }
  };

  const schengenCountries = [
    "Austria", "Belgium", "Czech Republic", "Denmark", "Estonia", "Finland",
    "France", "Germany", "Greece", "Hungary", "Iceland", "Italy", "Latvia",
    "Lithuania", "Luxembourg", "Malta", "Netherlands", "Norway", "Poland",
    "Portugal", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland"
  ];

  const visaRequirements = [
    "Valid passport (minimum 6 months validity)",
    "Two recent passport-sized photographs",
    "Completed visa application form",
    "Travel insurance (minimum €30,000 coverage)",
    "Proof of accommodation (hotel bookings)",
    "Flight itinerary or reservation",
    "Bank statements (last 3 months)",
    "Employment letter or proof of income",
    "Cover letter explaining purpose of visit",
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Visa Application</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start your journey today. Fill out the form below and our visa experts will guide you through the process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Application Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 123-4567"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="country">Destination Country *</Label>
                      <Select
                        value={formData.country}
                        onValueChange={(value) => setFormData({ ...formData, country: value })}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent>
                          {schengenCountries.map((country) => (
                            <SelectItem key={country} value={country.toLowerCase()}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="visaType">Visa Type *</Label>
                        <Select
                          value={formData.visaType}
                          onValueChange={(value) => setFormData({ ...formData, visaType: value })}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select visa type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tourist">Tourist Visa</SelectItem>
                            <SelectItem value="business">Business Visa</SelectItem>
                            <SelectItem value="student">Student Visa</SelectItem>
                            <SelectItem value="work">Work Visa</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="travelDate">Intended Travel Date *</Label>
                        <Input
                          id="travelDate"
                          type="date"
                          value={formData.travelDate}
                          onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="purpose">Purpose of Visit *</Label>
                      <Textarea
                        id="purpose"
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        placeholder="Please describe the purpose of your visit..."
                        required
                        className="mt-2 min-h-32"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              {/* Processing Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Processing Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Standard:</span>
                    <span className="font-semibold">15-20 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Express:</span>
                    <span className="font-semibold">7-10 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service Fee:</span>
                    <span className="font-semibold text-primary">$80</span>
                  </div>
                </CardContent>
              </Card>

              {/* Required Documents */}
              <Card>
                <CardHeader>
                  <CardTitle>Required Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {visaRequirements.map((req, index) => (
                      <li key={index} className="flex gap-2 text-sm">
                        <span className="text-success">✓</span>
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4" onClick={downloadChecklist}>
                    <Download className="mr-2 h-4 w-4" />
                    Download Checklist (PDF)
                  </Button>
                </CardContent>
              </Card>

              {/* Country Flags */}
              <Card>
                <CardHeader>
                  <CardTitle>Popular Destinations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-3xl" title="Germany">🇩🇪</span>
                    <span className="text-3xl" title="France">🇫🇷</span>
                    <span className="text-3xl" title="Italy">🇮🇹</span>
                    <span className="text-3xl" title="Spain">🇪🇸</span>
                    <span className="text-3xl" title="Netherlands">🇳🇱</span>
                    <span className="text-3xl" title="Greece">🇬🇷</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VisaApplication;
