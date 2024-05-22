import React, { useState, useEffect } from "react";

const HubSpotForm: React.FC = () => {
  const [formHTML, setFormHTML] = useState("");

  useEffect(() => {
    const fetchHubSpotForm = async () => {
      try {
        const response = await fetch(
          "https://ilari-schmidt-144589700.hubspotpagebuilder.eu/_hcms/api/gethubspotform"
        ); // Replace with your function's URL
        const data = await response.text();
        setFormHTML(data);
      } catch (error) {
        console.error("Error fetching HubSpot form:", error);
      }
    };

    fetchHubSpotForm();
  }, []);

  return (
    <div
      className="max-w-2xl mx-auto mt-10 overflow-hidden rounded-lg shadow-lg"
      dangerouslySetInnerHTML={{ __html: formHTML }}
    ></div>
  );
};

export default HubSpotForm;
