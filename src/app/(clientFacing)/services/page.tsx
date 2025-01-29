import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Stone King | Remodeling Services",
  description:
    "The Stone King offers expert kitchen and bathroom remodeling services across the Chicagoland area. Based in Elgin, IL, we provide custom designs, high-quality installations, and complete renovations to transform your space.",
  openGraph: {
    title: "The Stone King | Remodeling Services",
    description:
      "The Stone King offers expert kitchen and bathroom remodeling services across the Chicagoland area. Based in Elgin, IL, we provide custom designs, high-quality installations, and complete renovations to transform your space.",
    type: "website",
    locale: "en_us",
    url: "https://thestonekingllc.com/services",
    siteName: "The Stone King",
  },
};

export default function Services() {
  return (
    <main>
      <section
        className="flex justify-center items-center w-full h-[80vh] p-5"
        style={{
          backgroundImage: "url('/finishedBasement.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="md:w-1/2 text-center">
          <h2 className="capitalize text-3xl md:text-5xl font-bold mb-5 md:text-center text-left">
            Transform Your Home, Transform Your Life
          </h2>
          <p className="leading-7 text-left md:text-center font-bold">
            At The Stone King, we believe that your home is more than just a
            place to live—it’s where memories are made, dreams come to life, and
            families grow. Whether it’s a kitchen, bathroom, or basement
            remodel, we are dedicated to creating spaces that inspire, elevate,
            and bring joy into your everyday life. Let us help you turn your
            vision into reality and make your home the place you’ve always
            imagined.
          </p>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center p-5">
          <div className="md:w-1/2 text-center">
            <h2 className="capitalize text-2xl md:text-4xl font-bold mb-5 md:text-center text-left">
              Transforming Your Home into Your Dream Space
            </h2>
            <p className="text-lg mb-8 md:text-center text-left">
              At The Stone King, we don’t just renovate—we create spaces that
              reflect who you are. Whether it’s your kitchen, bathroom, or
              basement, every project we undertake is a journey to bring your
              vision to life. Our expertise is rooted in attention to detail, a
              passion for craftsmanship, and a commitment to turning your house
              into a home that tells your story. We specialize in:
            </p>
          </div>
        </div>
      </section>
      <section className="md:hidden">
        <div className="flex flex-col mt-8 p-5">
          <div className="mt-5 md:px-2">
            <h3 className="text-lg font-bold">
              Heart of the Home: Your Dream Kitchen
            </h3>
            <p className="my-4">
              The kitchen is more than just a place to cook—it's where families
              come together, where memories are made, and where creativity
              flows. At The Stone King, we believe that a kitchen should be as
              functional as it is beautiful. Whether you need more space, better
              organization, or a complete redesign, we’re here to craft a
              kitchen that fits your lifestyle and your vision. We’ll transform
              it into the heart of your home—a place where you’ll love to spend
              time.
            </p>
          </div>
          <Image
            src="/servicesOne.webp"
            alt="kitchen"
            width={2560}
            height={1707}
          />
          <div className="mt-5 md:px-2">
            <h3 className="text-lg font-bold">
              Your Sanctuary: A Bathroom That Soothes and Inspires
            </h3>
            <p className="my-4">
              The bathroom is your personal retreat, the place where you start
              and end your day. At The Stone King, we believe your bathroom
              should be a sanctuary—a space that offers both relaxation and
              rejuvenation. From elegant modern designs to cozy, traditional
              styles, we bring your dream bathroom to life with thoughtful
              designs and high-quality finishes. Let us create a space where you
              can unwind and recharge.
            </p>
          </div>
          <Image
            src="/servicesThree.webp"
            alt="remodeled bathroom"
            width={2560}
            height={1707}
          />
          <div className="mt-5 md:px-2">
            <h3 className="text-lg font-bold">
              Unleash Your Home's Potential: Finished Basements That Wow
            </h3>
            <p className="my-4">
              Your basement is more than just extra storage space—it’s an
              untapped resource for your home. Whether you envision a home
              theater, a guest suite, or a cozy family lounge, The Stone King
              can turn your basement into a functional, beautiful space that
              adds value to your home. With creative designs and expert
              craftsmanship, we’ll help you make the most of your basement,
              turning it into an area you’ll want to spend time in.
            </p>
          </div>
          <Image
            src="/finishedBasement.webp"
            alt="kitchen"
            width={2560}
            height={1706}
          />
        </div>
      </section>
      <section className="h-auto hidden md:flex p-5 mt-12">
        <div className="w-1/2">
          <h6>Kitchen Remodels</h6>
          <h2 className="text-4xl">Heart of the Home: Your Dream Kitchen</h2>
          <p className="text-lg pr-8">
            The kitchen is more than just a place to cook—it's where families
            come together, where memories are made, and where creativity flows.
            At The Stone King, we believe that a kitchen should be as functional
            as it is beautiful. Whether you need more space, better
            organization, or a complete redesign, we’re here to craft a kitchen
            that fits your lifestyle and your vision. We’ll transform it into
            the heart of your home—a place where you’ll love to spend time.
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image
            src="/servicesOne.webp"
            alt="kitchen"
            width={2560}
            height={1707}
          />
        </div>
      </section>
      <section className="md:flex p-5 h-atuo hidden">
        <div className="w-1/2">
          <Image
            src="/servicesThree.webp"
            alt="remodeled bathroom"
            width={2560}
            height={1707}
          />
        </div>
        <div className="w-1/2 pl-8">
          <h6>Bathroom Remodels</h6>
          <h2 className="text-4xl">
            Your Sanctuary: A Bathroom That Soothes and Inspires
          </h2>
          <p className="text-lg">
            The bathroom is your personal retreat, the place where you start and
            end your day. At The Stone King, we believe your bathroom should be
            a sanctuary—a space that offers both relaxation and rejuvenation.
            From elegant modern designs to cozy, traditional styles, we bring
            your dream bathroom to life with thoughtful designs and high-quality
            finishes. Let us create a space where you can unwind and recharge.
          </p>
        </div>
      </section>
      <section className="h-auto hidden md:flex p-5">
        <div className="w-1/2">
          <h6>Basement Finishing</h6>
          <h2 className="text-4xl">
            Unleash Your Home's Potential: Finished Basements That Wow
          </h2>
          <p className="text-lg pr-8">
            Your basement is more than just extra storage space—it’s an untapped
            resource for your home. Whether you envision a home theater, a guest
            suite, or a cozy family lounge, The Stone King can turn your
            basement into a functional, beautiful space that adds value to your
            home. With creative designs and expert craftsmanship, we’ll help you
            make the most of your basement, turning it into an area you’ll want
            to spend time in.
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image
            src="/finishedBasement.webp"
            alt="kitchen"
            width={2560}
            height={1706}
          />
        </div>
      </section>
      <section className="md:grid hidden grid-cols-12 h-auto p-5">
        <div className="col-span-12 row-span-2 flex justify-center items-center flex-col mt-12">
          <h2 className="text-4xl">
            Why Choose The Stone King? Because Your Home Deserves the Best
          </h2>
          <p className="text-center text-lg px-12 py-5 mb-5">
            At The Stone King, we don’t just remodel spaces—we create lasting
            transformations. We understand that the decision to remodel your
            home is a big one, and we’re here to make it easy and stress-free.
            From start to finish, we’ll work with you every step of the way to
            ensure your vision becomes a reality. Here’s why our clients trust
            us with their most important projects:
          </p>
        </div>
        <div className="col-span-3 row-span-5 pr-5">
          <h3 className="text-lg font-bold mb-2">Personalized Attention</h3>
          <p>
            We don’t just see your project as a job; we see it as an opportunity
            to bring your unique vision to life. From the first consultation to
            the final reveal, we tailor every detail to your needs, ensuring
            that the end result is a space that feels like it was made just for
            you.
          </p>
        </div>
        <div className="col-span-6 row-span-10">
          <Image
            src="/servicesTwo.webp"
            alt="kitchen"
            width={2560}
            height={1706}
          />
        </div>
        <div className="col-span-3 row-span-5 pl-5">
          <h3 className="text-lg font-bold mb-2">Expert Craftsmanship</h3>
          <p>
            Our team consists of highly skilled craftsmen who take pride in
            their work. We use only the best materials and techniques to ensure
            that your remodel not only looks stunning but also stands the test
            of time.
          </p>
        </div>
        <div className="col-span-3 row-span-5 pr-5 mt-8">
          <h3 className="text-lg font-bold mb-2">Stress-Free Process</h3>
          <p>
            We understand the disruption that comes with home renovations.
            That’s why we focus on making the process as smooth as possible,
            ensuring that deadlines are met, budgets are respected, and your
            home is treated with care and respect.
          </p>
        </div>
        <div className="col-span-3 row-span-5 pl-5 mt-8">
          <h3 className="text-lg font-bold mb-2">Quality You Can Trust</h3>
          <p>
            We’re committed to delivering the highest quality results, every
            time. Our work speaks for itself, and we’ve built a reputation for
            exceptional craftsmanship and reliability. When you work with us,
            you’re not just getting a remodel—you’re getting a team that
            genuinely cares about your home.
          </p>
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
            Still Have Questions? We’re Here to Help!
          </h2>
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
