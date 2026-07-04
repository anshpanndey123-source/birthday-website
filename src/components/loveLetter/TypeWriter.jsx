import { useEffect, useState } from "react";

const TypeWriter = ({
  text,
  speed = 35,
  onComplete,
}) => {

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {

    let index = 0;

    setDisplayText("");

    const interval = setInterval(() => {

      if (index < text.length) {

        setDisplayText((prev) => prev + text.charAt(index));
        index++;

      } else {

        clearInterval(interval);

        onComplete && onComplete();

      }

    }, speed);

    return () => clearInterval(interval);

  }, [text, speed, onComplete]);

  return (

    <div className="typewriter">

      {displayText}

      <span className="cursor">|</span>

    </div>

  );

};

export default TypeWriter;