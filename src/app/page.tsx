// pages/index.tsx (or HomePage.tsx)
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Website from "@/components/Website";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        {/* Website section */}
        <Section
          id="websites"
          title="We Build Websites That Bring You Customers"
          description="We build high-converting websites that feed your CRM—so you never miss a lead."
        >
          {/* Optionally wrap Website in a div to limit width & center */}
          <div className="mx-auto max-w-7xl">
            <Website />
          </div>
        </Section>

        <Benefits />

        <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section>

        <FAQ />
      </Container>
    </>
  );
};

export default HomePage;
