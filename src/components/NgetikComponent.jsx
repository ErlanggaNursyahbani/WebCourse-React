// NgetikComponent.jsx
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes untuk animasi mengetik
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: black; }
`;

// Styled component untuk teks dengan animasi mengetik
const TypingText = styled.h3`
  display: inline-block;
  overflow: hidden;
  border-right: 0.15em solid black; /* Efek kursor */
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: ${typing} 2.5s steps(30, end) infinite,
    ${blink} 0.75s step-end infinite;
  width: 100%;
  animation-direction: alternate;
`;

const NgetikComponent = () => {
  const sentences = ["Bareng Elang!", "Gampang dan Gak Ribet!", "Meluncurrrrr"];
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentenceIndex(
        (prevIndex) => (prevIndex + 1) % sentences.length
      );
    }, 5000); // 2.5s typing + 2.5s reverse typing = 5s

    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <TypingText className="animate__animated animate__fadeIn">
      {sentences[currentSentenceIndex]}
    </TypingText>
  );
};

export default NgetikComponent;
