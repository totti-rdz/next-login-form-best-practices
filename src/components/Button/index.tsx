type Props = { children: React.ReactNode; type?: 'submit' | 'button' };

function Button({ children, type = 'button' }: Props) {
  return (
    <button
      type={type}
      className="w-full rounded-md bg-accent py-3 font-semibold text-white outline-2 outline-offset-4 outline-accent hover:bg-accent/90 focus:bg-accent/90 focus:outline"
    >
      {children}
    </button>
  );
}

export default Button;
