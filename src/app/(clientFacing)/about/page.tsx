import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <section
        className="flex justify-center items-center w-full h-[85vh] p-5"
        style={{
          backgroundImage: "url('/carpenters.webp')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="md:w-1/2 text-center text-white">
          <h2 className="capitalize md:text-5xl text-3xl font-bold mb-5">
            Building the Foundations of Your Dream Home
          </h2>
          <p className="leading-7 text-left md:text-center font-bold">
            At The Stone King, we don’t just remodel kitchens and bathrooms—we
            create spaces that elevate your home and lifestyle. Whether it’s a
            custom kitchen, a luxurious bath, or transforming your basement into
            a usable space, our craftsmanship ensures every project is completed
            with the highest standards of quality and care.
          </p>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center p-5">
          <div className="md:w-1/2 text-center">
            <h2 className="capitalize text-2xl md:text-4xl font-bold mb-5">
              Dedicated to Crafting Exceptional Spaces
            </h2>
            <p className="text-lg mb-8 text-left md:text-center">
              Our passion is bringing your vision to life. From the moment you
              contact us to the final touch, we focus on delivering a remodel
              that exceeds expectations. Whether it’s a kitchen update, bathroom
              remodel, or basement finishing, we pride ourselves on attention to
              detail and flawless execution.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-8">
          <div className=" md:w-1/2 flex items-center justify-center p-5">
            <Image
              src="/about.webp"
              alt="hero image"
              width={2560}
              height={1770}
              className="object-cover object-center md:w-2/3"
            />
          </div>
          <div className="md:w-1/2 p-5">
            <h2 className="font-bold text-2xl md:text-3xl mb-3">
              The Stone King Story: A Legacy of Craftsmanship
            </h2>
            <p className="text-lg md:pr-20">
              The Stone King was born from the vision of Bernardo Rodriguez, a
              man whose passion for craftsmanship runs deep—woven into the very
              fabric of his life. From a young age, Bernardo was captivated by
              the art of building. He spent countless hours working with his
              hands, learning the delicate balance of precision and creativity
              from mentors who shaped his path. <br /> Raised in a family where
              hard work and dedication were values passed down through
              generations, Bernardo’s journey into remodeling started as a
              humble one. But it wasn’t just about the work; it was about
              creating something meaningful. With each project, he wasn’t just
              crafting kitchens, bathrooms, or basements—he was building
              relationships, creating spaces where families could make memories,
              laugh, and grow. <br /> In 2016, Bernardo took a leap of faith and
              founded The Stone King, a company built on the belief that
              remodeling isn’t just about transforming a house—it’s about
              transforming lives. From the first consultation to the final
              touches, he pours his heart into every project, ensuring that each
              one tells a story—a story that reflects the dreams and
              personalities of those who live in the spaces he creates. <br />{" "}
              Today, The Stone King stands as a testament to Bernardo’s
              dedication to quality, trust, and the belief that the spaces we
              call home should be as extraordinary as the moments shared within
              them. His journey has been one of passion, perseverance, and a
              relentless pursuit of excellence—a journey that continues with
              every project, every client, and every home that is touched by the
              hands of The Stone King.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center p-5">
          <div className="md:w-1/2 md:text-center">
            <h2 className="capitalize text-2xl md:text-4xl font-bold mt-10 md:mt-0 mb-5">
              The Values That Shape Every Project
            </h2>
            <p className="text-lg mb-8">
              At The Stone King, our work is driven by strong core values:
              honesty, craftsmanship, and a dedication to exceeding client
              expectations. We believe in creating spaces that reflect the
              unique personalities of those who live in them, and our focus on
              quality ensures that every project we take on will stand the test
              of time.
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
            <h2 className="capitalize text-2xl text-left md:text-center md:text-4xl font-bold mb-5">
              Why The Stone King is the Remodeler You Can Trust
            </h2>
            <p className="text-lg mb-8 text-left md:text-center">
              With years of experience in kitchen and bath remodeling, as well
              as basement finishing, The Stone King offers expertise and a
              commitment to excellence that sets us apart. Our team works
              closely with you to bring your vision to life, ensuring the
              remodel is completed with precision and care.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-8 p-5">
          <div className="mt-5 md:px-2">
            <h3 className="text-lg font-bold flex-1">Skilled Craftsmanship</h3>
            <p>
              Decades of combined experience in high-quality home remodeling.
            </p>
          </div>
          <div className="mt-5 md:px-2 flex-1">
            <h3 className="text-lg font-bold">Personalized Design</h3>
            <p>
              We work with you to create spaces that fit your unique needs and
              style.
            </p>
          </div>
          <div className="mt-5 md:px-2 flex-1">
            <h3 className="text-lg font-bold">Dependability</h3>
            <p>
              Projects are completed on time, within budget, and with an
              unwavering commitment to quality.
            </p>
          </div>
          <div className="md:hidden flex flex-col justify-center items-center mt-8">
            <Button
              buttonStyle="btn-primary"
              buttonSize="btn-md"
              type="button"
              text={<Link href="/contact">Contact</Link>}
            />
          </div>
        </div>
      </section>
      <section className="w-full h-[30vh] md:flex hidden justify-center items-center">
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
            className="flex flex-col justify-start items-start text-white md:w-2/3"
            inputClass="w-full p-3 mb-4 border border-slate-300 rounded bg-transparent"
            messageClass="w-full p-3 mb-4 border border-slate-300 rounded h-32 bg-transparent"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-center font-bold text-3xl p-5 mt-5">
            Ready to Start Your Remodel? Let’s Talk!
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
