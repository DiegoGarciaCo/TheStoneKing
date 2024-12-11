import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main>
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
