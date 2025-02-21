import { useState } from "react";

export const MyComponent = () => {
  const [theText, setTheText] =
    useState(`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
      soluta, quia dolor maxime quibusdam quos ut nesciunt velit corrupti
      voluptatum commodi minus adipisci possimus vero similique animi. Illum,
      similique? Quidem.`);

  const handleClick = () => {
    setTheText("Detta är en förändrad text");
  };

  return (
    <>
      <p>{theText}</p>
      <button onClick={handleClick}>Ändra text</button>
    </>
  );
};
