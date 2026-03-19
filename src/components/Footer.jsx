import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const links = [
  { href: "https://www.instagram.com/_dunaman", icon: <FaInstagram /> },
  { href: "https://github.com/Dunaman10", icon: <FaGithub /> },
  {
    href: "https://www.linkedin.com/in/syarif-h-0b5069236/",
    icon: <FaLinkedin />,
  },
];

const Footer = () => {
  return (
    <>
      <footer className="w-screen bg-black py-8 text-blue-50">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-12 md:flex-row">
          <p className="text-center text-sm md:text-left">
            &copy; Syarif 2026. All rights reserved
          </p>

          <div className="flex justify-center gap-4 md:justify-start">
            {links.map((link) => (
              <a
                href={link.href}
                key={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-50 transition-colors duration-500 ease-in-out hover:text-violet-300"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <a
            href="#privacy-policy"
            className="text-center text-sm hover:underline md:text-right"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
