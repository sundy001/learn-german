import cx from "classnames";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
};

export const Tooltip = ({ children, isOpen }: Props) => {
  return (
    <div
      role="tooltip"
      className={cx(
        "absolute bottom-[calc(100%+4px)] left-1/2 z-10 w-max max-w-6xl translate-x-[-50%] rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700",
        {
          "opacity-100": isOpen,
        }
      )}
    >
      {children}
      <div className="tooltip-arrow" data-popper-arrow></div>
    </div>
  );
};
