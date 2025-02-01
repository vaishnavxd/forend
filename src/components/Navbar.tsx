import { useState } from "react";
import { Button } from './Button';
import { TransparentButton } from './TransparentButton';
import EmailRegistration from "./EmailRegistration";

export const Navbar = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handlePartnerButtonClick = () => {
    setShowRegistration((prev) => !prev); // Toggle the visibility of the email registration form
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-white/50 backdrop-blur-md px-4">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <h1 className="text-2xl font-bold tracking-tight">IILM Techies</h1>
        <div className="flex gap-4">
          <TransparentButton onClick={() => window.open("https://www.hackerearth.com/", "_blank")}>
            Join
          </TransparentButton>
          <TransparentButton onClick={() => window.open("https://www.hackerearth.com/", "_blank")}>Hackathon</TransparentButton>
          <TransparentButton onClick={() => window.open("https://www.hackerearth.com/", "_blank")}>Meetups</TransparentButton>
          <TransparentButton onClick={() => window.open("https://www.hackerearth.com/", "_blank")}>FAQs</TransparentButton>
          <TransparentButton onClick={() => window.open("https://www.hackerearth.com/", "_blank")}>Blogs</TransparentButton>
          
          <Button
            onClick={handlePartnerButtonClick}
            aria-label="Visit GitHub profile"
          >
            Partner with us
          </Button>  
        </div>
      </div>

      {/* Conditionally render the EmailRegistration component */}
      {showRegistration && <EmailRegistration />}
    </nav>
  );
};
