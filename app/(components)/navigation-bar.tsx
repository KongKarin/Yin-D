import Image from "next/image";
import logo from "@/public/logo/logo.svg";
import Link from "next/link";
import ScrollingIndicator from "./utilities/scrollingIndicators";
export default function NavigationBar() {
  return (
    <>
      <nav className="navbar bg-yin-d-bg/50 w-full sticky z-10 top-0 backdrop-blur-sm border-b ">
        <div className="flex-1">
          <Link href={"/"}>
            <Image
              src={logo}
              alt={"Yin-D"}
              width={106}
              height={36}
              className="min-w-[120px] btn btn-ghost"
            />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-white">
            <li className="hidden md:block ">
              <Link href={"/#yin_d"} scroll={true}>
                Home
              </Link>
            </li>
            <li className="hidden md:block">
              <Link href={"/#write"} scroll={true}>
                Write
              </Link>
            </li>
            <li className="hidden md:block">
              <Link href={"/#about"} scroll={true}>
                About
              </Link>
            </li>
            <li className="md:hidden ">
              <details>
                <summary className=" appearance-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="20"
                    height="20"
                  >
                    {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                    <path
                      fill="#fff"
                      d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                    />
                  </svg>
                </summary>
                <ul className=" bg-base-100/5 rounded-t-none text-white">
                  <li>
                    <Link href={"/"} scroll={true}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href={"/#write"} scroll={true}>
                      Write
                    </Link>
                  </li>
                  <li>
                    <Link href={"/#about"} scroll={true}>
                      About
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <ScrollingIndicator />
      </nav>
    </>
  );
}
