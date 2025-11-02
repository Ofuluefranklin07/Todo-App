import React from "react";
import { HighlighterIcon } from "lucide-react";
function Header() {
  return (
    
    <header>
        <div className="header-content">
      <h1 className="text-[40px]">
        <HighlighterIcon size={35}/>
       My Keeper App
      </h1>
          </div>
    </header>

  );
}

export default Header;
