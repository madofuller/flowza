
import Script from "next/script";

const CTA: React.FC = () => {
  return (
    <>

      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
};

export default CTA;
