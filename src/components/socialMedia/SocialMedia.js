import React from 'react';
import IconLinkedin from '../svg/icon_linkedin';
import IconTwitter from '../svg/icon_twitter';
import IconInstagram from '../svg/icon_instagram';

const SocialMedia = () => {
  return (
    <div className="sizeandmeSocialMedia">
      <a href="https://www.linkedin.com/company/sizeandme/" target="_blank"><IconLinkedin /></a>
      <a href="https://twitter.com/sizeandme" target="_blank"><IconTwitter /></a>
      <a href="https://www.instagram.com/sizeandme/" target="_blank"><IconInstagram /></a>
    </div>
  );
};

export default SocialMedia;
