const projects = [
  {
    name: "Portfolio Platform",
    description:
      "A fast, responsive home for case studies, writing, and experiments.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Featured Case Study",
    description:
      "Replace this card with a project that shows your process, decisions, and impact.",
    stack: ["Product", "Design", "Frontend"],
  },
  {
    name: "Open Source Work",
    description:
      "Highlight packages, contributions, or tools that show how you build in public.",
    stack: ["GitHub", "APIs", "DX"],
  },
];

const skills = [
  "Frontend engineering",
  "Interface design",
  "Performance",
  "Accessibility",
  "Product thinking",
  "Developer experience",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-8 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between border-b border-slate-200 pb-5 text-sm">
          <a className="font-semibold tracking-wide" href="#top">
            Anas Siddiqui
          </a>
          <div className="flex items-center gap-5 text-slate-600">
            <a className="transition hover:text-slate-950" href="#work">
              Work
            </a>
            <a className="transition hover:text-slate-950" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-slate-950" href="#contact">
              Contact
            </a>
          </div>
        </nav>

        <section
          id="top"
          className="grid min-h-[70vh] items-center gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="space-y-7">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal-700">
              Personal portfolio
            </p>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] text-slate-950 sm:text-6xl lg:text-7xl">
                Building thoughtful digital products for the web.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                I am Anas, a developer shaping clean interfaces, useful tools,
                and portfolio-worthy stories with Next.js.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                href="#work"
              >
                View work
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 px-5 text-sm font-semibold text-slate-900 transition hover:border-slate-500"
                href="mailto:hello@example.com"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-slate-500">Current focus</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">
                  Creating a portfolio that feels sharp, personal, and easy to
                  grow.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-6">
                <div>
                  <p className="text-3xl font-semibold text-teal-700">3+</p>
                  <p className="mt-1 text-sm text-slate-500">Featured projects</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-teal-700">100%</p>
                  <p className="mt-1 text-sm text-slate-500">Customizable</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="space-y-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal-700">
                Selected work
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-950">
                Projects to replace with your real wins.
              </h2>
            </div>
            <a className="text-sm font-semibold text-slate-700 hover:text-slate-950" href="#">
              View resume
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                key={project.name}
              >
                <h3 className="text-xl font-semibold text-slate-950">
                  {project.name}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      className="rounded-md bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="grid gap-8 border-y border-slate-200 py-12 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal-700">
              Capabilities
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-950">
              A foundation for the portfolio you want to become.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                key={skill}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="flex flex-col justify-between gap-6 pb-12 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-teal-700">
              Contact
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-950">
              Ready to make this portfolio yours?
            </h2>
          </div>
          <div className="flex gap-4 text-sm font-semibold text-slate-700">
            <a className="hover:text-slate-950" href="mailto:hello@example.com">
              Email
            </a>
            <a className="hover:text-slate-950" href="https://github.com/">
              GitHub
            </a>
            <a className="hover:text-slate-950" href="https://linkedin.com/">
              LinkedIn
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
