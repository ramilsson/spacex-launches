export function LaunchLinks({ links }) {
  return (
    <div className="launchPanel__links badges">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="badge"
        >
          {link.newName}
        </a>
      ))}
    </div>
  );
}
