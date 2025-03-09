"use client";

import { ContactForm } from "./contact-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const Contact = () => {

  return (
    <section id="contact" className="text-white body-font relative">
      <div className="absolute inset-0 bg-gray-900">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.627702740846!2d144.75232597646183!3d-37.77532687198529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad660988bebcef5%3A0xba2b8863901c62d9!2sMOTORPOINT%20(Western%20Auto%20Services)!5e0!3m2!1sen!2sin!4v1741014487891!5m2!1sen!2sin"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.8)" }}
        ></iframe>
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-6 px-5 py-24 flex">
        <Card className="lg:w-1/3 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <CardTitle className="text-2xl font-semibold title-font mb-5">
            Let us contact you
          </CardTitle>
          <CardDescription>
            Get in touch with us for any inquiries about our services or to book
            a rental.
          </CardDescription>
          <CardContent className="p-0">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
