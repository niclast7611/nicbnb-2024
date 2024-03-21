import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">About</h5>
        <p>How Nicbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Nicbnb Plus</p>
        <p>Nicbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Community</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It&apos;s a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Nicbnb.org</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Host</h5>
        <p>Nic</p>
        <p>Presents</p>
        <p>Airbnb clone</p>
        <p>Resources below</p>
        <p>Github</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Support</h5>
        <p>Help Center</p>
        <p>Trust and Safety</p>
        <p>Linkedin</p>
        <p>Message</p>
        <p>Word</p>
      </div>
    </div>
  );
};

export default Footer;
