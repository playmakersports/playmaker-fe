import React from "react";
import FilterLineIcon from "@/assets/icon/common/FilterLine.svg";
import { filterButtonContainer } from "@/app/(mobile)/_components/container.css";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};
function FilterButton({ onClick, children }: Props) {
  return (
    <button type="button" onClick={onClick} className={filterButtonContainer}>
      <FilterLineIcon width={16} height={16} fill="var(--gray600)" />
      {children}
    </button>
  );
}

export default FilterButton;
