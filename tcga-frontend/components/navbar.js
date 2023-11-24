import Link from "next/link";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import ThemeChanger from "./DarkSwitch";

const Navbar = () => {
  const navigation = [
    "About",
    "Predict",
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-teal-500 dark:text-gray-100">
                    <span>
                      <Image
                        src="/tcgai_logo.png"
                        alt="N"
                        width="150"
                        height="150"
                      />
                    </span>
                  </span>
                </Link>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            <li className="mr-3 nav__item" key={0}>
              <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-teal-500 focus:text-teal-500 focus:bg-teal-100 focus:outline-none dark:focus:bg-gray-800">
                  Home
              </Link>
            </li>
            <li className="mr-3 nav__item" key={0}>
              <Link href="/about" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-teal-500 focus:text-teal-500 focus:bg-teal-100 focus:outline-none dark:focus:bg-gray-800">
                  {navigation[0]}
              </Link>
            </li>
            <li className="mr-3 nav__item" key={1}>
              <Link href="/predict" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-teal-500 focus:text-teal-500 focus:bg-teal-100 focus:outline-none dark:focus:bg-gray-800">
                  {navigation[1]}
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
        <a
          href="https://github.com/bill071194/tcga-mlops"
          target="_blank"
          rel="noopener"
          className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
          <svg
            role="img"
            width="24"
            height="24"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          <span> GitHub Repository</span>
        </a>
        <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
