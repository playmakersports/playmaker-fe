const t={semibold:600,medium:500,regular:400},n={head1:e=>`font-size: 6.4rem; line-height: 8rem; font-weight: ${t[e]}`,head2:e=>`font-size: 5.6rem; line-height: 7.2rem; font-weight: ${t[e]}`,head3:e=>`font-size: 4.8rem; line-height: 6.4rem; font-weight: ${t[e]}`,head4:e=>`font-size: 4rem; line-height: 5.6rem; font-weight: ${t[e]}`,head5:e=>`font-size: 3.2rem; line-height: 4rem; font-weight: ${t[e]}`,head6:e=>`font-size: 2.4rem; line-height: 3.2rem; font-weight: ${t[e]}`,body1:e=>`font-size: 2rem; line-height: 3rem; font-weight: ${t[e]}`,body2:e=>`font-size: 1.8rem; line-height: 2.8rem; font-weight: ${t[e]}`,body3:e=>`font-size: 1.6rem; line-height: 2.4rem; font-weight: ${t[e]}`,body4:e=>`font-size: 1.4rem; line-height: 2rem; font-weight: ${t[e]}`,caption1:e=>`font-size: 1.2rem; line-height: 1.8rem; font-weight: ${t[e]}`},o=`
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
}`,a=`
  transition: all 0.2s;
  &:active {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.01);
    transform: translateY(2px);
  }
`,r=(e,i)=>`
    border-radius: 8px;
    transition: all 0.2s;
    user-select: none;
    &:active {
      transform: scale(0.98);
      background-color: ${e??"var(--background)"};
    }
`,s=e=>`
    position: relative;
    overflow: hidden;

    .prev-scroll-mask {
      ${o};
      &:before {
      content: "";
      position: absolute;
      width: 36px;
      height: 100%;
      top: 0;
      left: -1px;
      background-image: linear-gradient(to right, rgba(${e}) 10%, rgba(${e}, 0) 100%);
      z-index: 1;
    }};
    .next-scroll-mask {
      ${o};
      &:after {
      content: "";
      position: absolute;
      width: 36px;
      height: 100%;
      top: 0;
      right: -1px;
      background-image: linear-gradient(to left, rgba(${e}) 10%, rgba(${e}, 0) 100%);
      z-index: 1;
    }};
    .top-scroll-mask {
      ${o};
      &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 36px;
      top: 0;
      left: -1px;
      background-image: linear-gradient(to bottom, rgba(${e}) 10%, rgba(${e}, 0) 100%);
      z-index: 1;
    }};
    .bottom-scroll-mask {
      ${o};
      &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 36px;
      bottom: 0;
      left: -1px;
      background-image: linear-gradient(to top, rgba(${e}) 10%, rgba(${e}, 0) 100%);
      z-index: 1;
    }};
 `,h=(e,i)=>`
  transition: box-shadow 0.2s cubic-bezier(0.05, 0, 0, 1), background-color 0.2s cubic-bezier(0.05, 0, 0, 1),
    transform 0.3s cubic-bezier(0.05, 0, 0, 1);
  &:active ${i?.hover?", &:hover":""} ${i?.focus?", &:focus":""} {
    background-color: ${e??"var(--background)"};
    box-shadow: 0 0 0 ${i?.activeRange??8}px ${e??"var(--background)"};
    ${i?.scalable?"transform: scale(0.97);":""}
  }
`;export{r as B,a as C,n as F,s as S,h as T,o as a};
