import { useEffect } from "react";

const DEFAULT_TITLE = "SkillMaine — Learn by Direction";

const DEFAULT_DESCRIPTION =
  "SkillMaine is a demo learning platform for discovering courses, comparing skills, exploring learning paths, and building a focused learning journey.";

export default function Seo({ title, description = DEFAULT_DESCRIPTION }) {
  useEffect(() => {
    const previousTitle = document.title;

    const descriptionMeta = document.querySelector('meta[name="description"]');

    const previousDescription = descriptionMeta?.getAttribute("content") ?? "";

    document.title = title ? `${title} — SkillMaine` : DEFAULT_TITLE;

    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", description);
    }

    return () => {
      document.title = previousTitle;

      if (descriptionMeta) {
        descriptionMeta.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);

  return null;
}
