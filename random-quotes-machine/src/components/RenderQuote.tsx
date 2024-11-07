import { HexColor } from "../lib/types";

interface Props {
  quote: string;
  author: string;
  color: HexColor;
  visible: boolean;
}

export const RenderQuote: React.FC<Props> = ({
  quote,
  author,
  color,
  visible,
}) => {
  return (
    <div className="render-quote">
      <h1
        id="text"
        className={visible ? "fade-in" : "fade-out"}
        style={{ color: color }}
      >
        <span>&quot;</span>
        {quote}
      </h1>
      <p
        id="author"
        className={visible ? "fade-in" : "fade-out"}
        style={{ color: color }}
      >
        - {author}
      </p>
    </div>
  );
};
