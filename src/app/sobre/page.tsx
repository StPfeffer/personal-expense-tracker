import { Statistics } from "./statistics";
import Navbar from "@/components/geral/navbar/navbar";

import React from 'react'
import { Team } from "./team";
import Footer from "@/components/geral/footer";

const About = () => {
  return (
    <div className="flex items-center flex-col min-h-screen">
      <Navbar />

      <div className="container">
        <section id="about" className="container py-24 sm:py-32">
          <div className="bg-muted/50 border rounded-lg py-12">
            <div className="px-6 flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="flex flex-col justify-between gap-8">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                    About Us
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground mb-6">
                    Welcome to our company! We are dedicated to providing top-notch
                    services, combining innovation, expertise, and passion. Our mission
                    is to deliver excellent solutions to meet the evolving needs of our
                    clients. With years of experience, we are proud to be a trusted
                    partner for businesses across various industries.
                  </p>

                  <p className="text-lg md:text-xl text-muted-foreground">
                    Our team consists of seasoned professionals who bring their expertise
                    to every project, ensuring that we exceed expectations in every
                    aspect. We value integrity, hard work, and a commitment to
                    excellence, and we strive to create meaningful, long-lasting
                    relationships with all our clients.
                  </p>
                </div>

                <Statistics />
              </div>
            </div>
          </div>

          <Team />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default About;
