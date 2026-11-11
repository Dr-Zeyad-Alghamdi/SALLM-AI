// Handles bilingual navigation, configured contact links, and local request drafts.
// No request is submitted or persisted; only the language preference is saved locally.
(() => {
  const config = window.SALLM_CONFIG || {};
  const validLanguage = value => value === 'ar' || value === 'en';
  const isArabic = () => document.documentElement.lang === 'ar';
  const english = document.getElementById('lang-en');
  const arabic = document.getElementById('lang-ar');
  const emailOK = value => typeof value === 'string' && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value);
  function safeLink(value, email) {
    if (!value || typeof value !== 'string') return null;
    if (email) return emailOK(value) ? 'mailto:' + value : null;
    try { const url = new URL(value, location.href); return ['https:', 'http:'].includes(url.protocol) ? url.href : null; } catch (_) { return null; }
  }
  let contactsShown = 0;
  document.querySelectorAll('[data-config]').forEach(link => {
    const key = link.dataset.config;
    const href = safeLink(config[key], key.endsWith('_email'));
    if (!href) return;
    link.href = href;
    link.hidden = false;
    if (!key.endsWith('_email')) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    contactsShown++;
  });
  if (contactsShown) document.querySelectorAll('[data-contact-empty]').forEach(el => { el.hidden = true; });
  function apply(lang, remember = false) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    english?.setAttribute('aria-pressed', String(lang === 'en'));
    arabic?.setAttribute('aria-pressed', String(lang === 'ar'));
    document.querySelector('nav')?.setAttribute('aria-label', lang === 'ar' ? 'التنقل الرئيسي' : 'Main navigation');
    const main = document.querySelector('main');
    if (main) document.title = lang === 'ar' ? main.dataset.titleAr : main.dataset.titleEn;
    // Keep the selected language when visitors move between the static HTML pages.
    document.querySelectorAll('a[href]').forEach(link => {
      const raw = link.getAttribute('href');
      if (!raw || raw.startsWith('#') || /^(https?:|mailto:|tel:)/i.test(raw)) return;
      try { const url = new URL(raw, location.href); if (url.pathname.endsWith('.html')) { url.searchParams.set('lang', lang); link.setAttribute('href', url.pathname.split('/').pop() + url.search + url.hash); } } catch (_) {}
    });
    if (remember) {
      try { localStorage.setItem('sallm-language', lang); } catch (_) {}
      try { const url = new URL(location.href); url.searchParams.set('lang', lang); history.replaceState(null, '', url); } catch (_) {}
    }
  }
  let saved;
  try { saved = localStorage.getItem('sallm-language'); } catch (_) {}
  const query = new URLSearchParams(location.search).get('lang');
  apply(validLanguage(query) ? query : validLanguage(saved) ? saved : (navigator.language || '').startsWith('ar') ? 'ar' : 'en');
  english?.addEventListener('click', () => apply('en', true));
  arabic?.addEventListener('click', () => apply('ar', true));
  const recipients = { collaboration: 'research_email', issue: 'support_email', data: 'data_email', access: 'access_email' };
  document.querySelectorAll('.request-form').forEach(form => {
    const panel = form.querySelector('.draft-panel');
    const output = form.querySelector('#draft-output');
    const status = form.querySelector('.draft-status');
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const lines = [document.title, ''];
      form.querySelectorAll('.field').forEach(field => {
        const control = field.querySelector('input, textarea, select');
        const label = field.querySelector('label');
        const localLabel = label.querySelector(isArabic() ? '[lang="ar"]' : '[lang="en"]');
        lines.push((localLabel?.textContent || label.textContent).trim() + ':', control.value.trim(), '');
      });
      output.value = lines.join('\n');
      panel.hidden = false;
      status.textContent = isArabic() ? 'تم إعداد المسودة محليًا. لم تُرسل.' : 'Draft prepared locally. Not sent.';
      const recipient = config[recipients[form.dataset.kind]] || config.general_email;
      const mail = form.querySelector('[data-mail]');
      mail.hidden = !emailOK(recipient);
      form.querySelector('[data-mail-unavailable]').hidden = emailOK(recipient);
      if (emailOK(recipient)) mail.href = 'mailto:' + recipient + '?subject=' + encodeURIComponent(document.title) + '&body=' + encodeURIComponent(output.value);
      output.focus();
    });
    form.querySelector('button[type="submit"]').disabled = false;
    form.querySelector('[data-copy]').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(output.value); status.textContent = isArabic() ? 'تم نسخ المسودة. لم تُرسل.' : 'Draft copied. Not sent.'; }
      catch (_) { output.focus(); output.select(); status.textContent = isArabic() ? 'النص محدد؛ انسخه يدويًا.' : 'Text selected. Copy it manually.'; }
    });
    form.querySelector('[data-download]').addEventListener('click', () => {
      const url = URL.createObjectURL(new Blob(['\uFEFF' + output.value], {type:'text/plain;charset=utf-8'}));
      const a = document.createElement('a'); a.href = url;
      a.download = 'SALLM-' + form.dataset.kind + '-request.txt';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      status.textContent = isArabic() ? 'تم تجهيز تنزيل المسودة. لم تُرسل.' : 'Draft download prepared. Not sent.';
    });
  });
})();
