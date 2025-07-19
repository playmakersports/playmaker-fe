import React, { useEffect, useRef } from "react";
import Spinner from "./Spinner";
import { semantic } from "@/styles/color.css";

type Props = {
  fetchNextPage: () => Promise<void | any>;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  threshold: number;
  finishText: string;
};
function InfiniteQueryTrigger(props: Props) {
  const { fetchNextPage, hasNextPage, isFetchingNextPage, threshold, finishText } = props;
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      },
      {
        threshold,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [hasNextPage, fetchNextPage, threshold]);

  return (
    <div
      ref={targetRef}
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "24px 0 32px",
        minHeight: "24px",
      }}
    >
      {isFetchingNextPage && <Spinner size={36} />}
      {!hasNextPage && !isFetchingNextPage && <p className={semantic.description}>{finishText}</p>}
    </div>
  );
}

export default InfiniteQueryTrigger;
