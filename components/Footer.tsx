import React from "react";

const Footer = () => {
  return (
    <footer className="p-4  border-t-2 text-center text-slate-500">
      <span className="text-base  ">
        © YossefMohamed™ . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center justify-center mt-3 text-base  ">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
