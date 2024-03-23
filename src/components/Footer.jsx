import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authAtom } from "../store/atoms/auth";
import { sidebarAtom } from "../store/atoms/sidebarAtom";

export default function Footer() {
  const isAuthenticated = useRecoilValue(authAtom); 
  const isSidebarOpen = useRecoilValue(sidebarAtom); 

  const footerClasses = `bg-[#fbfff5] shadow-lg border-t-2 border-gray-200 rounded-t-lg text-sm md:text-base font-medium ${
    isAuthenticated ? (isSidebarOpen ? "ml-56 mr-4" : "lg:ml-32 mr-8") : "mx-4"
  }`;

  return (
    <footer className={footerClasses}>
      <div className="container max-w-6xl px-4 py-4 mx-auto flex flex-wrap justify-between items-center">
        <div className="flex flex-col md:flex-row justify-around w-full md:w-auto">
          <ul className="flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6 lg:space-x-12">
            <li>
              <Link className="font-normal text-gray-600 hover:text-gray-800 transition-colors duration-200" to="#">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="font-normal text-gray-600 hover:text-gray-800 transition-colors duration-200" to="#">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link className="font-normal text-gray-600 hover:text-gray-800 transition-colors duration-200" to="#">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto mt-8 md:mt-0">
          <p className="text-center md:text-right text-gray-600">
            © 2024 VersionVaultHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
