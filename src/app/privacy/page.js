import { gemsbuck } from "@/app/page";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <section className="px-5 md:px-10 py-10">
        <div className="py-4">
          <Link
            href="/"
            className="flex text-xs items-center text-[#003DA5] font-semibold"
          >
            <svg
              className="mx-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                d="m6.854 5.854l.353-.354l-.707-.707l-.354.353l.708.708ZM4.5 7.5l-.354-.354l-.353.354l.353.354L4.5 7.5Zm1.646 2.354l.354.353l.707-.707l-.353-.354l-.708.708ZM7.5.5V0v.5Zm7 7h.5h-.5Zm-14 0H1H.5Zm7 7V14v.5ZM6.146 5.146l-2 2l.708.708l2-2l-.708-.708Zm-2 2.708l2 2l.708-.708l-2-2l-.708.708ZM4.5 8H11V7H4.5v1Zm3-7A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0v1ZM1 7.5A6.5 6.5 0 0 1 7.5 1V0A7.5 7.5 0 0 0 0 7.5h1ZM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15v-1Zm0 1A7.5 7.5 0 0 0 15 7.5h-1A6.5 6.5 0 0 1 7.5 14v1Z"
              />
            </svg>
            GO HOME
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="md:col-span-2">
            <div className="space-y-4 ">
              <h2
                className={`text-[#003DA5] py-4 text-lg tracking-wider ${gemsbuck.className}`}
              >
                Privacy and Accessibility
              </h2>
              <hr className="border-[#f1ab00]" />
              <div className="text-gray-500">
                <p>
                  We are committed to protecting your privacy and providing a
                  safe and secure online experience. This Privacy Policy
                  outlines how we collect, use, and safeguard your personal
                  information. By using our website, you consent to the
                  practices described in this policy.
                </p>
                <article className="py-4">
                  <h6 className="font-semibold">Information We Collect</h6>
                  <p>
                    We may collect both personally identifiable information and
                    non-personally identifiable information when you interact
                    with our website. The types of information we may collect
                    include:
                  </p>
                  <ol className="py-4 grid gap-4 list-disc">
                    <li>
                      Personal Information: This may include your name, email
                      address, phone number, mailing address, and other
                      information you provide when you fill out forms on our
                      website.
                    </li>
                    <li>
                      {`Non-Personal Information: We may collect information about
                      your browsing habits, such as your IP address, browser
                      type, and pages visited on our site. This information is
                      used to improve our website's functionality and user
                      experience.`}
                    </li>
                  </ol>
                </article>
                <article className="py-4">
                  <h6 className="font-semibold">How We Use Your Information</h6>
                  <p>We may use your information for the following purposes:</p>
                  <ol className="py-4 grid gap-4 list-disc">
                    <li>
                      To respond to your inquiries and provide information about
                      our programs and services.
                    </li>
                    <li>
                      To send you updates, newsletters, and promotional
                      materials if you have opted to receive them.
                    </li>
                    <li>
                      To improve our website and services based on your feedback
                      and browsing habits.
                    </li>
                    <li>
                      To comply with legal requirements and protect our rights
                      and the rights of others.
                    </li>
                  </ol>
                </article>
                <article className="py-4">
                  <h6 className="font-semibold">Sharing Your Information</h6>
                  <p>
                    We do not sell, trade, or rent your personal information to
                    third parties. However, we may share your information with
                    trusted third-party service providers who assist us in
                    operating our website and providing services to you. These
                    service providers are obligated to keep your information
                    confidential and secure.
                  </p>
                </article>
                <article className="py-4">
                  <h6 className="font-semibold">Accessibility Statement:</h6>
                  <p>
                    We are committed to ensuring that our website is accessible
                    to all individuals, regardless of disabilities or
                    impairments. We strive to adhere to the Web Content
                    Accessibility Guidelines (WCAG) 2.1, Level AA, to make our
                    website as user-friendly and inclusive as possible.
                  </p>
                </article>
                <article className="py-4">
                  <h6 className="font-semibold">Accessible Features:</h6>
                  <ol className="py-4 grid gap-4 list-disc">
                    <li>
                      Alt text for images: We provide alternative text for all
                      non-decorative images to assist screen readers and other
                      assistive technologies.
                    </li>
                    <li>
                      Keyboard Navigation: Our website is designed to be
                      navigable using keyboard controls for users who cannot use
                      a mouse.
                    </li>
                    <li>
                      Clear Language and Structure: We aim to present content in
                      a clear and organized manner to enhance readability and
                      understanding.
                    </li>
                    <li>
                      Adjustable Text Size: Users can resize text on our website
                      using their browser settings.
                    </li>
                  </ol>
                </article>
                <article className="py-4">
                  <h6 className="font-semibold">Feedback and Support:</h6>
                  <p>
                    We welcome feedback from users regarding the accessibility
                    of our website. If you encounter any issues or have
                    suggestions for improvement, please contact us.
                  </p>
                </article>
              </div>
            </div>
          </div>
          <div className="sm:col-span-1 space-y-4 pt-6">
            <hr className="border-[#f1ab00]" />
            <h4
              className={`text-sm text-[#003DA5] tracking-wider ${gemsbuck.className}`}
            >
              Quicklinks
            </h4>
            <hr className="w-20 border-[rgb(241,171,0)]" />
            <div className="flex flex-col text-[#D6336B]">
              {/* links */}

              <Link
                href="/about"
                className="text-xs tracking-wider font-semibold hover:text-[#D6336B] cursor-pointer uppercase py-2"
              >
                <svg
                  className="inline"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                  />
                </svg>
                About Rectem
              </Link>
              <hr />
              <Link
                href="facilities"
                className="text-xs tracking-wider font-semibold hover:text-[#D6336B] cursor-pointer uppercase py-2"
              >
                <svg
                  className="inline"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                  />
                </svg>
                Center & Facilities
              </Link>
              <hr />
              <Link
                href="/governing-board"
                className="text-xs tracking-wider font-semibold hover:text-[#D6336B] cursor-pointer uppercase py-2"
              >
                <svg
                  className="inline"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                  />
                </svg>
                Governing Board
              </Link>
              <hr />
              <Link
                href="/housing"
                className="text-xs tracking-wider font-semibold hover:text-[#D6336B] cursor-pointer uppercase py-2"
              >
                <svg
                  className="inline"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
                  />
                </svg>
                Housing
              </Link>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
