export default function Projectcardd({ project, index = 0 }) {
  const delay = `${index * 120}ms`;
  return (
    <article className="card" style={{ animationDelay: delay }}>
      <div className="card-media" aria-hidden="true">
        <div className="card-thumb">{project.title.split(" ")[0]}</div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.description}</p>
        <div className="card-tags">
          {project.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="card-actions">
          <a className="btn small" href={project.link}>
            View
          </a>
        </div>
      </div>
    </article>
  );
}
