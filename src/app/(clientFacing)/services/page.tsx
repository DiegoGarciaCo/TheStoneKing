import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Services() {
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
            <h2 className="capitalize text-4xl font-bold mb-5">What we do</h2>
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
            <h3>Kitchen Remodel</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti at, magnam ipsam molestiae quam deserunt nihil nulla
              suscipit ipsum minima sit. Voluptatum optio quisquam dolores sunt,
              hic ratione enim?
            </p>
          </div>
          <div>
            <h3>Bathroom Remodel</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti at, magnam ipsam molestiae quam deserunt nihil nulla
              suscipit ipsum minima sit. Voluptatum optio quisquam dolores sunt,
              hic ratione enim?
            </p>
          </div>
          <div>
            <h3>Finish Basements</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              corrupti at, magnam ipsam molestiae quam deserunt nihil nulla
              suscipit ipsum minima sit. Voluptatum optio quisquam dolores sunt,
              hic ratione enim?
            </p>
          </div>
        </div>
      </section>
      <section className="h-screen flex p-5 mt-12">
        <div className="w-1/2">
          <h6>Tagline</h6>
          <h2 className="text-4xl">Kitchen Remodels</h2>
          <p className="text-lg pr-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            corrupti at, magnam ipsam molestiae quam deserunt nihil nulla
            suscipit ipsum minima sit. Voluptatum optio quisquam dolores sunt,
            hic ratione enim? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquid possimus praesentium accusamus reiciendis. Quibusdam
            laudantium ipsum veritatis magnam exercitationem perspiciatis, id
            laboriosam sit perferendis officiis, autem labore. Voluptate, velit
            exercitationem!
          </p>
        </div>
        <div className="w-1/2 bg-slate-300">
          <Image src="/kitchen.jpg" alt="kitchen" width={500} height={300} />
        </div>
      </section>
      <section className="flex p-5 h-screen">
        <div className="w-1/2 bg-slate-300">
          <Image src="/kitchen.jpg" alt="kitchen" width={500} height={300} />
        </div>
        <div className="w-1/2 pl-8">
          <h6>Tagline</h6>
          <h2 className="text-4xl">Bathroom Remodels</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            corrupti at, magnam ipsam molestiae quam deserunt nihil nulla
            suscipit ipsum minima sit. Voluptatum optio quisquam dolores sunt,
            hic ratione enim? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquid possimus praesentium accusamus reiciendis. Quibusdam
            laudantium ipsum veritatis magnam exercitationem perspiciatis, id
            laboriosam sit perferendis officiis, autem labore. Voluptate, velit
            exercitationem!
          </p>
        </div>
      </section>
      <section className="h-screen flex p-5">
        <div className="w-1/2">
          <h6>Tagline</h6>
          <h2 className="text-4xl">Finish Basements</h2>
          <p className="text-lg pr-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            corrupti at, magnam ipsam molestiae quam deserunt nihil nulla
            suscipit ipsum minima sit. Voluptatum optio quisquam dolores sunt,
            hic ratione enim? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquid possimus praesentium accusamus reiciendis. Quibusdam
            laudantium ipsum veritatis magnam exercitationem perspiciatis, id
            laboriosam sit perferendis officiis, autem labore. Voluptate, velit
            exercitationem!
          </p>
        </div>
        <div className="w-1/2 bg-slate-300">
          <Image src="/kitchen.jpg" alt="kitchen" width={500} height={300} />
        </div>
      </section>
      <section className="grid grid-cols-12 grid-rows-12 h-screen p-5">
        <div className="col-span-12 row-span-2 flex justify-center items-center flex-col mt-12">
          <h2 className="text-4xl">Why Work With Us?</h2>
          <p className="text-center text-lg px-12 py-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
            laudantium animi. Ad eaque quidem molestiae odit delectus esse
            deleniti nihil reprehenderit quo vel eius tempore, temporibus natus
            ipsum laborum animi?
          </p>
        </div>
        <div className="col-span-3 row-span-5 pr-5">
          <h3>Benefit one</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio
            facere commodi obcaecati? Culpa, modi, et eaque nihil distinctio
            harum excepturi eum voluptas sed amet, beatae facilis officia
            aliquam quisquam?
          </p>
        </div>
        <div className="col-span-6 row-span-10 bg-slate-300">
          <Image src="/kitchen.jpg" alt="kitchen" width={500} height={300} />
        </div>
        <div className="col-span-3 row-span-5 pl-5">
          <h3>Benefit two</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio
            facere commodi obcaecati? Culpa, modi, et eaque nihil distinctio
            harum excepturi eum voluptas sed amet, beatae facilis officia
            aliquam quisquam?
          </p>
        </div>
        <div className="col-span-3 row-span-5 pr-5">
          <h3>Benefit three</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio
            facere commodi obcaecati? Culpa, modi, et eaque nihil distinctio
            harum excepturi eum voluptas sed amet, beatae facilis officia
            aliquam quisquam?
          </p>
        </div>
        <div className="col-span-3 row-span-5 pl-5">
          <h3>Benefit four</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio
            facere commodi obcaecati? Culpa, modi, et eaque nihil distinctio
            harum excepturi eum voluptas sed amet, beatae facilis officia
            aliquam quisquam?
          </p>
        </div>
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
