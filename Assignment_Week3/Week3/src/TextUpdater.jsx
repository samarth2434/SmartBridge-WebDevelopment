import { useState } from "react";

const TextUpdater = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Text Updater</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        className="border p-2 rounded w-full"
      />
      <p className="mt-4">You typed: {text}</p>
    </div>
  );
};

export default TextUpdater;
