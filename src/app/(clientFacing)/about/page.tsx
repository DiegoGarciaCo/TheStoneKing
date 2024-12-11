import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <section className="flex justify-center items-center w-full h-screen p-5">
        <div className="md:w-1/2 text-center">
          <h2 className="capitalize text-4xl font-bold mb-5">
            A catchy Heading Here
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            minima tempora expedita eveniet recusandae culpa ut doloremque
            ipsam, vitae optio iure tempore nesciunt nam officia nemo rem dolor,
            aperiam totam!
          </p>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center p-5">
          <div className="md:w-1/2 text-center">
            <h2 className="capitalize text-4xl font-bold mb-5">
              Delivering Exceptional Results is Our Priority
            </h2>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              minima tempora expedita eveniet recusandae culpa ut doloremque
              ipsam, vitae optio iure tempore nesciunt nam officia nemo rem
              dolor, aperiam totam!
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-8">
          <div className=" md:w-1/2 flex items-center justify-center p-5">
            <Image
              src="/heroImg.png"
              alt="hero image"
              width={2560}
              height={1770}
              className="object-cover object-center md:w-2/3"
            />
          </div>
          <div className="md:w-1/2 p-5">
            <h2 className="font-bold text-3xl mb-3">Our Story</h2>
            <p className="text-lg pr-20">
              Relentless Kitchen & Bath was founded in 2016 by Bill Baker, a
              third-generation carpenter whose roots in the remodeling industry
              run deep. Growing up in his grandfather’s remodeling business,
              Bill developed a passion for craftsmanship at a young age, a
              passion that laid the foundation for Relentless Kitchen & Bath.
              Based in Mokena, Illinois, we began with finished carpentry,
              including trim, doors, and millwork. However, as we took on more
              kitchen installations, we discovered our true calling in creating
              stunning, functional spaces that excite our clients. Over time, we
              shifted our focus entirely to kitchen and bathroom remodels,
              helping homeowners bring their visions to life. As a family-owned
              business, we pride ourselves on working closely with each customer
              to provide a personalized experience. Moreover, we believe that
              remodeling is more than just construction—it’s about building
              relationships and creating spaces that reflect our clients’
              visions. Come see the Relentless difference, where design meets
              determination!
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center p-5">
          <div className="md:w-1/2 text-center">
            <h2 className="capitalize text-4xl font-bold mb-5">
              Our Core Values
            </h2>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              minima tempora expedita eveniet recusandae culpa ut doloremque
              ipsam, vitae optio iure tempore nesciunt nam officia nemo rem
              dolor, aperiam totam!
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-8">
          <div className=" md:w-1/2 flex items-center justify-center p-5"></div>
          <div className="md:w-1/3 p-5">
            <h2 className="font-bold text-3xl mb-3"></h2>
            <p className="text-lg"></p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center p-5">
          <div className="md:w-1/2 text-center">
            <h2 className="capitalize text-4xl font-bold mb-5">
              Why Choose Us?
            </h2>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              minima tempora expedita eveniet recusandae culpa ut doloremque
              ipsam, vitae optio iure tempore nesciunt nam officia nemo rem
              dolor, aperiam totam!
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-8 p-5">
          <div>
            <h3>Benefit</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti at, magnam ipsam molestiae quam deserunt nihil nulla
              suscipit ipsum minima sit. Voluptatum optio quisquam dolores sunt,
              hic ratione enim?
            </p>
          </div>
          <div>
            <h3>Benefit</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti at, magnam ipsam molestiae quam deserunt nihil nulla
              suscipit ipsum minima sit. Voluptatum optio quisquam dolores sunt,
              hic ratione enim?
            </p>
          </div>
          <div>
            <h3>Benefit</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti at, magnam ipsam molestiae quam deserunt nihil nulla
              suscipit ipsum minima sit. Voluptatum optio quisquam dolores sunt,
              hic ratione enim?
            </p>
          </div>
        </div>
      </section>
      <section className="w-full h-[50vh] flex justify-center items-center">
        <Button
          buttonStyle="btn-primary"
          buttonSize="btn-md"
          type="button"
          text={<Link href="/contact">Contact</Link>}
        />
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
