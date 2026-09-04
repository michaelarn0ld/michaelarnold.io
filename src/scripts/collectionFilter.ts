// Generic client-side filter + pagination for a collection of items.
//
// Markup contract — a root element with [data-filterable] and:
//   data-page-size="12"                          (items per page)
//   [data-role="topics"]  > button[data-tag]     (topic toggles; optional)
//   [data-role="date-from"] / [data-role="date-to"]  (input[type=date]; optional)
//   [data-role="items"]   > [data-item][data-date][data-tags]  (the items)
//   [data-role="prev"] / [data-role="next"]       (pagination arrows)
//   [data-role="page-info"]                       (e.g. "Page 1 of 9")
//   [data-role="count"]                           (e.g. "42 results"; optional)
//   [data-role="empty"]                           (shown when 0 matches; optional)
//   [data-role="reset"]                           (clears filters; optional)
//
// Item attributes: data-date="YYYY-MM-DD", data-tags="tag1,tag2"

function initFilterable(root: HTMLElement): void {
  const pageSize = Number(root.dataset.pageSize) || 12;

  const itemsWrap = root.querySelector<HTMLElement>('[data-role="items"]');
  if (!itemsWrap) return;
  const items = Array.from(
    itemsWrap.querySelectorAll<HTMLElement>('[data-item]'),
  );

  const topicButtons = Array.from(
    root.querySelectorAll<HTMLButtonElement>('[data-role="topics"] button[data-tag]'),
  );
  const dateFrom = root.querySelector<HTMLInputElement>('[data-role="date-from"]');
  const dateTo = root.querySelector<HTMLInputElement>('[data-role="date-to"]');
  const prevBtn = root.querySelector<HTMLButtonElement>('[data-role="prev"]');
  const nextBtn = root.querySelector<HTMLButtonElement>('[data-role="next"]');
  const pageInfo = root.querySelector<HTMLElement>('[data-role="page-info"]');
  const countEl = root.querySelector<HTMLElement>('[data-role="count"]');
  const emptyEl = root.querySelector<HTMLElement>('[data-role="empty"]');
  const resetBtn = root.querySelector<HTMLButtonElement>('[data-role="reset"]');

  const activeTopics = new Set<string>();
  let page = 1;

  function itemMatches(el: HTMLElement): boolean {
    // Topic filter (OR across selected topics)
    if (activeTopics.size > 0) {
      const tags = (el.dataset.tags || '')
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);
      if (!tags.some((t) => activeTopics.has(t))) return false;
    }
    // Date range (inclusive; empty bound = open)
    const d = el.dataset.date || '';
    if (dateFrom?.value && d < dateFrom.value) return false;
    if (dateTo?.value && d > dateTo.value) return false;
    return true;
  }

  function render(): void {
    const matched = items.filter(itemMatches);
    const totalPages = Math.max(1, Math.ceil(matched.length / pageSize));
    if (page > totalPages) page = totalPages;
    if (page < 1) page = 1;

    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    // Hide everything, then show the current page slice of matched items.
    for (const el of items) el.hidden = true;
    matched.slice(start, end).forEach((el) => (el.hidden = false));

    if (pageInfo) pageInfo.textContent = `Page ${page} of ${totalPages}`;
    if (countEl) {
      countEl.textContent = `${matched.length} result${matched.length === 1 ? '' : 's'}`;
    }
    if (prevBtn) prevBtn.disabled = page <= 1;
    if (nextBtn) nextBtn.disabled = page >= totalPages;
    if (emptyEl) emptyEl.hidden = matched.length !== 0;
  }

  topicButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag!;
      if (activeTopics.has(tag)) {
        activeTopics.delete(tag);
        btn.setAttribute('aria-pressed', 'false');
      } else {
        activeTopics.add(tag);
        btn.setAttribute('aria-pressed', 'true');
      }
      page = 1;
      render();
    });
  });

  dateFrom?.addEventListener('change', () => {
    page = 1;
    render();
  });
  dateTo?.addEventListener('change', () => {
    page = 1;
    render();
  });

  prevBtn?.addEventListener('click', () => {
    page -= 1;
    render();
    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  nextBtn?.addEventListener('click', () => {
    page += 1;
    render();
    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  resetBtn?.addEventListener('click', () => {
    activeTopics.clear();
    topicButtons.forEach((b) => b.setAttribute('aria-pressed', 'false'));
    if (dateFrom) dateFrom.value = '';
    if (dateTo) dateTo.value = '';
    page = 1;
    render();
  });

  render();
}

export function initAllFilterables(): void {
  document
    .querySelectorAll<HTMLElement>('[data-filterable]')
    .forEach((root) => initFilterable(root));
}
