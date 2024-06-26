import { MouseEventHandler } from "react";

type NavbarToggleProps = {
  isActive: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
};
export const NavbarToggle = ({ isActive, onClick }: NavbarToggleProps) => {
  return (
    <div className="nav__toggle" onClick={onClick}>
      {!isActive ? (
        <svg
          id="bars"
          className="svg-inline--fa fa-bars"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          ></path>
        </svg>
      ) : (
        <svg
          id="xmark"
          className="svg-inline--fa fa-xmark hidden"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="xmark"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          ></path>
        </svg>
      )}
    </div>
  );
};
