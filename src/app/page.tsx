"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Bed, Calendar, Crown, MessageCircle, Star } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Grand Vista Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury at Grand Vista Hotel"
          description="Indulge in unparalleled comfort and elegance with breathtaking city views, world-class amenities, and exceptional service that exceeds every expectation."
          tag="Luxury Hospitality"
          tagIcon={Star}
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "product"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Vista Hotel luxury lobby with elegant interior design"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Grand Vista"
          description={[
            "For over three decades, Grand Vista Hotel has been the pinnacle of luxury hospitality, offering discerning guests an unforgettable experience in the heart of the city.",
            "Our commitment to excellence is reflected in every detail, from our meticulously designed rooms to our award-winning dining experiences and world-class spa services."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "feature"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Discover the exceptional services and facilities that make Grand Vista Hotel your perfect home away from home."
          tag="Premium Services"
          tagIcon={Crown}
          features={[
            {
              title: "24/7 Concierge Service",
              description: "Our dedicated concierge team is available around the clock to assist with reservations, recommendations, and any special requests to enhance your stay.",
              imageSrc: "https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Professional concierge providing exceptional service"
            },
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind at our award-winning spa featuring premium treatments, steam rooms, and a fully equipped fitness center.",
              imageSrc: "https://images.pexels.com/photos/3757640/pexels-photo-3757640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Serene spa environment with relaxation amenities"
            },
            {
              title: "Fine Dining Experience",
              description: "Savor culinary excellence at our signature restaurants, offering international cuisine crafted by renowned chefs using the finest ingredients.",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant hotel restaurant with fine dining atmosphere"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Luxury Accommodations"
          description="Choose from our carefully curated selection of rooms and suites, each designed to provide the ultimate comfort and sophistication."
          tag="Premium Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe-room",
              name: "Deluxe Room",
              price: "$299/night",
              imageSrc: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Spacious deluxe room with city view"
            },
            {
              id: "executive-suite",
              name: "Executive Suite",
              price: "$599/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxurious executive suite with premium amenities"
            },
            {
              id: "standard-room",
              name: "Standard Room",
              price: "$199/night",
              imageSrc: "https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Comfortable standard room with modern design"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Discover why travelers from around the world choose Grand Vista Hotel for their luxury accommodation needs."
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Executive Director",
              testimonial: "The service at Grand Vista Hotel is absolutely exceptional. From the moment we arrived, every detail was perfectly orchestrated. The rooms are luxurious and the staff goes above and beyond to ensure a memorable stay.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Consultant",
              testimonial: "I've stayed at many luxury hotels worldwide, but Grand Vista truly stands out. The attention to detail, prime location, and world-class amenities make it my top choice for business travel.",
              imageSrc: "https://images.pexels.com/photos/5945326/pexels-photo-5945326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing Manager",
              testimonial: "Our anniversary stay at Grand Vista was absolutely perfect. The spa services were divine, the dining was exceptional, and the room exceeded all our expectations. We'll definitely return.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Investment Banker",
              testimonial: "Grand Vista Hotel sets the gold standard for luxury hospitality. The concierge service is unmatched, and every aspect of the hotel reflects true elegance and sophistication.",
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Thompson"
            },
            {
              id: "5",
              name: "Jennifer Walsh",
              role: "Corporate Executive",
              testimonial: "The seamless blend of modern luxury and personalized service makes Grand Vista Hotel exceptional. From the elegant lobby to the pristine rooms, everything exceeds expectations.",
              imageSrc: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Jennifer Walsh"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          tagIcon={Calendar}
          title="Book Your Luxury Experience"
          description="Ready to experience unparalleled luxury and hospitality? Contact our reservations team to secure your stay at Grand Vista Hotel and create unforgettable memories."
          inputPlaceholder="Enter your email address"
          buttonText="Request Booking"
          termsText="By submitting your information, you agree to receive updates about availability and exclusive offers from Grand Vista Hotel."
          imageSrc="https://images.pexels.com/photos/7821340/pexels-photo-7821340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Vista Hotel elegant reception desk"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Hotel",
              items: [
                {
                  label: "Rooms & Suites",
                  href: "product"
                },
                {
                  label: "Amenities",
                  href: "feature"
                },
                {
                  label: "About Us",
                  href: "about"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Concierge",
                  href: "feature"
                },
                {
                  label: "Spa & Wellness",
                  href: "feature"
                },
                {
                  label: "Fine Dining",
                  href: "feature"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Guest Services",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "contact"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | Grand Vista Hotel"
        />
      </div>
    </ThemeProvider>
  );
}