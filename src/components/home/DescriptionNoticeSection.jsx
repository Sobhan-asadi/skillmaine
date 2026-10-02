import {
  HiArrowUpRight,
  HiOutlineBolt,
  HiOutlineCodeBracket,
  HiOutlineMap,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const principles = [
  {
    number: "01",
    icon: HiOutlineMap,
    title: "Choose a direction",
    description:
      "Explore focused learning fields instead of getting lost in an endless course catalog.",
  },
  {
    number: "02",
    icon: HiOutlineCodeBracket,
    title: "Build practical skills",
    description:
      "Learn concepts that connect directly to useful tools, workflows, and real project skills.",
  },
  {
    number: "03",
    icon: HiOutlineBolt,
    title: "Keep moving",
    description:
      "Compare levels and topics, then continue with the next skill that supports your goals.",
  },
];

export default function DescriptionNoticeSection() {
  return (
    <section className="bg-electric relative overflow-hidden text-white">
      <div className="site-container">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative border-white/20 py-20 lg:border-r lg:py-28 lg:pr-12 xl:pr-16">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 hidden h-full w-px bg-white/10 lg:block"
            />

            <div className="flex items-center gap-3">
              <span className="bg-lime h-2.5 w-2.5" />

              <p className="section-kicker text-white/55">
                Learning approach / 03
              </p>
            </div>

            <h2 className="mt-7 max-w-[620px] text-[clamp(3rem,6vw,6.4rem)] leading-[0.86] font-black tracking-[-0.075em] uppercase">
              Less
              <br />
              scrolling.
              <br />
              <span className="text-lime">
                More
                <br />
                learning.
              </span>
            </h2>

            <p className="mt-8 max-w-[480px] text-sm leading-7 text-white/65 sm:text-base">
              SkillMaine keeps discovery focused: choose a field, understand
              what a course covers, and move toward the skills you actually want
              to build.
            </p>

            <Link
              to="/courses"
              className="group text-ink hover:bg-lime mt-9 inline-flex items-center gap-4 border-2 border-white bg-white px-5 py-4 transition duration-300 hover:-translate-y-1"
            >
              <span>
                <span className="text-ink/45 block font-mono text-[8px] font-bold tracking-[0.12em] uppercase">
                  Browse catalog
                </span>

                <span className="mt-1 block text-sm font-black uppercase">
                  Find your next skill
                </span>
              </span>

              <HiArrowUpRight
                aria-hidden="true"
                className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="border-t border-white/20 py-6 lg:border-t-0 lg:py-14 lg:pl-12 xl:pl-16">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-white/20 pb-5">
                <p className="font-mono text-[9px] font-bold tracking-[0.12em] text-white/45 uppercase">
                  How it works
                </p>

                <p className="text-lime font-mono text-[9px] font-bold tracking-[0.12em] uppercase">
                  03 steps
                </p>
              </div>

              <div className="flex flex-1 flex-col">
                {principles.map((principle) => {
                  const Icon = principle.icon;

                  return (
                    <div
                      key={principle.number}
                      className="group grid flex-1 gap-5 border-b border-white/20 py-7 last:border-b-0 sm:grid-cols-[55px_56px_minmax(0,1fr)] sm:items-center lg:py-8"
                    >
                      <span className="font-mono text-[9px] font-bold text-white/35">
                        / {principle.number}
                      </span>

                      <span className="text-lime group-hover:bg-lime group-hover:text-ink flex h-12 w-12 items-center justify-center border border-white/25 transition-colors duration-300">
                        <Icon aria-hidden="true" className="text-xl" />
                      </span>

                      <div>
                        <h3 className="text-xl font-black tracking-[-0.04em] uppercase sm:text-2xl">
                          {principle.title}
                        </h3>

                        <p className="mt-2 max-w-[520px] text-sm leading-6 text-white/55">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 grid grid-cols-3 border border-white/20">
                <div className="p-4 sm:p-5">
                  <p className="font-mono text-[8px] tracking-[0.1em] text-white/40 uppercase">
                    Courses
                  </p>

                  <p className="mt-2 text-2xl font-black tracking-[-0.05em]">
                    12
                  </p>
                </div>

                <div className="border-x border-white/20 p-4 sm:p-5">
                  <p className="font-mono text-[8px] tracking-[0.1em] text-white/40 uppercase">
                    Fields
                  </p>

                  <p className="mt-2 text-2xl font-black tracking-[-0.05em]">
                    04
                  </p>
                </div>

                <div className="p-4 sm:p-5">
                  <p className="font-mono text-[8px] tracking-[0.1em] text-white/40 uppercase">
                    Mode
                  </p>

                  <p className="mt-2 text-sm font-black tracking-[-0.03em] uppercase sm:text-base">
                    Self-paced
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-ink bg-lime text-ink border-t-2 py-3">
        <div className="site-container">
          <p className="text-center font-mono text-[9px] font-bold tracking-[0.12em] uppercase">
            Pick a direction · Build a skill · Keep moving
          </p>
        </div>
      </div>
    </section>
  );
}
