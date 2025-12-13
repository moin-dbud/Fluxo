const Button = ({ variant = "primary", children, href }) => {
  const base =
    "inline-flex items-center gap-2 px-10 py-3 rounded-lg text-sm font-medium transition";

  const styles = {
    primary:
      "bg-blue-600 text-[16px] text-white hover:bg-blue-700",
    secondary:
      "border border-black-500 text-gray-900 hover:bg-gray-100",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
};

export default Button;
