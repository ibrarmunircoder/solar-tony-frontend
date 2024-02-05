import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="py-8 px-5">
      <h1 className="text-2xl font-bold">Privacy Policy</h1>
      <p>
        Your IP address may be logged and stored for up to 30 days for debugging
        and abuse prevention purposes.
      </p>
      <br />
      <p>
        Anonymized HTTP referrer information is sent to our servers for
        analytics purposes and may be stored indefinitely.
      </p>
      <br />
      <p>
        We do not share any information about our users with any third parties.
      </p>
      <br />
      <h1 className="text-2xl font-bold">Cookies</h1>
      <br />
      <p>The public portions of this site do not set cookies.</p>
      <br />
      <h1 className="text-2xl font-bold">Amazon affiliate program</h1>
      <br />
      <p>
        Amazon may set additional cookies to link your purchases to our
        affiliate code after you click a product link. These cookies are set on
        Amazon's domains and are never sent to{" "}
        <a href="https://smartsolarpricing.com/" target="__blank">
          smartsolarpricing.com
        </a>
      </p>
      <br />
      <p>
        Product prices and availability are accurate as of the date/time
        indicated and are subject to change. Any price and availability
        information displayed at the time of purchase will apply to the purchase
        of the product. We are a participant in the Amazon Services LLC
        Associates Program, an affiliate advertising program designed to provide
        a means for us to earn fees by linking to Amazon.com and affiliated
        sites. CERTAIN CONTENT THAT APPEARS ON THIS SITE COMES FROM AMAZON
        SERVICES LLC. THIS CONTENT IS PROVIDED 'AS IS' AND IS SUBJECT TO CHANGE
        OR REMOVAL AT ANY TIME.
      </p>
      <br />
      <h1 className="text-2xl font-bold">Additional information</h1>
      <p>
        You may email{" "}
        <a href="mailto:support@smartsolarpricing.com">
          support@smartsolarpricing.com
        </a>{" "}
        with any questions.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
