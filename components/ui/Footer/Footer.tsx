const Footer = () => {
  return (
    <>
      <footer className="bg-gray-400 pt-1">
        <div className="container mx-auto px-6">
          <div className="mt-5 flex flex-col items-center">
            <div className="py-6">
              <p className="mb-6 text-sm text-primary-2 font-bold text-white">
                © {new Date().getFullYear()} Eincode
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
