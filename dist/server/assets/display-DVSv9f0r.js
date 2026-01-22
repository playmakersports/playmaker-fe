const scrollMaskedHandler = (event, type) => {
  if (!event) return null;
  const eleWidth = event.currentTarget.clientWidth;
  const eleHeight = event.currentTarget.clientHeight;
  const scrollLeft = event.currentTarget.scrollLeft;
  const scrollTop = event.currentTarget.scrollTop;
  const scrollWidth = event.currentTarget.scrollWidth;
  const scrollHeight = event.currentTarget.scrollHeight;
  if (type === "horizontal" && eleWidth < scrollWidth) {
    event.currentTarget.classList.toggle("prev-scroll-mask", scrollWidth - scrollLeft < scrollWidth - 10);
    event.currentTarget.classList.toggle("next-scroll-mask", scrollWidth - scrollLeft > eleWidth + 10);
  }
  if (type === "vertical" && eleHeight < scrollHeight) {
    event.currentTarget.classList.toggle("top-scroll-mask", scrollHeight - scrollTop < scrollHeight - 10);
    event.currentTarget.classList.toggle("bottom-scroll-mask", scrollHeight - scrollTop > eleHeight + 10);
  }
};
const scrollMaskedHandlerRef = (ref, type) => {
  if (!ref) return void 0;
  if (type === "horizontal" && ref.clientWidth < ref.scrollWidth) {
    ref.classList.add("next-scroll-mask");
  }
  if (type === "vertical" && ref.clientHeight < ref.scrollHeight) {
    ref.classList.add("bottom-scroll-mask");
  }
};
export {
  scrollMaskedHandlerRef as a,
  scrollMaskedHandler as s
};
