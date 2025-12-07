const Footer = () => {
  return (
    <footer id="footer" className="w-full py-4 bg-black text-center">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Subarna Tamang — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
