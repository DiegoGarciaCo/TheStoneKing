import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import { Testimonials } from "@/components/Testimonials";
import "@fortawesome/fontawesome-free/css/all.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section
        className="relative flex flex-col md:flex-row gap-8 min-h-screen p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/heroImg.png')" }}
      >
        <div className="flex flex-col justify-center items-start md:w-1/2 p-8 rounded-lg shadow-lg text-white">
          <h1 className="uppercase text-4xl font-bold md:text-6xl mb-4">
            Kitchen & bath design & sales services
          </h1>
          <p className="leading-7 mb-6 text-lg">
            At The Stone King, we specialize in crafting beautiful designs for
            two of the most important rooms in your home – your kitchen and
            bathroom.
          </p>
          <Button
            buttonStyle="btn-primary"
            buttonSize="btn-md"
            type="button"
            text={<Link href="/contact">Contact Us</Link>}
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
            You don’t need a brand-new home to enjoy beautiful interior
            aesthetics.
          </h2>
          <p className="text-lg">
            Your home is your oasis, and staring at outdated furnishings in your
            kitchen or bath every day can get old. At Relentless Kitchen and
            Bath, We deliver professional Design & Sales services to meet the
            needs of your home.
          </p>
        </div>
        <div
          className="relative flex items-center justify-center bg-cover bg-center min-h-screen md:w-2/3 w-full p-8"
          style={{ backgroundImage: "url('/ImageTwo.webp')" }}
        >
          <div className="flex flex-col gap-4 h-2/3 bg-white p-8 md:hidden bg-opacity-50">
            <h2 className="text-4xl font-bold">
              You don’t need a brand-new home to enjoy beautiful interior
              aesthetics.
            </h2>
            <p className="text-lg">
              Your home is your oasis, and staring at outdated furnishings in
              your kitchen or bath every day can get old. At Relentless Kitchen
              and Bath, We deliver professional Design & Sales services to meet
              the needs of your home.
            </p>
          </div>
        </div>
      </section>
      <section className="relative flex w-full min-h-[125vh]">
        <div className="md:flex flex-col gap-4 w-1/3 absolute top-1/4 right-[10%] z-10 bg-white p-8 hidden">
          <h2 className="text-4xl font-bold">
            You don’t need a brand-new home to enjoy beautiful interior
            aesthetics.
          </h2>
          <p className="text-lg">
            Your home is your oasis, and staring at outdated furnishings in your
            kitchen or bath every day can get old. At Relentless Kitchen and
            Bath, We deliver professional Design & Sales services to meet the
            needs of your home.
          </p>
        </div>
        <div
          className="relative flex items-center justify-center bg-cover bg-center min-h-screen md:w-2/3 w-full p-8"
          style={{ backgroundImage: "url('/ImageOne.webp')" }}
        >
          <div className="flex flex-col gap-4 h-2/3 bg-white p-8 md:hidden bg-opacity-50">
            <h2 className="text-4xl font-bold">
              You don’t need a brand-new home to enjoy beautiful interior
              aesthetics.
            </h2>
            <p className="text-lg">
              Your home is your oasis, and staring at outdated furnishings in
              your kitchen or bath every day can get old. At Relentless Kitchen
              and Bath, We deliver professional Design & Sales services to meet
              the needs of your home.
            </p>
          </div>
        </div>
        <div className="min-h-screen w-1/3 hidden md:block"></div>
      </section>
      <section className="flex flex-col md:flex-row min-h-screen p-16 md:px-32 overflow-hidden">
        <div className="md:w-1/2 flex flex-col items-start justify-start p-5">
          <h2 className="font-bold text-4xl capitalize">
            Our Simple and Efficient Process: Getting to your dream kitchen or
            bath is easier than you think
          </h2>
          <p className="text-lg my-4">
            At The Stone King, we strive to make the process of designing and
            installing your new kitchen or bath as simple and efficient as
            possible.
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
              <h3 className="font-bold text-xl mt-4">Step One</h3>
              <p>
                Fill out our inquiry form or call us to set up an appointment
              </p>
            </div>
            <div className="col-span-1 text-start">
              <h3 className="font-bold text-xl mt-4">Step Two</h3>
              <p>
                One of our experienced design teams will go out to your home to
                get mesurements and discuss your needs and offer suggestions to
                transform your space to your dream home
              </p>
            </div>
            <div className="col-span-1 text-start">
              <h3 className="font-bold text-xl mt-4">Step Three</h3>
              <p className="text-sm">
                Get a 3D & CAD design tailored for you after the measurements!
                Our fee-based service will give you a unique and personalized
                piece that is yours to keep. Use code: RKB49 for $49 flat rate
                design fee.
              </p>
            </div>
            <div className="col-span-1 text-start">
              <h3 className="font-bold text-xl mt-4">Step Four</h3>
              <p>
                Receive a credit on your design fee towards the project when the
                project moves forward. If the project does not move forward the
                designs are yours to keep.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-8">
        <Testimonials />
      </section>
      <section className="flex flex-col md:flex-row min-h-screen p-8 bg-black bg-opacity-95 text-white overflow-hidden">
        <div className="md:w-1/2 flex items-center justify-center">
          <ContactForm
            className="flex flex-col justify-start items-start text-white w-2/3"
            inputClass="w-full p-3 mb-4 border border-slate-300 rounded bg-transparent"
            messageClass="w-full p-3 mb-4 border border-slate-300 rounded h-32 bg-transparent"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-center font-bold text-3xl p-5">
            Still Have a Question?
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 w-full text-center h-full">
            <div className="col-span-1 text-start">
              <p>
                <i className="fas fa-phone-alt text-5xl"></i>
              </p>
              <h3 className="font-bold text-xl mt-4">Call or Text</h3>
              <p>555-555-5555</p>
            </div>
            <div className="col-span-1 text-start">
              <p>
                <i className="fas fa-envelope text-5xl"></i>
              </p>
              <h3 className="font-bold text-xl mt-4">Email</h3>
              <p>Randomemail@thestoneking.com</p>
            </div>
            <div className="col-span-1 text-start">
              <p>
                <i className="fas fa-map-marker-alt text-5xl"></i>
              </p>
              <h3 className="font-bold text-xl mt-4">Visit Us</h3>
              <p className="text-sm">1234 Stone King Lane</p>
              <p className="text-sm">Stoneville, ST 12345</p>
            </div>
            <div className="col-span-1 text-start">
              <p>
                <i className="fas fa-clock text-5xl"></i>
              </p>
              <h3 className="font-bold text-xl mt-4">Hours of Operation</h3>
              <p>Mon – Fri: 8 am – 6 pm</p>
              <p className="text-sm">Sat: 10 am – 4 pm</p>
              <p className="text-sm">Sun: Closed</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
