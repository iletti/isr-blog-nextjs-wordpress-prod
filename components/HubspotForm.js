import { useEffect } from 'react';

const HubspotForm = ({ formId }) => {
  useEffect(() => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        portalId: '144589700',
        formId: formId,
        target: '#hubspot-form'
      });
    }
  }, [formId]);

  return <div id="hubspot-form"></div>;
};

export default HubspotForm;
