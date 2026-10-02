import { Link } from "react-router-dom";

export default function Brand({ compact = false }) {
  return (
    <Link
      to="/"
      aria-label="SkillMaine home"
      className="group flex shrink-0 items-center gap-3"
    >
      <span className="bg-ink relative flex h-10 w-10 items-center justify-center overflow-hidden text-sm font-black text-white">
        SM
        <span className="bg-lime absolute right-0 bottom-0 h-2.5 w-2.5" />
      </span>

      {!compact && (
        <div>
          <p className="text-ink text-[15px] font-black tracking-[-0.045em] uppercase">
            SkillMaine
          </p>

          <p className="text-ink/45 font-mono text-[8px] tracking-[0.16em] uppercase">
            Learn / Build / Grow
          </p>
        </div>
      )}
    </Link>
  );
}
