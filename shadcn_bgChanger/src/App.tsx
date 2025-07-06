import { Button } from "@/components/ui/button";
import "./App.css";
import { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

function App() {
  const [color, setColor] = useState("darkred");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Change Colors</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Button onClick={() => setColor("darkred")} className="bg-red-500 hover:bg-red-700">
                  Red
                </Button>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Button onClick={() => setColor("lightblue")} className="bg-blue-500 hover:bg-blue-700">
                  Blue
                </Button>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Button onClick={() => setColor("olive")} className="bg-green-500 hover:bg-green-700">
                  Green
                </Button>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Button onClick={() => setColor("darkgrey")} className="bg-gray-800 hover:bg-gray-900">
                  Black
                </Button>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </>
  );
}

export default App;
