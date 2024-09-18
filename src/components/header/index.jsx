import { useState } from "react";
import { Button, Navbar, Dropdown } from "flowbite-react";
import Drawer from "../drawer";
import "./style.scss";

const customTheme = {
  root: {
    base: "bg-[#15171B] text-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
  },
};

const index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Drawer isOpen={isOpen} handleClose={handleClose} />
      <header className="bg-[#15171B] fixed w-full shadow-lg z-20">
        <nav className="container">
          <Navbar fluid theme={customTheme} rounded>
            <Navbar.Brand href="https://flowbite-react.com">
              <span className="self-center text-[#87CEEB] whitespace-nowrap text-xl font-semibold dark:text-white">
                CRYPTOFOLIO
              </span>
            </Navbar.Brand>
            <div className="flex gap-12 md:order-2">
              <Dropdown
                className="bg-[#15171B] border-none shadow-sm shadow-gray-500 text-white"
                label="USD"
                inline
              >
                <Dropdown.Item className="bg-[#15171B] text-white focus:bg-gray-900 hover:bg-bl">
                  Dashboard
                </Dropdown.Item>
                <Dropdown.Item className="bg-[#15171B] text-white focus:bg-gray-900 hover:bg-bl">
                  Settings
                </Dropdown.Item>
                <Dropdown.Item className="bg-[#15171B] text-white focus:bg-gray-900 hover:bg-bl">
                  Earnings
                </Dropdown.Item>
                <Dropdown.Item className="bg-[#15171B] text-white focus:bg-gray-900 hover:bg-bl">
                  Sign out
                </Dropdown.Item>
              </Dropdown>
              <Button
                className="text-black bg-[#87CEEB] hover:bg-[#87CEEB] focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                WATCH LIST
              </Button>
              <Navbar.Toggle />
            </div>
          </Navbar>
        </nav>
      </header>
    </>
  );
};

export default index;
