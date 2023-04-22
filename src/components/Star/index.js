export default function Star({ src }) {
  return <img src={src ? src : "star.png"} alt="star" width="44px" />;
}
