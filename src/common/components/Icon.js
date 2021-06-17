import icons from "common/icons.svg";

export function Icon({
  name,
  color = "currentColor",
  width = 20,
  height = 20,
}) {
  return (
    <svg
      fill={color}
      width={width}
      height={height}
      className="icon"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use href={icons + "#" + name} />
    </svg>
  );
}
