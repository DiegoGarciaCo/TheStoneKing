import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import "@fortawesome/fontawesome-free/css/all.css";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Stone King | Kitchen and Bath Remodeling",
  description:
    "The Stone King offers expert kitchen and bathroom remodeling services across the Chicagoland area. Based in Elgin, IL, we provide custom designs, high-quality installations, and complete renovations to transform your space.",
  openGraph: {
    title: "The Stone King | Kitchen and Bath Remodeling",
    description:
      "The Stone King offers expert kitchen and bathroom remodeling services across the Chicagoland area. Based in Elgin, IL, we provide custom designs, high-quality installations, and complete renovations to transform your space.",
    type: "website",
    locale: "en_us",
    url: "https://thestonekingllc.com/",
    siteName: "The Stone King",
  },
};

export default function Home() {
  return (
    <main>
      <section
        className="relative flex flex-col md:flex-row gap-8 min-h-screen md:p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/heroImg.png')" }}
      >
        <div className="flex flex-col justify-center items-start md:w-1/2 p-8 rounded-lg shadow-lg text-white mt-16 md:mt-0">
          <h1 className="uppercase text-2xl font-bold md:text-4xl mb-4">
            Transform Your Space with Expert Kitchen & Bath Design Services
          </h1>
          <p className="leading-7 mb-6 text-lg">
            At The Stone King, we specialize in creating stunning, functional
            spaces that elevate your home’s style and comfort. Whether you're
            renovating your kitchen, bath, or basement, our team is here to make
            your vision a reality.
          </p>
          <Button
            buttonStyle="btn-primary"
            buttonSize="btn-md"
            type="button"
            text={<Link href="/contact">Get in Touch</Link>}
          />
        </div>
        <div className="flex justify-center items-center md:w-1/2 w-full p-8">
          <div className="md:w-2/3 w-full rounded-lg shadow-lg p-6 ">
            <ContactForm
              className="flex flex-col justify-start items-start text-white"
              inputClass="w-full p-3 mb-4 border border-slate-300 rounded bg-transparent"
              messageClass="w-full p-3 mb-4 border border-slate-300 rounded h-32 bg-transparent"
            />
          </div>
        </div>
      </section>
      <section className="relative flex w-full min-h-[125vh]">
        <div className="min-h-screen w-1/3 hidden md:block"></div>
        <div className="md:flex flex-col gap-4 w-1/3 absolute top-1/4 left-[10%] z-10 bg-white p-8 hidden">
          <h2 className="text-4xl font-bold">
            Beautiful Designs for Every Room in Your Home
          </h2>
          <p className="text-lg">
            From outdated kitchens to tired bathrooms, we help you revamp your
            spaces with creative, practical solutions. Our team of designers and
            craftsmen ensure every detail is just right.
          </p>
        </div>
        <div
          className="relative flex items-center justify-center bg-cover bg-center min-h-screen md:w-2/3 w-full p-8"
          style={{ backgroundImage: "url('/ImageTwo.webp')" }}
        >
          <div className="flex flex-col gap-4 h-2/3 bg-white p-8 md:hidden bg-opacity-50">
            <h2 className="md:text-4xl text-3xl font-bold">
              Beautiful Designs for Every Room in Your Home
            </h2>
            <p className="text-lg">
              From outdated kitchens to tired bathrooms, we help you revamp your
              spaces with creative, practical solutions. Our team of designers
              and craftsmen ensure every detail is just right.
            </p>
          </div>
        </div>
      </section>
      <section className="relative flex w-full min-h-[125vh]">
        <div className="md:flex flex-col gap-4 w-1/3 absolute top-1/4 right-[10%] z-10 bg-white p-8 hidden">
          <h2 className="text-4xl font-bold">
            Revamp Your Home Without Starting from Scratch
          </h2>
          <p className="text-lg">
            You don’t need a brand-new home to enjoy a fresh, modern aesthetic.
            Whether it's your kitchen, bath, or basement, we offer expert
            remodeling solutions that breathe new life into your home.
          </p>
        </div>
        <div
          className="relative flex items-center justify-center bg-cover bg-center min-h-screen md:w-2/3 w-full p-8"
          style={{ backgroundImage: "url('/ImageOne.webp')" }}
        >
          <div className="flex flex-col gap-4 h-2/3 bg-white p-8 md:hidden bg-opacity-50">
            <h2 className="text-3xl font-bold">
              Revamp Your Home Without Starting from Scratch
            </h2>
            <p className="text-lg">
              You don’t need a brand-new home to enjoy a fresh, modern
              aesthetic. Whether it's your kitchen, bath, or basement, we offer
              expert remodeling solutions that breathe new life into your home.
            </p>
          </div>
        </div>
        <div className="min-h-screen w-1/3 hidden md:block"></div>
      </section>
      <section className="flex flex-col md:flex-row min-h-screen md:p-16 md:px-32 overflow-hidden">
        <div className="md:w-1/2 flex flex-col items-start justify-start p-5">
          <h2 className="font-bold text-2xl md:text-4xl capitalize">
            Our Simple Process for Your Dream Remodel
          </h2>
          <p className="text-lg my-4">
            At The Stone King, we strive to make your remodeling experience
            seamless and enjoyable. From the initial consultation to the final
            touches, here’s how we work:
          </p>
          <Button
            buttonStyle="btn-primary"
            buttonSize="btn-md"
            type="button"
            text={<Link href="/contact">Contact Us</Link>}
          />
        </div>
        <div className="md:w-1/2">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 w-full text-center h-full p-5">
            <div className="col-span-1 text-start">
              <h3 className="font-bold text-xl mt-4">Step One: Contact Us</h3>
              <p>
                Fill out our inquiry form or give us a call to schedule a
                consultationl.
              </p>
            </div>
            <div className="col-span-1 text-start">
              <h3 className="font-bold text-xl mt-4">
                Step Two: In Home Consultation
              </h3>
              <p>
                Our expert design team visits your home to take measurements and
                discuss your ideas for transforming your space.
              </p>
            </div>
            <div className="col-span-1 text-start">
              <h3 className="font-bold text-xl mt-4">
                Step Three: Recieve a Custom Design
              </h3>
              <p className="text-sm">
                Receive a personalized 3D & CAD design based on your vision and
                our expert suggestions.
              </p>
            </div>
            <div className="col-span-1 text-start">
              <h3 className="font-bold text-xl mt-4">
                Step Four: Bring Your Vision To Life
              </h3>
              <p>
                Once you approve the design, we’ll begin the remodeling process.
                If you choose to move forward, your design fee is credited
                toward your project.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row min-h-screen p-8 bg-black bg-opacity-95 text-white overflow-hidden">
        <div className="md:w-1/2 flex items-center justify-center">
          <ContactForm
            className="flex flex-col justify-start items-start text-white md:w-2/3"
            inputClass="w-full p-3 mb-4 border border-slate-300 rounded bg-transparent"
            messageClass="w-full p-3 mb-4 border border-slate-300 rounded h-32 bg-transparent"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-center font-bold text-3xl p-5">
            Still Have a Question? Let's Talk!
          </h2>
          <p className=" text-center text-lg md:mb-7">
            Whether you’re ready to get started or need more information, we’re
            here to help. Reach out to us today!
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 w-full text-center h-full">
            <div className="col-span-1 text-start">
              <p>
                <i className="fas fa-phone-alt text-5xl"></i>
              </p>
              <h3 className="font-bold text-xl mt-4">Call or Text</h3>
              <p>847-275-9733</p>
            </div>
            <div className="col-span-1 text-start">
              <p>
                <i className="fas fa-envelope text-5xl"></i>
              </p>
              <h3 className="font-bold text-xl mt-4">Email</h3>
              <p>bernap_306@thestonekingllc.com</p>
            </div>
            {/* <div className="col-span-1 text-start">
              <p>
                <i className="fas fa-map-marker-alt text-5xl"></i>
              </p>
              <h3 className="font-bold text-xl mt-4">Visit Us</h3>
              <p className="text-sm">1234 Stone King Lane</p>
              <p className="text-sm">Stoneville, ST 12345</p>
            </div> */}
            <div className="col-span-1 text-start">
              <p>
                <i className="fas fa-clock text-5xl"></i>
              </p>
              <h3 className="font-bold text-xl mt-4">Hours of Operation</h3>
              <p>Mon – Sat: 8 am – 6 pm</p>
              <p className="text-sm">Sun: Closed</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
