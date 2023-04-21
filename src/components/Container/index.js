export default function Container(props) {
  const { children } = props;
  return (
    <div className="dark:bg-slate-800 min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        {children}
      </div>
    </div>
  );
}
