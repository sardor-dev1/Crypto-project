import { useState, useEffect } from "react";
import { Button, Navbar, Dropdown } from "flowbite-react";
import Drawer from "../drawer";
import HeaderSkeleton from "../../components/skeletons/header-skeleton";
import "./style.scss";

const customTheme = {
  root: {
    base: "bg-[#15171B] text-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
  },
};

const index = ({ setValue, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const handleClose = () => setIsOpen(false);

  const handleSelect = (selectedValue) => {
    setValue(selectedValue);
  };

  if (loading) {
    return <HeaderSkeleton />;
  }

  return (
    <>
      <Drawer isOpen={isOpen} handleClose={handleClose} />
      <header className="bg-[#15171B] fixed w-full shadow-lg z-20">
        <nav className="container">
          <Navbar fluid theme={customTheme} rounded>
            <Navbar.Brand href="/">
              <span className="self-center text-[#87CEEB] whitespace-nowrap text-xl font-semibold dark:text-white">
                CRYPTOFOLIO
              </span>
            </Navbar.Brand>
            <div className="flex gap-12 md:order-2">
              <Dropdown
                label={value}
                inline
                className="bg-[#15171B] uppercase border-none shadow-sm shadow-gray-500 text-white"
              >
                <Dropdown.Item
                  className="bg-[#15171B] text-white focus:bg-gray-900 hover:bg-bl"
                  onClick={() => handleSelect("usd")}
                >
                  USD
                </Dropdown.Item>
                <Dropdown.Item
                  className="bg-[#15171B] text-white focus:bg-gray-900 hover:bg-bl"
                  onClick={() => handleSelect("eur")}
                >
                  EUR
                </Dropdown.Item>
                <Dropdown.Item
                  className="bg-[#15171B] text-white focus:bg-gray-900 hover:bg-bl"
                  onClick={() => handleSelect("rub")}
                >
                  RUB
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
