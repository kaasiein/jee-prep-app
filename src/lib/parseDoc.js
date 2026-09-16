import { marked } from "marked";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/**
 * Parses a full markdown document into:
 *  - title: the H1 heading text
 *  - subtitle: any plain paragraph(s) immediately under the H1, as HTML
 *  - sections: one entry per H2 heading, each with an id (for anchor
 *    links / scroll-spy), a title, and its rendered HTML body (including
 *    any H3s and content nested under that H2).
 *
 * Used to turn a long reference document (like the design doc) into a
 * browsable page with a sticky table of contents, instead of dumping raw
 * markdown or forcing it into an unrelated accordion shape.
 */
export function parseDocIntoSections(markdown) {
  const tokens = marked.lexer(markdown);
  let title = "";
  const introTokens = [];
  const sections = [];
  let current = null;

  for (const token of tokens) {
    if (token.type === "heading" && token.depth === 1 && !title) {
      title = token.text;
      continue;
    }
    if (token.type === "heading" && token.depth === 2) {
      current = { id: slugify(token.text), title: token.text, tokens: [] };
      sections.push(current);
      continue;
    }
    if (token.type === "hr") continue; // separators aren't meaningful once we have real section breaks
    if (current) current.tokens.push(token);
    else introTokens.push(token);
  }

  return {
    title,
    introHtml: introTokens.length ? marked.parser(introTokens) : "",
    sections: sections.map((s) => ({ id: s.id, title: s.title, html: marked.parser(s.tokens) })),
  };
}
