# SALLM bilingual release website

Upload the **contents** of this folder to the existing GitHub Pages publishing directory. Keep `index.html` at the root and preserve the `assets` folder. This package replaces the previous single-file page; uploading index.html alone will not work.

## Pages

- `index.html`: public introduction, models, example placeholders, evaluation status, news, compact roadmap, and research lead.
- `research.html`: contribution, meaning of social alignment, unpublished evaluation placeholders.
- `about.html`: researcher profile, CV and professional links, selected-publication placeholder.
- `collaborate.html`: collaboration proposal draft.
- `report-issue.html`: technical, content, safety, or privacy report draft.
- `request-data.html`: research-data enquiry draft; access is not promised.
- `request-access.html`: restricted-model access enquiry draft.
- `contact.html`: contact links and request routes.
- `disclaimer.html`: full research-use notice.

## Fill in contact information

Edit `assets/config.js`. Leave unknown values empty. Empty links are hidden publicly. Supported fields: general_email, research_email, support_email, safety_email, privacy_email, media_email, access_email, data_email, organization, website, linkedin, scholar, cv, social, response_time.

The dedicated request pages use the matching email, falling back to general_email. Use the same mailbox for all if desired. The contact page initially exposes general, research, support, privacy, website, and LinkedIn. Other fields are reserved for future use. CV / Google Scholar / LinkedIn appear on about.html when populated. Use HTTPS URLs or relative file paths for your CV; do not enter credentials.

## Replace the fillers

- Search `EXAMPLE 1`, `EXAMPLE 2`, and `EXAMPLE 3` in index.html. Insert actual reviewed prompts and outputs. Record model, checkpoint, generation settings as appropriate, and date. Do not label illustrative examples as performance evidence.
- Fill research.html evaluation table only after results are established. Add sample size, baseline, procedure, uncertainty, and limitations together.
- Fill the selected-research area in about.html with verified publication titles, venues, and links. Confirm profile wording and affiliation before publishing.
- Search `LATEST UPDATES` and `NEW NOTICE TEMPLATE` in index.html. Add newest announcements first. Outage notices should identify affected models, timestamp/timezone, impact, and next update. Mark incidents resolved explicitly. This is manual news, not automatic monitoring.
- Keep both English and Arabic spans updated. They are human-written content, not automatic translation.

## How request pages work

Visitors complete a form, then select **Prepare request**. The page creates a local text draft. Visitors may copy or download it. Once an email is configured, **Open email draft** opens the visitor's mail application; they still choose whether to send. There is no server submission, ticketing system, file upload, automatic response, or request database. Form contents are not saved on refresh. Only language preference is stored locally.

Long email drafts may exceed email-app URL limits. Copy/download is the fallback. Do not present this as a working ticket portal until a backend or external form service is deliberately connected.

## Before public outreach

1. Add at least one real email and your LinkedIn or researcher page.
2. Replace or remove example/publication placeholders.
3. Verify all three demo destinations and their availability.
4. Review current logging/privacy behaviour of the demos; the generic usage notice is not a full privacy policy or legal contract.
5. Open both languages on a phone and desktop. Check navigation, form validation, drafts, downloads, and email behaviour.
6. Review wording for data access and licences before sharing any dataset.

No live GitHub deployment was performed. No logo or fictional evaluation result is included. These are static pages and can be opened locally, although clipboard and email behaviour varies by browser.
