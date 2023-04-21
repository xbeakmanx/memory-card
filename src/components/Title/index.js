export default function Title(props) {
  const { children } = props;

  return <h1 className="text-2xl font-bold mt-4 text-white">{children}</h1>;
}
