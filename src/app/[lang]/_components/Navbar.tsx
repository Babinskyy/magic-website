import Link from "next/link";

type NavbarData = {
  title: string;
  cta_button_text: string;
};

const Navbar = ({
  data,
}: {
  data: NavbarData;
}) => {
  const { title, cta_button_text } = data;

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-gray-100">
              <span>{title}</span>
            </span>
          </Link>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex items-center nav__item">
          <Link href="/pl">Polish</Link>
          <Link href="/en">English</Link>
          <Link
            href="#contact"
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
          >
            {cta_button_text}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
