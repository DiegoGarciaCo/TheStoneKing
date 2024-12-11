export default function Process() {
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
          <div className=" md:w-1/2 flex items-center justify-center p-5"></div>
          <div className="md:w-1/2 p-5">
            <h2 className="font-bold text-3xl mb-3">Our Story</h2>
            <p className="text-lg pr-20">
              Relentless Kitchen & Bath was founded in 2016 by Bill Baker, a
              third-generation carpenter whose roots in the remodeling industry
              run deep. Growing up in his grandfather’s remodeling business,
              Bill developed a passion for craftsmanship at a young age, a
              passion that laid the foundation for Relentless Kitchen & Bath.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
