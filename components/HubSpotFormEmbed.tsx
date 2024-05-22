import React, { useEffect } from "react";

const HubSpotForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    document.head.appendChild(script); // Append to <head> instead of <body>

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 overflow-hidden rounded-lg shadow-lg">
      <iframe
        src="https://forms.hubspot.com/forms/embed/v2/144589700/c36159e3-3f24-4cb2-8c04-6f0fa70a1082"
        width="100%"
        height="500"
        frameBorder="0"
        className="w-full"
        scrolling="no"
      />
    </div>
  );
};

export default HubSpotForm;
