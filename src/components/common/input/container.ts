import { FONTS } from "@/styles/common";
import styled from "styled-components";

export const DropdownAsset = {
  Box: styled.div`
    position: absolute;
    display: flex;
    padding: 4px;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    min-width: 140px;
    border-radius: 10px;
    background-color: var(--white);
    box-shadow: var(--shadow-lg);
    z-index: 50;
    overflow: auto;
    box-sizing: border-box;
    &[data-size="small"] {
      width: inherit;
    }
  `,
  List: styled.div`
    display: flex;
    overflow: auto;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    max-height: 40vh;

    button[type="button"] {
      position: relative;
      user-select: none;
      display: flex;
      align-items: center;
      max-height: 40px;
      min-height: 40px;
      justify-content: space-between;
      padding: 8px 10px;
      border-radius: 8px;
      font-variant-numeric: tabular-nums;
      color: var(--gray700);
      ${FONTS.body4("regular")};

      & svg {
        display: none;
        width: 24px;
        height: 24px;
        fill: var(--primary500);
      }

      &:hover {
        background-color: var(--gray50);
      }
      &:focus {
        background-color: var(--gray100);
        outline: none;
      }
      &:active {
        background-color: var(--gray100);
        span.option-name {
          transform: scale(0.95);
          transition: transform 0.25s;
        }
      }

      &[data-divided="true"] {
        margin-top: 4px;
        &::before {
          content: "";
          position: absolute;
          width: calc(100% + 8px);
          height: 1px;
          top: -4px;
          left: -4px;
          background-color: var(--gray200);
        }
      }

      &[data-active="true"],
      &[aria-selected="true"] {
        background-color: var(--gray50);
        span.icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
        }
        & svg {
          display: block;
        }
      }
    }
  `,
  MultiList: styled.div`
    display: flex;
    overflow: auto;
    flex-direction: column;
    gap: 4px;
    width: 100%;
    max-height: 40vh;

    button[type="button"] {
      position: relative;
      user-select: none;
      display: flex;
      gap: 10px;
      align-items: center;
      max-height: 40px;
      min-height: 40px;
      padding: 8px 10px;
      border-radius: 8px;
      font-variant-numeric: tabular-nums;
      ${FONTS.body4("regular")};

      &:hover {
        background-color: var(--gray50);
      }
      &:focus {
        background-color: var(--gray100);
        outline: none;
      }
      &:active {
        background-color: var(--gray100);
        span.option-name {
          transform: scale(0.95);
          transition: transform 0.25s;
        }
      }

      span.icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 6px;
        border: 1px solid var(--gray200);

        & svg {
          width: 100%;
          height: 100%;
          display: none;
        }
      }

      &[data-active="true"],
      &[aria-selected="true"] {
        background-color: var(--primary50);
        &:focus {
          background-color: var(--primary100);
        }
        span.icon {
          background-color: var(--primary500);
          border-color: transparent;
          & svg {
            display: block;
            fill: var(--white);
          }
        }
      }
    }
  `,
};
