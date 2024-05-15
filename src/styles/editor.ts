import { FONTS } from "./common";

export const EDITOR_ARTICLE_STYLE = `
    ${FONTS.MD1W500};
    font-weight: 400;
    line-height: 2.4rem;
    font-style: inherit;

    ul {
      padding-left: 20px;
      list-style-type: disc
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
      line-height:2.8rem;
    }
    h3 {
      margin-bottom: 4px;
      font-size: 2rem;
      line-height:2.4rem;
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
      max-width: 100%;
      height: auto;
    }

    blockquote {
      margin-bottom: 10px;
      padding-left: 1rem;
      border-left: 3px solid var(--gray1);
    }

    em {
    border-bottom: 1px solid var(--text);
    }

    p {
      min-height: 2.4rem;
    }

    .wrong-iframe {
      color: var(--warn);
      font-weight: 800;
    }
  `;
