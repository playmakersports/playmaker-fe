"use client";
import { useSetAtom } from "jotai";
import { useLayoutEffect } from "react";

import {
  atomHeaderActions,
  atomHeaderCustomArea,
  atomHeaderIcons,
  atomHeaderOnClickBack,
  atomHeaderOptions,
  atomHeaderTransparent,
  atomPageTitle,
  HeaderOptionsType,
  HeaderSubIconType,
} from "@/atom/common";
import { ActionOptionsType } from "@/components/common/input/DropdownAction";

type HeaderCommonProps = {
  onClickBack?: () => void | null;
  subIcons?: Array<HeaderSubIconType>;
  subActions?: Array<ActionOptionsType> | Omit<ActionOptionsType, "divided">;
  transparent?: { inactive: number } | boolean;
  options?: HeaderOptionsType;
};
type HookProps =
  | ({
      title?: string;
    } & HeaderCommonProps)
  | ({
      customArea?: React.ReactNode;
    } & HeaderCommonProps);

export const useHeader = (props: HookProps = {}) => {
  const { onClickBack, subIcons, subActions, transparent, options = {} } = props;
  const setTitle = useSetAtom(atomPageTitle);
  const setOnClickBack = useSetAtom(atomHeaderOnClickBack);
  const setCustom = useSetAtom(atomHeaderCustomArea);
  const setIcons = useSetAtom(atomHeaderIcons);
  const setActions = useSetAtom(atomHeaderActions);
  const setBgTransparent = useSetAtom(atomHeaderTransparent);
  const setHeaderOptions = useSetAtom(atomHeaderOptions);

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
    options && setHeaderOptions(options);

    return () => {
      setTitle("");
      setCustom(null);
      setIcons([]);
      setOnClickBack(null);
      setActions([]);
      setBgTransparent(false);
      setHeaderOptions({} as HeaderOptionsType);
    };
  }, []);
};
