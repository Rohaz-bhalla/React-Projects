import { useCallback, useEffect, useRef, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import './App.css';

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbers] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [symAllowed, setSymAllowed] = useState(false);

  const passwordRef = useRef(null);

  // Password Generator Function
  const passwordGenerator = useCallback(() => 
  {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const sym = "!@#$%^&*()_+";

    if (charAllowed) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) str += num;
    if (symAllowed) str += sym;

    for (let i = 0; i < length; i++) 
    {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [charAllowed, numbersAllowed, symAllowed, length]);

  // Copy Function
  const copy = useCallback(() => 
  {
    if (password) 
    {
      navigator.clipboard.writeText(password).then(() => 
      {
        alert("Password Copied to Clipboard!");
      }).catch(() => 
      {
        alert("Failed to Copy Password.");
      });
    }
  }, [password]);

  // Generate password when dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numbersAllowed, symAllowed, passwordGenerator]);

  return (
    <div className="p-5 bg-blue-500 rounded-md w-96 mx-auto text-white">
      <div className="flex items-center gap-2">
        <Input placeholder="Your Password" value={password} readOnly ref={passwordRef} className="bg-gray-800 text-white" />
        <Button variant="outline" onClick={copy}className="text-black">
          Copy
        </Button>
      </div>

      <div className="mt-4">
        <label>Length: {length}</label>
        <Slider
          value={[length]}
          min={4} max={20} step={1}
          onValueChange={(value) => setLength(value[0])}
          className="w-full"
          thumbClassName="bg-white border border-gray-500"
          trackClassName="bg-gray-600"
          rangeClassName="bg-blue-500"         
        />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <Checkbox checked={charAllowed} onCheckedChange={setCharAllowed} />
          Include Characters
        </label>

        <label className="flex items-center gap-2">
          <Checkbox checked={numbersAllowed} onCheckedChange={setNumbers} />
          Include Numbers
        </label>

        <label className="flex items-center gap-2">
          <Checkbox checked={symAllowed} onCheckedChange={setSymAllowed} />
          Include Symbols
        </label>
      </div>
    </div>
  );
}

export default App;
