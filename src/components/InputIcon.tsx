interface InputIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  type?: string;
  inputChildren?: boolean;
  children?: React.ReactNode;
}

export function InputIcon({
  icon,
  type = "text",
  children,
  ...props
}: InputIconProps) {
  return (
    <div className="w-2/3 flex justify-start items-center relative">
      <span className="material-symbols-outlined absolute w-10 pl-3.5 z-20">
        {icon}
      </span>
      {children ? (
        children
      ) : (
        <input
          {...props}
          type={type}
          className={
            "bg-c-white rounded-lg p-4 w-full " +
            (icon && icon.length > 0 ? "pl-12" : "")
          }
        />
      )}
    </div>
  );
}
