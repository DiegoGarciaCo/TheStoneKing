import "@fortawesome/fontawesome-free/css/all.css";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-8 relative md:h-[50vh] h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-7">
        <div className="flex flex-col gap-4 md:w-1/3">
          <h3 className="text-2xl font-bold">The Stone King</h3>
          <p className="text-sm">
            At The Stone King, we specialize in crafting beautiful designs for
            two of the most important rooms in your home – your kitchen and
            bathroom.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:w-1/3 md:items-center">
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/eandbstonedesign"
              target="_blank"
              rel="noopener noreferrer"
              className="social facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/the_stonekingllc/"
              target="_blank"
              rel="noopener noreferrer"
              className="social instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          {/* <p className="text-sm">1234 Stone King Lane</p>
          <p className="text-sm">Stoneville, ST 12345</p> */}
          <p className="text-sm flex items-center">Phone: 847-275-9733</p>
          <p>Email: bernap_306@thestonekingllc.com</p>
        </div>
        <div className="flex flex-col gap-4 md:w-1/3">
          <h3 className="text-2xl font-bold">Hours of Operation</h3>
          <p className="text-sm">Mon – Sat: 8 am – 6 pm</p>
          <p className="text-sm">Sun: Closed</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 border-t-2 border-white text-white text-sm text-center p-2 w-full">
        <p>
          &copy; {new Date().getFullYear()} The Stone King. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
