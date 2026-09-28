// Bring in the Sidebar. The path starts in the same folder as App.tsx.
import Sidebar from "./components/Sidebar";

// A component is just a function. The name starts with a capital letter.
function App() {
  // "return" is what shows on the page. Without it, the page is blank.
  return (
    // className (not "class") holds the Tailwind classes, explained below:
    // min-h-screen        -> at least as tall as the screen, so the grid fills the page
    // bg-white            -> white behind the grid lines
    // bg-[linear-gradient(#e6e6e6_1px,transparent_1px), ...]
    //                     -> two layers of thin grey lines (one horizontal, one vertical)
    //                        [ ] means "custom value", and _ stands in for a space
    // bg-[length:24px_24px] -> each grid square is 24px wide and tall
     <div className="min-h-screen bg-white bg-[linear-gradient(#e6e6e6_1px,transparent_1px),linear-gradient(90deg,#e6e6e6_1px,transparent_1px)] bg-[length:24px_24px]">

      <Sidebar />
    </div>
  );
  
}

// Lets main.tsx find and use this component
export default App;