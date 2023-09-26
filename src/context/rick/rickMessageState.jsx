import RickMessageContext from "./rickMessageContext";
import ConstantsStrings from "../../constants/strings";
import { useState } from "react";
import PropTypes from "prop-types";

const RickMessageState = (props) => {
  const { Asset, Rick } = ConstantsStrings;
  const [rickMessage, setRickMessage] = useState(Rick.initialMsg);
  const [rickImage, setRickImage] = useState(Asset.rick);
  const [rickMessageChanged, setRickMessageChanged] = useState(false);
  //   const rickData = {
  //     message: rickMessage,
  //     image: rickImage,
  //   };

  function query(action) {
    var data = { inputs: Rick.basePrompt + action + '" Rick: ' };
    var msg = "";
    fetch(Rick.modelAPI, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_HUGGINGFACE_API_TOKEN}`,
      },
      method: "POST",
      body: JSON.stringify(data),
    }).then((response) => {
      response.json().then((result) => {
        setRickMessage(result[0]["generated_text"]);
      });
    });
    return msg;
  }
  const getCommentOnUserAction = (userAction, outputImage = "") => {
    query(userAction);
    // console.log("The gen msg is:");
    // console.log(genMsg);
    // setRickMessage(genMsg);
    String(outputImage).length > 0 ? setRickImage(outputImage) : null;
    setRickMessageChanged(true);
  };

  return (
    <RickMessageContext.Provider
      value={{
        rickMessage,
        rickImage,
        rickMessageChanged,
        getCommentOnUserAction,
        setRickMessageChanged,
      }}
    >
      {props.children}
    </RickMessageContext.Provider>
  );
};

RickMessageState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RickMessageState;
