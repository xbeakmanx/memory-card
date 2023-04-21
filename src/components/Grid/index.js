export default function Grid(props) {
  const { children } = props;
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
      {children}
    </div>
  );
}
