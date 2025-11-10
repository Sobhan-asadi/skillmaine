import { RiCheckLine } from "react-icons/ri";

export default function DescriptionNoticeSection() {
  return (
    <>
      <div className="mt-20 flex flex-col-reverse overflow-hidden px-6 md:flex-row md:px-7">
        <div className="relative z-0 flex items-center md:mx-auto md:w-[50%] md:justify-end">
          <div className="mb-10">
            <h1 className="text-3xl font-semibold lg:text-4xl">
              Becom An Instructor
            </h1>
            <p className="mt-2 max-w-[600px] text-[15px] text-gray-600">
              Top instructors from the globe educate millions of students on
              Skillmine. Renowned experts from various fields share their
              knowledge, empowering learners worldwide.
            </p>

            <ul className="mt-5 space-y-4 md:text-base">
              <li className="flex items-center gap-2">
                <RiCheckLine
                  color="white"
                  size={19}
                  className="rounded-full bg-purple-500"
                />
                70% pay form every course
              </li>

              <li className="flex items-center gap-2">
                <RiCheckLine
                  color="white"
                  size={19}
                  className="rounded-full bg-purple-500"
                />
                70% pay form every course
              </li>

              <li className="flex items-center gap-2">
                <RiCheckLine
                  color="white"
                  size={19}
                  className="rounded-full bg-purple-500"
                />
                70% pay form every course
              </li>

              <li className="flex items-center gap-2">
                <RiCheckLine
                  color="white"
                  size={19}
                  className="rounded-full bg-purple-500"
                />
                70% pay form every course
              </li>

              <li className="flex items-center gap-2">
                <RiCheckLine
                  color="white"
                  size={19}
                  className="rounded-full bg-purple-500"
                />
                70% pay form every course
              </li>
            </ul>

            <button className="mt-10 w-[250px] cursor-pointer rounded-xl border bg-purple-600 p-4 text-lg font-semibold text-white hover:bg-purple-700">
              Start teaching today
            </button>
          </div>
        </div>
        <div className="md:w-[50%] md:pr-10">
          <img className="object-cover" src="/texh2.jpg" alt="" />
        </div>
      </div>

      <div className="mt-10 flex flex-col overflow-hidden px-6 md:mt-20 md:flex-row md:px-7">
        <div className="md:w-[50%] md:pr-10">
          <img className="object-cover" src="/texh1.jpg" alt="" />
        </div>

        <div className="relative z-0 flex items-center md:mx-auto md:w-[50%] md:justify-end">
          <div className="mb-10">
            <h1 className="text-3xl font-semibold lg:text-4xl">
              Transform Access to Education
            </h1>
            <p className="mt-2 max-w-[600px] text-[15px] text-gray-600">
              Create an account to receive our newsletter, course
              recommendations and promotions.
            </p>

            <ul className="mt-5 space-y-4 md:text-base">
              <li className="flex items-center gap-2">
                <RiCheckLine
                  color="white"
                  size={19}
                  className="rounded-full bg-purple-500"
                />
                Personalized course recommendations
              </li>

              <li className="flex items-center gap-2">
                <RiCheckLine
                  color="white"
                  size={19}
                  className="rounded-full bg-purple-500"
                />
                Exclusive member discounts
              </li>

              <li className="flex items-center gap-2">
                <RiCheckLine
                  color="white"
                  size={19}
                  className="rounded-full bg-purple-500"
                />
                Regular educational newsletters
              </li>
            </ul>

            <button className="mt-10 w-[250px] cursor-pointer rounded-xl border bg-purple-600 p-4 text-lg font-semibold text-white hover:bg-purple-700">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
