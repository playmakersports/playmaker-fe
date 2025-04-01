"use client";
import { useSetAtom } from "jotai";
import { useLayoutEffect } from "react";

import {
  atomHeaderActions,
  atomHeaderCustomArea,
  atomHeaderIcons,
  atomHeaderOnClickBack,
  atomHeaderTransparent,
  atomPageTitle,
  HeaderSubIconType,
} from "@/atom/common";
import { ActionOptionsType } from "@/components/common/input/DropdownAction";

type HeaderOptions = {
  onClickBack?: () => void | null;
  subIcons?: Array<HeaderSubIconType>;
  subActions?: Array<ActionOptionsType>;
  transparent?: { inactive: number } | boolean;
};
type HookProps =
  | ({
      title?: string;
    } & HeaderOptions)
  | ({
      customArea?: React.ReactNode;
    } & HeaderOptions);

export const useHeader = (props: HookProps = {}) => {
  const { onClickBack, subIcons, subActions, transparent } = props;
  const setTitle = useSetAtom(atomPageTitle);
  const setOnClickBack = useSetAtom(atomHeaderOnClickBack);
  const setCustom = useSetAtom(atomHeaderCustomArea);
  const setIcons = useSetAtom(atomHeaderIcons);
  const setActions = useSetAtom(atomHeaderActions);
  const setBgTransparent = useSetAtom(atomHeaderTransparent);

  useLayoutEffect(() => {
    if ("title" in props && props.title) {
      setTitle(props.title);
    }
    if ("customArea" in props && props.customArea) {
      setCustom(props.customArea);
    }
    subIcons && setIcons(subIcons);
    onClickBack && setOnClickBack(() => onClickBack);
    subActions && setActions(subActions);
    transparent && setBgTransparent(transparent);

    return () => {
      setTitle("");
      setCustom(null);
      setIcons([]);
      setOnClickBack(null);
      setActions([]);
      setBgTransparent(false);
    };
  }, []);
};
