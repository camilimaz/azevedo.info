# azevedo.info

Personal website of Carlos Lima Azevedo, built with [Jekyll](https://jekyllrb.com) and hosted on GitHub Pages.
Migrated in November 2026 from the old WordPress site on scripts.mit.edu, keeping the original PerfectCV look.

## Where to edit what

| What | File |
|---|---|
| Name, job title, photo, phone, office, email, profile links | `_data/profile.yml` |
| "About me" text | `_includes/about.md` |
| Experience / Education (home page) | `_data/experience.yml`, `_data/education.yml` |
| Publications page | `_data/publications.yml` |
| Projects page | `projects.md` |
| Students page | `_data/students.yml` |
| Teaching page | `teaching.md` |
| Top menu | `_data/navigation.yml` |
| Blog posts | `_posts/YYYY-MM-DD-title.md` |
| Colours, fonts, layout | `assets/css/main.css` |
| Images and files | `assets/uploads/` |

Every change pushed to the `main` branch is published automatically within a minute or two.

### Adding a publication

Copy an entry in `_data/publications.yml` and edit it (keep newest first within each type):

```yaml
- type: journal          # journal | conference | book | talk
  year: 2026
  title: Paper title
  url: https://doi.org/10.xxxx/xxxxx
  details: 'Author, A., **Lima Azevedo, C.**, Author, B. *Journal name*, 12(3).'
  links:
  - label: DTU Orbit
    url: https://orbit.dtu.dk/en/publications/...
```

### Adding a student

Copy a line in `_data/students.yml`. Add `linkedin: https://www.linkedin.com/in/...` to link their name.

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

Design inspired by the PerfectCV WordPress theme used on the original site.
