import { atom, useSetAtom } from "jotai";
import { useLayoutEffect, useEffect } from "react";
const atomPageTitle = atom("");
const atomHeaderOnClickBack = atom(null);
const atomHeaderCustomArea = atom(null);
const atomHeaderIcons = atom([]);
const atomHeaderActions = atom(
  []
);
const atomHeaderTransparent = atom(false);
const atomHeaderOptions = atom();
const atomHeaderDisplay = atom(true);
const useHeader = (props = {}) => {
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
      setHeaderOptions({});
    };
  }, []);
  useEffect(() => {
    subActions && setActions(subActions);
    return () => {
      setActions([]);
    };
  }, [subActions]);
};
export {
  atomPageTitle as a,
  atomHeaderTransparent as b,
  atomHeaderDisplay as c,
  atomHeaderActions as d,
  useHeader as u
};
