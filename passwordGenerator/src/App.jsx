import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (specialChar) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let rn = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(rn);
    }

    setPassword(pass);
  }, [length, number, specialChar, setPassword]);

  const copyToClipboard = useCallback(() => {
    passRef.current.select(password);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, number, specialChar, generatePassword]);

  return (
    <div className="h-screen w-full bg-gradient-to-r from-blue-400 via-sky-500 to-purple-700 text-white flex items-center justify-center">
      <div className="h-fit w-1/2 bg-white px-5 py-10 rounded-lg shadow-lg text-gray-900">
        <h1 className="py-5 text-center text-4xl font-bold text-purple-600">
          Password Generator
        </h1>
        <div className="w-full rounded-lg overflow-hidden">
          <input
            className="w-[90%] px-3 py-2 bg-sky-100 border border-sky-300 rounded-lg outline-none"
            type="text"
            value={password}
            readOnly
            ref={passRef}
          />
          <button
            onClick={copyToClipboard}
            className="w-[10%] bg-purple-500 px-3 py-2 text-white font-semibold rounded-lg hover:bg-purple-600"
          >
            Copy
          </button>
        </div>
        <div className="flex flex-col gap-4 mt-5">
          <div className="flex gap-2 items-center">
            <input
              type="range"
              min={6}
              max={40}
              onChange={(evt) => setLength(evt.target.value)}
              className="accent-purple-500"
            />
            <label className="text-gray-700">Length: ({length})</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              id="num"
              type="checkbox"
              defaultChecked={number}
              onChange={() => setNumber((prev) => !prev)}
              className="accent-purple-500"
            />
            <label htmlFor="num" className="text-gray-700">Number</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              id="specialChar"
              type="checkbox"
              defaultChecked={specialChar}
              onChange={() => setSpecialChar((prev) => !prev)}
              className="accent-purple-500"
            />
            <label htmlFor="specialChar" className="text-gray-700">Special Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
