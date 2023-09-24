import { useState, useEffect, useContext } from "react";
import RickMessageContext from "../context/rick/rickMessageContext";

export default function Rick() {
  const [isMessageVisible, setIsMessageVisible] = useState(true);
  const RickMessageProvider = useContext(RickMessageContext);
  const [text, setText] = useState("");
  const textState = ["istyping", "isdeleting"];
  const [typing, setTyping] = useState(textState[0]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    if (String(RickMessageProvider.rickMessage).length > 0) {
      setIsMessageVisible(true);
    }
  }, [RickMessageProvider.rickMessage]);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (typing === "istyping" && text !== RickMessageProvider.rickMessage) {
          setText(RickMessageProvider.rickMessage.slice(0, text.length + 1));
        } else if (
          text === RickMessageProvider.rickMessage &&
          typing === "istyping"
        ) {
          sleep(2000).then(() => {
            setTyping(textState[1]);
          });
          RickMessageProvider.setRickMessageChanged(false);
        } else if (
          (text === RickMessageProvider.rickMessage &&
            RickMessageProvider.rickMessageChanged) ||
          RickMessageProvider.rickMessageChanged
        ) {
          setText(RickMessageProvider.rickMessage.slice(0, text.length - 1));
          if (text.length <= 2) {
            setTyping(textState[0]);
          }
        }
      },
      typing === "istyping" ? 50 : 8
    );
    return () => clearTimeout(timeout);
  }, [RickMessageProvider.rickMessage, text, textState, typing]);

  return (
    <>
      <div
        className={`fixed bottom-1/4 right-40 w-36 group ${
          isMessageVisible ? "visible" : "invisible"
        }`}
      >
        {/* <p>{RickMessageProvider.rickMessage}</p> */}
        <p className="text-base">{text}</p>
      </div>
      <img
        src={RickMessageProvider.rickImage}
        className="fixed bottom-0 right-0 bg-cover bg-center h-1/3"
      />
    </>
  );
}
