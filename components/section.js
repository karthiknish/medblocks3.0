export default function Section({ children, className }) {
  return (
    <div className={className}>
      <div className={`max-w-7xl m-auto px-10 py-20 my-30`}>{children}</div>
    </div>
  );
}
