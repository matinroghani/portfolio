import { GitHubRepoType } from "@/types/gitHubRepo";
import { technologyIcons } from "@/utils/technologyi_cons";
import Image from "next/image";
import Link from "next/link";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  project: GitHubRepoType;
};

export default function Project_Card({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-border)] bg-[rgba(3,8,20,0.35)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--color-border-purple)] hover:bg-[var(--color-card-hover)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.32),0_0_35px_rgba(139,92,246,0.10)]">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(167,139,250,0.45)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative aspect-[2/1] w-full shrink-0 overflow-hidden bg-[var(--color-surface)]">
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.045]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(3,8,20,0.28)] via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-4 gap-5">
        <h2 className="line-clamp-1 text-lg font-semibold leading-6 text-[var(--color-text-primary)] transition-colors duration-300 group-hover:text-[var(--color-primary-lighter)]">
          {project.name}
        </h2>

        <p className=" line-clamp-2 text-sm leading-5 text-[var(--color-text-secondary)] transition-colors duration-300 group-hover:text-[var(--color-slate-300)]">
          {project.description}
        </p>

        <div className=" flex flex-wrap gap-2">
          {project.languages.map((language) => {
            const Icon =
              technologyIcons[language as keyof typeof technologyIcons];

            return (
              <span
                key={language}
                className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-border-soft)] bg-[rgba(15,23,42,0.45)] px-2.5 py-2 text-xs font-medium leading-none text-[var(--color-text-secondary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-border-purple)] hover:bg-[rgba(139,92,246,0.08)] hover:text-[var(--color-text-primary)]"
              >
                {Icon && (
                  <Icon
                    className="size-4 shrink-0 transition-transform duration-200 group-hover:scale-105"
                    style={{
                      color:
                        language === "TypeScript"
                          ? "#3178C6"
                          : language === "JavaScript"
                            ? "#F7DF1E"
                            : language === "React"
                              ? "#61DAFB"
                              : language === "Next.js"
                                ? "#FFFFFF"
                                : language === "Tailwind CSS"
                                  ? "#38BDF8"
                                  : language === "CSS"
                                    ? "#1572B6"
                                    : "var(--color-primary-light)",
                    }}
                  />
                )}
                <span>{language}</span>
              </span>
            );
          })}
        </div>

        <div className=" flex items-center gap-3">
          {project.vercelUrl && (
            <Link
              href={project.vercelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-[var(--color-text-secondary)] transition-all duration-200 hover:bg-[rgba(139,92,246,0.08)] hover:text-[var(--color-primary-lighter)]"
            >
              <CiLink className="size-5 text-[var(--color-primary-light)] transition-transform duration-200 group-hover/link:scale-110" />
              <span>Live Demo</span>
            </Link>
          )}

          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-[var(--color-text-secondary)] transition-all duration-200 hover:bg-[rgba(255,255,255,0.04)] hover:text-[var(--color-text-primary)]"
          >
            <FaGithub className="size-[18px] transition-transform duration-200 group-hover/link:scale-110" />
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
