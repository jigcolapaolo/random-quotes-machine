import { useState } from "react";
import "./styles/_app.scss";
import { RenderQuote } from "./components/RenderQuote";
import { ButtonLink } from "./components/ButtonLink";
import { QuoteList } from "./lib/types";

const quotes: QuoteList = [
  ["The rains have ceased, and we have been graced with another beautiful day. But you are not here to see it.", "Elidibus", "#d52a2a"],
  ["A smile better suits a hero.", "Haurchefant", "#455359"],
  ["Such devastation... This was not my intention...", "Gaius Van Baelsar", "#4b0404"],
  ["We did everything right, everything that was asked of us and still─still it came to this!", "Ardbert", "#782424"],
  ["In darkness seek joy. Surrender not to sadness, and see beyond despair. Walk free, and bear the light for others to follow.", "Hydaelyn", "#2a63d5"],
];

export const App = () => {

  const [quote, setQuote] = useState(quotes[0][0]);
  const [author, setAuthor] = useState(quotes[0][1]);
  const [color, setColor] = useState(quotes[0][2]);
  const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length));
  const [visible, setVisible] = useState(true);

  const updateQuote = () => {
    setVisible(false);
    setTimeout(() => {
      const newQuote = quotes[index];

      setQuote(newQuote[0]);
      setAuthor(newQuote[1]);
      setIndex((index + 1) % quotes.length);
      setColor(newQuote[2]);
      setVisible(true);

    }, 500);
  };


  document.body.style.backgroundColor = color;

  return (
    <div id="quote-box">
      <RenderQuote
        quote={quote}
        author={author}
        color={color}
        visible={visible}
      />
      <ButtonLink updateQuote={updateQuote} color={color} />
    </div>
  );
};
