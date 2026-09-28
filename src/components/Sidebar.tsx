
// Import the 6 icons we need. Each one is a React component.
import {
  House,
  GraduationCap,
  Wrench,
  FolderOpen,
  Mail,
} from "lucide-react";

// A list (array) of our buttons. Each has a name and an icon.
// Storing them as data means we write the button design only ONCE below.
const links = [
  { name: "Home", icon: House },
  { name: "EduBack", icon: GraduationCap },
  { name: "TechSkills", icon: Wrench },
  { name: "Works", icon: FolderOpen },
  { name: "Message", icon: Mail },

];

export default function Sidebar() {
  return (
    // <aside> is the HTML tag for a side area.
    // flex flex-col     -> stack the children top to bottom (a column)
    // items-center      -> center them horizontally
    // gap-6             -> space between each child
    // w-28              -> fixed width (7rem), so the main area sits to its right
    // py-8              -> padding on top and bottom
    <aside className="flex w-32 flex-col items-center gap-10 py-8">
      {/* The logo text. text-2xl = size, font-bold = heavy weight */}
    <p className="flex w-24 font-['Montserrat'] font-bold text-2xl">
        My <span className="text-orange-500 ">Portfolio</span>
    </p>

      {/* .map() loops over the array and makes one button per item */}
      {links.map((link) => (
        <button
          // React needs a unique "key" for each item in a list
          key={link.name}
          // Screen readers can't see an icon, so we give the button a name
          aria-label={link.name}
            // h-14 w-14           -> a 56px square
            // rounded-xl          -> rounded corners
            // border-2 border-black -> thick black outline
            // bg-white shadow-md  -> white fill with a soft shadow
            // flex items-center justify-center -> put the icon in the exact middle
            // hover:scale-110       -> while hovered, grow to 110% of normal size
            // transition-transform  -> animate the change smoothly instead of jumping
            // duration-200          -> the animation takes 200 milliseconds
            className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-black bg-white shadow-md transition-transform duration-200 hover:scale-110"
        >
          {/* link.icon is the icon component. We store it in a capital-letter
              variable first, because React only treats capitalized names as components */}
          <link.icon size={26} />
        </button>
      ))}
    </aside>
  );
}