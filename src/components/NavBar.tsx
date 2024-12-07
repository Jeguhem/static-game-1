// import Image from "next/image";
// import React, { useState } from "react";
// // import frostlogo from "@public/images/frost logo.svg"
// import chevrondown from "@public/images/chevron down.svg";

// interface NavBarProps {
//   logo: string;
// }

// function NavBar({ logo }: NavBarProps) {
//   const [open, setOpen] = useState(false);

//   function handleNav() {
//     setOpen((openNav) => !openNav);
//     // console.log(openNav);
//   }
//   function handleclose() {
//     setOpen(false);
//   }
//   return (
//     <div className="flex text-white justify-between items-center m-5 lg:mx-[140px] ">
//       <Image src={logo} alt="" width={33.85} height={43.88} />
//       <div className="flex gap-7 cursor-pointer items-center text-[12px] font-extrabold">
//         <div>
//           <p className="" onClick={handleNav}>
//             Game
//           </p>
//         </div>
//         <div>
//           <p className="" onClick={handleNav}>
//             Contact
//           </p>
//         </div>
//         <div className="flex gap-2 items-center">
//           <p className="" onClick={handleNav}>
//             Company
//           </p>
//           <Image src={chevrondown} alt="" width={8} height={3} />
//         </div>
//       </div>

//       {open ? (
//         //important
//         //

//         <div
//           className="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border min-w-[100px] flex flex-col gap-2 absolute top-full mt-2 p-2 rounded-lg bg-white "
//           style={{ right: "0", transform: "translateX(0)" }}
//         >
//           <div className="hover:text-blue-200   font-semibold active:opacity-40 lg:text-xl">
//             Comming Soon
//           </div>
//         </div>
//       ) : (
//         <div></div>
//       )}
//     </div>
//   );
// }

// export default NavBar;

import Image from "next/image";
import React, { useState } from "react";
// import frostlogo from "@public/images/frost logo.svg"
import chevrondown from "@public/images/chevron down.svg";

interface NavBarProps {
  logo: string;
}

function NavBar({ logo }: NavBarProps) {
  const [open, setOpen] = useState(false);

  // Toggles the dropdown state
  const handleNav = () => {
    setOpen((prevState) => !prevState);
  };

  // Closes the dropdown
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className="relative flex justify-between items-center m-5 lg:mx-[140px] text-white">
      {/* Logo */}
      <Image src={logo} alt="Logo" width={34} height={44} />

      {/* Navigation links */}
      <div className="flex gap-7 items-center text-[12px] font-extrabold cursor-pointer">
        <div>
          <p onClick={handleNav}>Game</p>
        </div>
        <div>
          <p onClick={handleNav}>Contact</p>
        </div>
        <div className="relative flex items-center gap-2">
          {/* Dropdown trigger */}
          <p onClick={handleNav}>Company</p>
          <Image src={chevrondown} alt="Chevron Down" width={8} height={3} />

          {/* Dropdown menu */}
          {open && (
            <div
              className="absolute right-0 mt-20 bg-white bg-opacity-90 text-black shadow-lg rounded-lg p-2 min-w-[150px] backdrop-blur-md"
              onMouseLeave={handleClose}
            >
              <div className="hover:text-blue-500 font-semibold py-1 px-2 cursor-pointer">
                Coming Soon
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
