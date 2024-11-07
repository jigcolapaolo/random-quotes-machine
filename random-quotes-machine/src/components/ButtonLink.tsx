import { HexColor } from "../lib/types";

interface Props {
    color: HexColor
    updateQuote: () => void
}

export const ButtonLink: React.FC<Props> = ({ color, updateQuote }) => {
  return (
    <div className="button-link">
      <a
        id="tweet-quote"
        href="twitter.com/intent/tweet"
        target="_blank"
        style={{ backgroundColor: color }}
      >
        <i className="fa-brands fa-twitter"></i>
      </a>
      <button
        style={{ backgroundColor: color }}
        id="new-quote"
        onClick={updateQuote}
      >
        New Quote
      </button>
    </div>
  );
};
