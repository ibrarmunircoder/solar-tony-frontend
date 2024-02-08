import React from "react";

const FAQ = () => {
  return (
    <div className="py-8 px-5">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      <br />
      <h2 className="text-2xl font-semibold">What is SmartSolarPricing.com?</h2>
      <br />
      <p>
        SmartSolarPricing.com is an online platform that provides real-time,
        updated prices for a wide range of solar panels available on Amazon.com.
        It offers filtering options to help users find the best deals tailored
        to their needs.
      </p>
      <br />
      <h2 className="text-2xl font-semibold">
        Where do these prices come from?
      </h2>
      <br />
      <p>
        We use Amazon's{" "}
        <a
          href="https://webservices.amazon.com/paapi5/documentation/"
          target="__blank"
        >
          Product Advertising API
        </a>{" "}
        to retrieve product information.
      </p>
      <br />
      <h2 className="text-2xl font-semibold">
        How often are prices updated on SmartSolarPricing.com?
      </h2>
      <br />
      <p>
        Prices are updated in near real-time to ensure users have access to the
        most current pricing information available on Amazon.com.
      </p>
      <br />
      <h2 className="text-2xl font-semibold">
        Can I filter solar panels by brand and condition on
        SmartSolarPricing.com?
      </h2>
      <br />
      <p>
        Yes, SmartSolarPricing.com allows users to filter solar panels by price,
        brand name, and condition (new or used) to find the perfect option for
        their requirements.
      </p>
      <br />
      <h2 className="text-2xl font-semibold">
        Can you add complex filters and sorting?
      </h2>
      <br />
      <p>
        The intent of this site is to be a simple reference rather than a
        comprehensive search index. If you would like to do more complex
        analysis, try entering the following into{" "}
        <a href="https://docs.google.com/spreadsheets/">Google Sheets</a>:{" "}
        <code> =IMPORTHTML("https://smartsolarpricing.com/", "table")</code>
      </p>
      <br />
      <h2 className="text-2xl font-semibold">
        Is there a fee to use SmartSolarPricing.com?
      </h2>
      <br />
      <p>
        No, SmartSolarPricing.com is a free resource designed to help consumers
        make informed decisions when purchasing solar panels.
      </p>
      <br />
      <h2 className="text-2xl font-semibold">
        How does SmartSolarPricing.com provide the best solar panel deals?
      </h2>
      <br />
      <p>
        By aggregating and updating solar panel prices from Amazon.com in
        real-time, SmartSolarPricing.com enables users to compare prices and
        specifications easily, ensuring they find the best deals.
      </p>
      <br />
      <h2 className="text-2xl font-semibold">
        Can I purchase solar panels directly through SmartSolarPricing.com?
      </h2>
      <br />
      <p>
        While SmartSolarPricing.com provides pricing and comparison tools,
        purchases are made through Amazon.com. We provide links to the products
        for your convenience.
      </p>
      <br />
      <h2 className="text-2xl font-semibold">
        Does SmartSolarPricing.com offer advice on which solar panels to buy?
      </h2>
      <br />
      <p>
        SmartSolarPricing.com provides the tools and information needed to make
        an informed decision. While we don't offer personalized advice, our
        platform makes it easy to compare options based on your criteria.
      </p>
      <br />
      <h2 className="text-2xl font-semibold">
        Are the solar panels listed on SmartSolarPricing.com suitable for
        residential use?
      </h2>
      <br />
      <p>
        Yes, SmartSolarPricing.com features a wide range of solar panels
        suitable for various applications, including residential, commercial,
        and industrial use.
      </p>
      <br />
      <h2 className="text-2xl font-semibold">
        How can I stay updated on the latest solar panel deals?
      </h2>
      <br />
      <p>
        Bookmark SmartSolarPricing.com and visit regularly to see the latest
        prices and deals. Our platform is designed to be an evergreen resource,
        staying current with market trends.
      </p>
      <br />
      <h2 className="text-2xl font-semibold">Is this an ad?</h2>
      <br />
      <p>
        We receive commissions for products purchased through the links on this
        site through{" "}
        <a href="https://webservices.amazon.com/paapi5/documentation/">
          Amazon's Affiliate Program
        </a>
      </p>
      <br />
      <h2 className="text-2xl font-semibold">
        Who can I contact for support or questions about using
        SmartSolarPricing.com?
      </h2>
      <br />
      <p>
        If you have any questions or need assistance, you may email{" "}
        <a href="mailto:support@smartsolarpricing.com">
          support@smartsolarpricing.com.
        </a>
      </p>
    </div>
  );
};

export default FAQ;
