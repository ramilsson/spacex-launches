export function LaunchSuccessLabel({ isSuccess }) {
  const text = isSuccess ? "Mission success!" : "Mission failed!";
  const className = isSuccess ? "text text_success" : "text text_danger";

  return <span className={className}>{text}</span>;
}
