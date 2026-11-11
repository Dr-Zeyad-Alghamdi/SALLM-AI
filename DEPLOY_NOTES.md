# SALLM AI / سالم — website branding update

## Install
Upload these three files to the root of `Dr-Zeyad-Alghamdi/SALLM-AI` on GitHub Pages, replacing the current versions:
- `index.html` — public homepage, Arabic **سالم**, English **SALLM AI**
- `try.html` — embedded SALLM A7B chat; new conversational Arabic-facing copy
- `research.html` — research lead and evaluation details; formal model-name expansion

## Language and layout refinement
- Refined Arabic and English copy while retaining the friendly Saudi voice.
- Fixed mobile brand wrapping and kept the language toggle prominent.
- Standardized small labels, notices, headings, button sizes and spacing.
- Corrected RTL alignment and isolated Latin model identifiers.
- Updated contact instructions to describe email, subject and message as required; name, organization and phone as optional. Confirm these against your actual Google Form settings.
- Checked desktop and 320/390 px mobile frames, language direction switching, local links, unique IDs and JavaScript syntax.

## What changed
- Arabic product name: **سالم**. Arabic tagline: **خويّك في السوالف، وشريكك في الأفكار.**
- English product name: **SALLM AI**. English tagline: **Your companion for conversations and ideas.**
- Website titles, headers, home artwork, introductory copy and calls to action use the new branding.
- The model family, original foundation credits, evaluation status, Google Form URL, Hugging Face chat iframe, quota guidance, and research contact details are retained.
- Existing Arabic/English language switching and RTL layout are retained.

## Verify after upload
1. Open `index.html?lang=ar`, then `index.html?lang=en`.
2. Check `try.html?lang=ar` and `try.html?lang=en`, including the embedded chat.
3. Check `research.html?lang=ar` and ensure the abbreviation explanation appears there.
4. Click the contact link and confirm it opens the existing Google Form.
5. Verify the mobile layout; static checks do not establish live browser or ZeroGPU behavior.

This package does not change Hugging Face `app.py` or Google Forms. Live model generation, quota enforcement, form submissions and notification delivery were not tested. Confirm release dates, service availability and quota guidance before publishing. The iframe itself retains the separate Hugging Face interface and its own branding until you update that Space independently.

## Homepage chat update — 12 November 2026
- A7B chat is now embedded below the homepage introduction, with lazy loading.
- Primary navigation and hero actions go to #chat. try.html remains a focused chat view and preserves old links.
- Hugging Face access and free-account benefits appear next to the trial. Exact quota figures are dated and linked to official documentation.
- Casual Arabic repetition was reduced across all pages; the original tagline is retained.
- The outer website cannot inspect iframe login, remaining quota or chat history; conversations may not carry between views.
- No backend, Google Form or GitHub deployment was changed.
