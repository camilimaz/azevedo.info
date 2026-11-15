# azevedo.info

Personal website of Carlos Lima Azevedo, built with [Jekyll](https://jekyllrb.com) and hosted on GitHub Pages.
Migrated in November 2026 from the old WordPress site on scripts.mit.edu, keeping the original PerfectCV look.

## Where to edit what

| What | File |
|---|---|
| Name, job title, photo, phone, office, email, Scholar/LinkedIn links | `_data/profile.yml` |
| "About me" text | `_includes/about.md` |
| Education entries | `_data/education.yml` |
| Experience entries | `_data/experience.yml` |
| Publications | `_sections/01-publications.md` |
| Research projects | `_sections/02-research.md` |
| Teaching | `_sections/03-teaching.md` |
| Top menu | `_data/navigation.yml` |
| Blog posts | `_posts/YYYY-MM-DD-title.md` |
| Images and files | `assets/uploads/` |

Every change pushed to the `main` branch is published automatically within a minute or two.

### Adding a publication

Copy an existing entry in `_sections/01-publications.md` and change it, for example:

```markdown
17\. [\[2026\] "Paper title"](https://doi.org/...)  
Author, A., **Lima Azevedo, C.**, Author, B. *Journal name*. [\[pre-print\]](/assets/papers/file.pdf)
```

(The two spaces at the end of the first line force a line break.)

### Adding a blog post

Create `_posts/2026-11-20-my-post.md`:

```markdown
---
title: My post title
---

Text in Markdown.
```

## Preview locally (optional)

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Credits

Visual theme: PerfectCV by PixelDizajn (originally a WordPress theme), adapted to Jekyll.
