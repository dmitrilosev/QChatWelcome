import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(path, "utf8");

const groups = [
  {
    canonical: "https://qchat.nl/",
    files: ["index.html", "en/index.html", "ru/index.html"],
    duplicate: "en/index.html",
  },
  {
    canonical: "https://qchat.nl/bio/",
    files: ["bio/index.html", "bio/en/index.html", "bio/ru/index.html"],
    duplicate: "bio/en/index.html",
  },
  {
    canonical: "https://qchat.nl/agentfoundry/",
    files: [
      "agentfoundry/index.html",
      "agentfoundry/en/index.html",
      "agentfoundry/ru/index.html",
    ],
    duplicate: "agentfoundry/en/index.html",
  },
];

const duplicateUrls = [
  "https://qchat.nl/en/",
  "https://qchat.nl/bio/en/",
  "https://qchat.nl/agentfoundry/en/",
];

for (const group of groups) {
  for (const file of group.files) {
    const html = read(file);
    assert.ok(
      html.includes(
        `<link rel="alternate" hreflang="en" href="${group.canonical}">`,
      ),
      `${file} must point its English hreflang to ${group.canonical}`,
    );
  }

  const duplicateHtml = read(group.duplicate);
  assert.ok(
    duplicateHtml.includes(`<link rel="canonical" href="${group.canonical}">`),
    `${group.duplicate} must canonicalize to ${group.canonical}`,
  );
  assert.ok(
    duplicateHtml.includes(`<meta property="og:url" content="${group.canonical}">`),
    `${group.duplicate} must use the canonical URL for og:url`,
  );
}

const sitemap = read("sitemap.xml");
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.deepEqual(sitemapUrls, [
  "https://qchat.nl/",
  "https://qchat.nl/ru/",
  "https://qchat.nl/bio/",
  "https://qchat.nl/agentfoundry/",
  "https://qchat.nl/agentfoundry/ru/",
  "https://qchat.nl/bio/ru/",
  "https://qchat.nl/privacy_policy.html",
]);

for (const excluded of [
  ...duplicateUrls,
  "https://qchat.nl/store/",
]) {
  assert.ok(!sitemapUrls.includes(excluded), `${excluded} must not be in sitemap.xml`);
}

for (const file of groups.flatMap((group) => group.files)) {
  const html = read(file);
  for (const duplicateUrl of duplicateUrls) {
    assert.ok(
      !html.includes(duplicateUrl),
      `${file} must not advertise duplicate URL ${duplicateUrl}`,
    );
  }
  assert.ok(
    !/href="[^"]*(?:\/en\/|\.\.\/en\/|^en\/)/.test(html),
    `${file} must not link visitors to a duplicate English route`,
  );
}

assert.ok(
  read("privacy_policy.html").includes(
    '<link rel="canonical" href="https://qchat.nl/privacy_policy.html">',
  ),
  "privacy policy must declare its canonical URL",
);

console.log("SEO signals are consistent across canonical, hreflang, and sitemap URLs.");
