import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Plane, Hotel, Car, Shield } from "lucide-react";

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    departureDate: "",
    returnDate: "",
    travelers: "1",
    flightClass: "",
    includeHotel: false,
    includeCar: false,
    includeInsurance: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request submitted! We'll contact you shortly with options.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      destination: "",
      departureDate: "",
      returnDate: "",
      travelers: "1",
      flightClass: "",
      includeHotel: false,
      includeCar: false,
      includeInsurance: false,
    });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Book Your Journey</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let us handle your travel arrangements. We'll find the best options for your trip.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Travel Booking Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>

                  {/* Travel Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Travel Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <Label htmlFor="destination">Destination *</Label>
                        <Input
                          id="destination"
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          placeholder="Where would you like to go?"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="departureDate">Departure Date *</Label>
                        <Input
                          id="departureDate"
                          type="date"
                          value={formData.departureDate}
                          onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="returnDate">Return Date *</Label>
                        <Input
                          id="returnDate"
                          type="date"
                          value={formData.returnDate}
                          onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="travelers">Number of Travelers *</Label>
                        <Select
                          value={formData.travelers}
                          onValueChange={(value) => setFormData({ ...formData, travelers: value })}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select travelers" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? "Traveler" : "Travelers"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="flightClass">Flight Class *</Label>
                        <Select
                          value={formData.flightClass}
                          onValueChange={(value) => setFormData({ ...formData, flightClass: value })}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="economy">Economy</SelectItem>
                            <SelectItem value="premium">Premium Economy</SelectItem>
                            <SelectItem value="business">Business Class</SelectItem>
                            <SelectItem value="first">First Class</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Additional Services</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <Checkbox
                          id="includeHotel"
                          checked={formData.includeHotel}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, includeHotel: checked as boolean })
                          }
                        />
                        <Label htmlFor="includeHotel" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Hotel className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Hotel Accommodation</div>
                            <div className="text-sm text-muted-foreground">We'll find the best hotels for your stay</div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <Checkbox
                          id="includeCar"
                          checked={formData.includeCar}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, includeCar: checked as boolean })
                          }
                        />
                        <Label htmlFor="includeCar" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Car className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Car Rental</div>
                            <div className="text-sm text-muted-foreground">Convenient transportation at your destination</div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <Checkbox
                          id="includeInsurance"
                          checked={formData.includeInsurance}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, includeInsurance: checked as boolean })
                          }
                        />
                        <Label htmlFor="includeInsurance" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Shield className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">Travel Insurance</div>
                            <div className="text-sm text-muted-foreground">Comprehensive coverage for peace of mind</div>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Plane className="mr-2 h-5 w-5" />
                    Submit Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
