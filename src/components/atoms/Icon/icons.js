import React, { Fragment } from "react";

class Icon {
  constructor(viewBox, svg) {
    this.viewBox = viewBox;
    this.svg = <Fragment>{svg}</Fragment>;
  }
}

const svgs = {
  check: new Icon(
    "0 0 40 40",
    (
      <path
        d="M28 0C12.5614 0 0 12.5614 0 28C0 43.4386 12.5614 56 28 56C43.4386 56 56 43.4386 56 28C56 12.5614 43.4386 0 28 0ZM43.6491 20.6316L25.7544 38.386C24.7018 39.4386 23.0175 39.5088 21.8947 38.4561L12.4211 29.8246C11.2982 28.7719 11.2281 27.0175 12.2105 25.8947C13.2632 24.7719 15.0175 24.7018 16.1404 25.7544L23.6491 32.6316L39.6491 16.6316C40.7719 15.5088 42.5263 15.5088 43.6491 16.6316C44.7719 17.7544 44.7719 19.5088 43.6491 20.6316Z"
        fill="#181F0A"
      />
    )
  ),
  exit: new Icon(
    "0 0 40 40",
    (
      <path
        d="M36.3699 0.0250244C36.3284 0.0216675 36.2933 0 36.25 0H18.3334C15.5768 0 13.3334 2.24335 13.3334 5V6.66656C13.3334 7.58667 14.0799 8.33344 15 8.33344C15.9201 8.33344 16.6666 7.58667 16.6666 6.66656V5C16.6666 4.08173 17.4149 3.33344 18.3334 3.33344H26.0983L25.5899 3.50342C24.2401 3.97003 23.3334 5.2417 23.3334 6.66656V31.6666H18.3334C17.4149 31.6666 16.6666 30.9183 16.6666 30V26.6666C16.6666 25.7468 15.9201 25 15 25C14.0799 25 13.3334 25.7468 13.3334 26.6666V30C13.3334 32.7567 15.5768 35 18.3334 35H23.3334V36.6666C23.3334 38.5049 24.8282 40 26.6666 40C27.0233 40 27.3618 39.9484 27.7283 39.8349L37.7417 36.4966C39.0933 36.03 40 34.7583 40 33.3334V3.33344C40 1.39008 38.3249 -0.133362 36.3699 0.0250244Z M17.8448 15.4883L11.1783 8.82172C10.7016 8.34504 9.98505 8.20161 9.36157 8.46009C8.73993 8.71827 8.33344 9.32679 8.33344 10V15H1.66656C0.746765 15 0 15.7468 0 16.6666C0 17.5867 0.746765 18.3334 1.66656 18.3334H8.33344V23.3334C8.33344 24.0067 8.73993 24.6149 9.36157 24.8734C9.98505 25.1315 10.7016 24.9884 11.1783 24.5117L17.8448 17.8449C18.4967 17.1933 18.4967 16.1401 17.8448 15.4883Z"
        fill="#F5F6FA"
      />
    )
  ),
  hint: new Icon(
    "0 0 40 40",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.1371 15.0518C32.225 7.61016 26.3518 1.75176 18.9079 0.858579C18.267 0.785435 17.6225 0.748794 16.9773 0.748657C10.3987 0.758774 4.4752 4.73456 1.97352 10.8189C-0.528164 16.9033 0.885645 23.896 5.55459 28.5306C8.0374 30.9083 9.45928 34.1849 9.49988 37.6224V39.4999H24.4998V37.6127C24.5112 34.2402 25.8832 31.0152 28.3049 28.668C31.9626 25.1389 33.7519 20.0971 33.1371 15.0518ZM17 52C18.5887 51.9982 20.0044 50.9972 20.5358 49.5H13.4643C13.9956 50.9972 15.4113 51.9982 17 52ZM12.0001 47.0001C11.31 46.9991 10.751 46.4401 10.75 45.75V42H23.2501V45.75C23.2491 46.4401 22.6901 46.9991 22.0001 47.0001H12.0001ZM12.9395 27.1641C10.8301 26.5723 9.77539 25.21 9.77539 23.0771V21.3369C9.77539 20.1533 9.30078 19.5615 8.35156 19.5615V17.5664C9.30078 17.5664 9.77539 16.9717 9.77539 15.7822V13.9365C9.79297 12.8818 10.0654 12.0293 10.5928 11.3789C11.126 10.7285 11.9082 10.2568 12.9395 9.96387L13.4932 11.5107C12.7549 11.792 12.3711 12.5801 12.3418 13.875V15.7822C12.3418 17.0947 11.7998 18.0205 10.7158 18.5596C11.7998 19.0986 12.3418 20.0273 12.3418 21.3457V23.2441C12.3711 24.5391 12.7549 25.3271 13.4932 25.6084L12.9395 27.1641ZM15.6992 25.0986H13.5986L17.9668 11.2031H20.0762L15.6992 25.0986ZM21.6934 23.2441C21.6641 24.5391 21.2803 25.3271 20.542 25.6084L21.0957 27.1641C23.1641 26.584 24.2188 25.2627 24.2598 23.2002V21.3281C24.2598 20.1504 24.7344 19.5615 25.6836 19.5615V17.5664C24.7344 17.5664 24.2598 16.9717 24.2598 15.7822V14.0156C24.2539 12.9375 23.9873 12.0674 23.46 11.4053C22.9326 10.7373 22.1445 10.2568 21.0957 9.96387L20.542 11.5107C21.2803 11.792 21.6641 12.5801 21.6934 13.875V15.7822C21.6934 17.1006 22.2383 18.0264 23.3281 18.5596C22.2383 19.0928 21.6934 20.0186 21.6934 21.3369V23.2441Z"
        fill="#F5F6FA"
      />
    )
  ),
  default: null,
};

export default svgs;
