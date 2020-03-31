import React from "react";

const ExternalLink = ({ href, children }) => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
};

ExternalLink.defaultProps = {
  href: "#",
};

export default ExternalLink;
