import { writeFileSync } from "fs";

const stub = (name) =>
    `'use client';\nimport NavBar from '@/components/NavBar';\n\nexport default function ${name}() {\n    return (\n        <div className="min-h-screen bg-white pb-28">\n            <NavBar />\n        </div>\n    );\n}\n`;

writeFileSync(
    "src/app/(pages)/(in the app)/(learn)/LearningPage/page.tsx",
    stub("LearningPage"),
    "utf8",
);
writeFileSync(
    "src/app/(pages)/(in the app)/(parent)/ParentPage/page.tsx",
    stub("ParentPage"),
    "utf8",
);
writeFileSync(
    "src/app/(pages)/(in the app)/TutorPage/page.tsx",
    stub("TutorPage"),
    "utf8",
);
console.log("Done");
