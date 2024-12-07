
const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white py-4 w-full fixed bottom-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 sm:flex-row px-4">
        <p className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} Expense Management System. All rights reserved.
        </p>
        <div className="flex gap-4 text-lg">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            Twitter
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
