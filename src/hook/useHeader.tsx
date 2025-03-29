"use client";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

import {
  atomHeaderActions,
  atomHeaderIcons,
  atomHeaderTransparent,
  atomPageTitle,
  HeaderSubIconType,
} from "@/atom/common";
import { ActionOptionsType } from "@/components/common/input/DropdownAction";

type HookProps = {
  title?: string;
  subIcons?: Array<HeaderSubIconType>;
  subActions?: Array<ActionOptionsType>;
  transparent?: { inactive: number } | "always" | "never";
};

export const useHeader = (props: HookProps = {}) => {
  const { title, subIcons, subActions, transparent } = props;
  const setTitle = useSetAtom(atomPageTitle);
  const setIcons = useSetAtom(atomHeaderIcons);
  const setActions = useSetAtom(atomHeaderActions);
  const setBgTransparent = useSetAtom(atomHeaderTransparent);

  useEffect(() => {
    title && setTitle(title);
    subIcons && setIcons(subIcons);
    subActions && setActions(subActions);
    transparent && setBgTransparent(transparent);

    return () => {
      setTitle("");
      setIcons([]);
      setActions([]);
      setBgTransparent("never");
    };
  }, [title]);
};
