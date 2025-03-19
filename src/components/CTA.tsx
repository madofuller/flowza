import { ctaDetails } from "@/data/cta";
import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";
import Script from "next/script";

const CTA: React.FC = () => {
  return (
    <>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/vPkCsjuA7PYlyMi9XQlm"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "3px",
        }}
        id="inline-vPkCsjuA7PYlyMi9XQlm"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="CRM Software Registration"
        data-height="919"
        data-layout-iframe-id="inline-vPkCsjuA7PYlyMi9XQlm"
        data-form-id="vPkCsjuA7PYlyMi9XQlm"
        title="CRM Software Registration"
      ></iframe>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
};

export default CTA;
