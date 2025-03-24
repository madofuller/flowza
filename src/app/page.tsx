import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Website from "@/components/Website"; // ✅ Import the section

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        {/* ✅ Website section comes FIRST after hero */}
        <Section
          id="websites"
          title="Need More Leads? Start With a Website That Works"
          description="We build high-converting websites that automatically send leads into your CRM—so you never miss an opportunity again."
        >
          <Website />
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
