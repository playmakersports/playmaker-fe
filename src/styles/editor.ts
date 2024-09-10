import { css } from "@emotion/react";
import { FONTS } from "./common";

export const EDITOR_ARTICLE_STYLE = css`
  ${FONTS.MD1W500};
  font-weight: 400;
  line-height: 2.4rem;
  font-style: inherit;

  ul {
    padding-left: 20px;
    list-style-type: disc;
  }
  ol {
    padding-left: 24px;
    list-style-type: decimal;
    li::marker {
      font-variant-numeric: tabular-nums;
    }
  }

  h1 {
    margin-bottom: 4px;
    font-size: 2.6rem;
    line-height: 3rem;
  }
  h2 {
    margin-bottom: 4px;
    font-size: 2.4rem;
    line-height: 2.8rem;
  }
  h3 {
    margin-bottom: 4px;
    font-size: 2rem;
    line-height: 2.4rem;
  }
  strong,
  b {
    font-weight: 600;
  }

  mark {
    padding: 0 1px;
    background-color: rgba(255, 228, 96, 0.9);
    color: #000;
    border-radius: 2px;
  }

  img {
    margin: 12px 0;
    max-width: 100%;
    height: auto;
  }

  blockquote {
    margin-bottom: 8px;
    padding-left: 0.85rem;
    border-left: 5px solid var(--gray600);
  }

  em {
    font-style: italic;
  }

  p {
    min-height: 2.4rem;
  }

  .wrong-iframe {
    margin: 0 0 2px;
    color: var(--point);
    font-weight: 400;
  }
`;
