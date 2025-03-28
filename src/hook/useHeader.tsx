"use client";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

import {
  atomHeaderActions,
  atomHeaderCustomArea,
  atomHeaderIcons,
  atomHeaderTransparent,
  atomPageTitle,
  HeaderSubIconType,
} from "@/atom/common";
import { ActionOptionsType } from "@/components/common/input/DropdownAction";

type HeaderOptions = {
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
  const { subIcons, subActions, transparent } = props;
  const setTitle = useSetAtom(atomPageTitle);
  const setCustom = useSetAtom(atomHeaderCustomArea);
  const setIcons = useSetAtom(atomHeaderIcons);
  const setActions = useSetAtom(atomHeaderActions);
  const setBgTransparent = useSetAtom(atomHeaderTransparent);

  useEffect(() => {
    if ("title" in props && props.title) {
      setTitle(props.title);
    }
    if ("customArea" in props && props.customArea) {
      setCustom(props.customArea);
    }
    subIcons && setIcons(subIcons);
    subActions && setActions(subActions);
    transparent && setBgTransparent(transparent);

    return () => {
      setTitle("");
      setCustom(null);
      setIcons([]);
      setActions([]);
      setBgTransparent(false);
    };
  }, []);
};
