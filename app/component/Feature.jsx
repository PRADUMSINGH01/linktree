import Image from "next/image";

export default function Features() {
  return (
    <section className="py-20 dark:bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl dark:text-yellow-500 font-bold text-center mb-10">
          Why Choose <span className="text-blue-600">YourSaaS</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
            <Image
              src="/svgs/sharing.svg"
              alt="Share Links"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-xl font-semibold  mt-4">Easy Sharing</h3>
            <p className="text-gray-700 dark:text-gray-200">
              Share your personalized link with one URL and connect with your
              audience instantly.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
            <Image
              src="/svgs/analytics.svg"
              alt="Analytics"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">Advanced Analytics</h3>
            <p className="text-gray-700 dark:text-gray-200">
              Track clicks and engagement with detailed analytics to grow your
              audience.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
            <Image
              src="/svgs/p.svg"
              alt="Customize"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">Customizable</h3>
            <p className="text-gray-700 dark:text-gray-200">
              Personalize your page with themes, branding, and unique layouts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
