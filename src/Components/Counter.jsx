import React, { useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const copyToClipboard = () => {
    if (inputRef.current) {
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() => toast.success("Text Copied To Clipboard!"))
        .catch(() => toast.error("Failed To Copy Text."));
    }
  };

  return (
    <>
      <div className="mx-auto bg-emerald-400 w-72 py-4 rounded-xl">
        <p className="text-center text-2xl font-semibold whitespace-nowrap">
          Current count: {count}
        </p>
        <div className="flex justify-center my-5">
          <button
            className="bg-amber-500 rounded-md px-4 py-2 font-mono text-2xl"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
        </div>
        <div className="flex justify-center my-5">
          <button
            className="bg-amber-500 rounded-md px-4 py-2 font-mono text-2xl"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <div className="bg-amber-400 rounded-lg">
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="py-5 px-2 text-2xl rounded-l-lg"
          />
          <button
            className="bg-blue-700 py-[28px] px-3 font-semibold rounded-r-lg text-white"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
}
