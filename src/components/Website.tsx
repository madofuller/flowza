import Image from "next/image";

const Website: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10">
      {/* Text Content */}
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold text-gray-900">Your Website, Built for Leads. Powered by Automation.</h2>
        <p className="mt-4 text-gray-600">
          We don’t just build websites—we create lead-generation engines. You own your domain, and we handle everything else:
          design, hosting, lead capture, and full CRM integration. All you need is an active Flowza subscription to keep it running smoothly.
        </p>

        <ul className="mt-4 space-y-3 text-gray-700">
          <li>✅ Mobile-optimized website, custom-built for your business</li>
          <li>✅ Connected to CRM for automated lead tracking & follow-ups</li>
          <li>✅ SEO-ready & Google Business friendly</li>
          <li>✅ You own your domain—we power the system behind it</li>
          <li>✅ Want to update your photos or add services? Just text us.</li>
        </ul>

        <a
          href="#pricing"
          className="mt-6 inline-block bg-primary text-black py-3 px-6 rounded-full hover:bg-primary-accent transition"
        >
          Get Connected
        </a>
      </div>

      {/* Visual */}
      <div className="relative w-full max-w-md">
        <Image
          src="/images/roof.jpg" // Replace with your actual image
          alt="Website + CRM Integration"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Website;
