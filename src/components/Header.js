"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiMenu3Line,
  RiArrowRightLine,
  RiArrowDropDownLine,
  RiArrowDropUpLine,
} from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { LuPlus, LuMinus } from "react-icons/lu";

import { gemsbuck } from "@/app/page";
import Link from "next/link";

const SETTING = {
  menu: {
    ABOUT: [
      {
        name: "ABOUT RECTEM",
        url: "/about",
      },
      {
        name: "VISION",
        url: "/about#vision",
      },
      {
        name: "MISSION",
        url: "/about#mission",
      },
      {
        name: "GOVERNING BOARD",
        url: "/governing-board",
      },
      {
        name: "PRINCIPAL OFFICERS",
        url: "/principal-officers",
      },
      {
        name: "VISITORS",
        url: "/visitors",
      },
    ],
    ACADEMICS: [
      {
        name: "ACADEMIC CALENDAR",
        url: "/calendar",
      },
      {
        name: "ND PROGRAMMES",
        url: "/national-diploma",
      },
      {
        name: "HND PROGRAMMES",
        url: "/higher-diploma",
      },
    ],
    ADMISSIONS: [
      {
        name: "ND ADMISSIONS",
        url: "/national-diploma-admissions",
      },
      {
        name: "HND ADMISSIONS",
        url: "/higher-diploma-admissions",
      },

      {
        name: "APPROVED FEES",
        url: "/admission-cost",
      },
    ],
    RESEARCH: [
      {
        name: "RESEARCH & PUBLICATION",
        url: "/research",
      },
      {
        name: "CENTER & FACILITIES",
        url: "/facilities",
      },
    ],
    "CAMPUS LIFE": [
      {
        name: "EVENTS",
        url: "/events",
      },
      {
        name: "HOUSING",
        url: "/housing",
      },
      {
        name: "CAMPUS MAP",
        url: "/campus-map",
      },
    ],
    SCHOOLS: [
      {
        name: "ENGINEERING",
        url: "/schools/engineering",
      },
      {
        name: "ENVIRONMENTAL TECHNOLOGY",
        url: "/schools/environmental",
      },
      {
        name: "MANAGEMENT",
        url: "/schools/management",
      },
      {
        name: "SCIENCE & TECHNOLOGY",
        url: "/schools/science-technology",
      },
      {
        name: "PART-TIME",
        url: "/schools/part-time",
      },
    ],
  },
  more: {
    QUICKLINKS: [
      {
        name: "Student portal",
        url: "https://portal.rectem.edu.ng",
      },
      {
        name: "Events",
        url: "/events",
      },
      {
        name: "News",
        url: "/blogs",
      },
      {
        name: "Calendar",
        url: "/calendar",
      },
      {
        name: "ND PROGRAMMES",
        url: "/national-diploma",
      },
      {
        name: "HND PROGRAMMES",
        url: "/higher-diploma",
      },
    ],
  },
};

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header>
      {/* QUICKLINKS - TOP NAV */}
      <div className="hidden md:block bg-[#003DA5]">
        <nav className="flex justify-between items-center px-5">
          <ul className="flex list-none gap-4">
            {SETTING.more.QUICKLINKS.map((btn, index) => {
              if (btn.name !== "Student portal")
                return (
                  <li
                    key={index}
                    className="text-xs font-semibold tracking-widest text-gray-200 uppercase cursor-pointer hover:text-white"
                  >
                    <a href={btn.url}>{btn.name}</a>
                  </li>
                );
            })}
          </ul>
          <a
            href={SETTING.more.QUICKLINKS[0].url}
            target="_blank"
            className="bg-[#f1ab00] text-black font-semibold text-xs uppercase p-3 hover:bg-[#f1ab00] "
          >
            {SETTING.more.QUICKLINKS[0].name}
          </a>
        </nav>
      </div>
      {/* END QUICKLINKS - TOP NAV */}
      {/* SITE LOGO & TITLE */}
      <div className="flex justify-between gap-5 items-center p-5">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/rectem.png"
            alt="Rectem logo"
            width={30}
            height={30}
            className="w-auto h-auto"
          />
        </Link>
        <div className="text-[0.85rem] sm:hidden font-semibold">
          <h6 className="text-[#003DA5]">
            2023/2024 ND & HND ADMISSION IS NOW OPEN
          </h6>
          <a
            href="https://portal.rectem.edu.ng"
            className="text-[#D6336B] cursor-pointer"
          >
            APPLY NOW
          </a>
        </div>
        <h4
          className={`hidden sm:block text-[#003DA5] md:text-lg tracking-wide ${gemsbuck.className}`}
        >
          {`REDEEMER'S COLLEGE OF TECHNOLOGY AND MANAGEMENT`}
        </h4>
      </div>
      {/* END SITE LOGO & TITLE */}
      {/* TABLET & DESKTOP MENU */}
      <div className="flex bg-[#003DA5] text-white border-y-[1px] border-t-[2px] border-[#f1ab00]">
        <h6
          className={`sm:hidden flex-1 py-3 pl-2 text-xl tracking-wider ${gemsbuck.className}`}
        >
          {`WELCOME TO RECTEM`}
        </h6>
        <button
          className="md:hidden sm:block bg-[#f1ab00] px-2"
          onClick={() => setMobileNav((prevMobileNav) => !prevMobileNav)}
        >
          {mobileNav ? <RxCross1 size="1.5em" /> : <RiMenu3Line size="1.5em" />}
        </button>

        {/* Menu for medium and lg devices */}
        <nav className="hidden md:block px-10  m-auto z-50">
          <ul className="list-none flex flex-wrap justify-center">
            {Object.keys(SETTING.menu).map((btn, index) => (
              <li
                key={index}
                className="dropdown items-center cursor-pointer relative mt-[5px]"
              >
                <a className="text-xs uppercase font-semibold tracking-widest p-4 border-b-4 border-transparent ">
                  {btn}
                  <RiArrowDropDownLine
                    style={{ display: "inline" }}
                    size="1.7em"
                  />
                </a>
                <ul className="dropdown-menu hidden absolute z-[1] min-w-[200px] top-0 mt-10 bg-[#003DA5]">
                  {SETTING.menu[btn].map((more, index) => (
                    <li
                      key={index}
                      className="border-t-[1px] text-xs font-semibold tracking-widest pl-3 py-3 border-[#7591b5] bg-[#407ec9] hover:bg-blue-500 transition duration-300 ease-in-out"
                    >
                      <Link href={more.url}>{more.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            <li className="btn bg-[#f1ab00] text-black font-semibold cursor-pointer hover:bg-[#f1ab00] py-2 px-4 border-b-4 border-transparent hover:border-white">
              <a
                href="https://onlineapp.rectem.edu.ng"
                target="_blank"
                className="text-xs uppercase tracking-widest"
              >
                APPLY NOW
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* END TABLET & DESKTOP MENU */}
      {/* MOBILE NAV MENU */}
      <AnimatePresence initial={false}>
        {mobileNav && (
          <motion.div
            className="bg-[#003DA5] text-white"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.3,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            <nav>
              <motion.ul className="list-none">
                {Object.keys(SETTING.menu).map((name, index) => {
                  const isOpen = index === expanded;
                  return (
                    <Fragment key={index}>
                      <menu.item
                        name={name}
                        indent="4"
                        index={index}
                        isOpen={isOpen}
                        setExpanded={setExpanded}
                        variant="border-[#1D3A61] px-3 "
                        endIcon={isOpen ? <LuMinus /> : <LuPlus />}
                      />

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.ul
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                              open: { opacity: 1, height: "auto" },
                              collapsed: { opacity: 0, height: 0 },
                            }}
                            transition={{
                              duration: 0.3,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            }}
                          >
                            {SETTING.menu[name].map((more, index) => (
                              <menu.item
                                key={index}
                                name={more.name}
                                url={more.url}
                                indent="6"
                                variant="border-[#7591b5] bg-[#407ec9] text-white px-6"
                              />
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </Fragment>
                  );
                })}
                <menu.item
                  url="https://onlineapp.rectem.edu.ng"
                  name="Apply for admission"
                  indent="4"
                  variant="bg-[#f1ab00] text-black font-medium px-3"
                  endIcon={<RiArrowRightLine />}
                />
              </motion.ul>

              <motion.ul className="list-none">
                {Object.keys(SETTING.more).map((name, index) => {
                  const isOpen = index === open;
                  return (
                    <Fragment key={index}>
                      <menu.item
                        name={name}
                        indent="4"
                        index={index}
                        isOpen={isOpen}
                        setExpanded={setOpen}
                        variant="bg-gray-600 border-[#1D3A61] px-3 "
                        endIcon={
                          isOpen ? (
                            <RiArrowDropDownLine size="1.5em" />
                          ) : (
                            <RiArrowDropUpLine size="1.5em" />
                          )
                        }
                      />

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.ul
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                              open: { opacity: 1, height: "auto" },
                              collapsed: { opacity: 0, height: 0 },
                            }}
                            transition={{
                              duration: 0.3,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            }}
                          >
                            {SETTING.more[name].map((more, index) => (
                              <menu.item
                                key={index}
                                name={more.name}
                                url={more.url}
                                indent="6"
                                variant="border-gray-600 bg-gray-500 text-white px-6"
                              />
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </Fragment>
                  );
                })}
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      {/* END MOBILE NAV MENU */}
    </header>
  );
}

const menu = {
  item: ({ name, url, endIcon, variant, index, isOpen, setExpanded }) => (
    <motion.li
      className={`flex cursor-pointer border-t-[1px] py-2 ${variant}`}
      onClick={() => setExpanded && setExpanded(isOpen ? false : index)}
    >
      <a
        href={url}
        className="flex-1 text-xs font-semibold tracking-widest uppercase"
      >
        {name}
      </a>
      {endIcon}
    </motion.li>
  ),
};
