const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-600 text-white text-center p-4">
      <p className="text-sm md:text-base">
        © {year} All rights reserved by{" "}
        <span className="font-semibold">Rishabh Tiwari</span>
      </p>
    </footer>
  );
};

export default Footer;
