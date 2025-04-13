type Props = {
  text: string;
  keyword: string;
};

export default function HighlightKeyword({ text, keyword }: Props) {
  if (!keyword) return text;

  const parts = text.split(new RegExp(`(${keyword})`, "gi"));

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === keyword.toLowerCase() ? (
          <span
            key={index}
            style={{
              display: "inline-block",
              backgroundColor: "var(--primary200)",
            }}
          >
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}
