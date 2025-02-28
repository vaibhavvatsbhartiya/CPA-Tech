'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
// import { getSession } from "next-auth/react";
// import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  // useEffect(() => {
  //   getSession().then(session => {
  //     if (session) {
  //       router.push("/dashboard");
  //     }
  //   });
  // }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Hero Section */}
      <section className="py-12">
        <h1 className="text-4xl font-bold">Manage Your Finances Smarter</h1>
        <p className="mt-4 text-lg text-gray-600">Track expenses, manage budgets, and gain insights—all in one place.</p>
        <Button className="mt-6" onClick={() => router.push("/login")}>Get Started</Button>
      </section>

      {/* Feature Carousel */}
      <Carousel className="w-full max-w-3xl mt-12">
        <CarouselContent>
          <CarouselItem><Card className="p-6">Real-time Expense Tracking</Card></CarouselItem>
          <CarouselItem><Card className="p-6">AI-driven Insights</Card></CarouselItem>
          <CarouselItem><Card className="p-6">Secure User Authentication</Card></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Key Features */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
        <Card className="p-6">Automated Budgeting <Badge>New</Badge></Card>
        <Card className="p-6">Instant Notifications <Badge>Secure</Badge></Card>
        <Card className="p-6">Custom Reports <Badge>Real-time</Badge></Card>
      </div>

      {/* FAQ Section */}
      <Accordion type="single" collapsible className="mt-12 max-w-3xl">
        <AccordionItem value="q1">
          <AccordionTrigger>How secure is my financial data?</AccordionTrigger>
          <AccordionContent>We use end-to-end encryption to protect your data.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger>Is there a free plan available?</AccordionTrigger>
          <AccordionContent>Yes! You can start with our free basic plan.</AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Mobile Menu */}
      {/* <Sheet>
        <SheetTrigger asChild>
          <Button className="mt-6">Menu</Button>
        </SheetTrigger>
        <SheetContent>
          <p className="text-lg font-bold">Navigation</p>
          <ul className="mt-4 space-y-2">
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </SheetContent>
      </Sheet> */}
    </div>
  );
}
