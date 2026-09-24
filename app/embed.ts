/** Adapt only the same-origin bundled application shown in the portfolio. */
export function prepareEmbed(frame: HTMLIFrameElement, id: string, onHint: (hint: string) => void, close: () => void) {
    const doc = frame.contentDocument;
    if (!doc)
        return;
    doc.documentElement.dataset.portfolioProject = id;
    const style = doc.createElement('link');
    style.rel = 'stylesheet';
    style.href = '/demos/portfolio.css';
    doc.head.appendChild(style);
    doc.addEventListener('keydown', event => { if (event.key === 'Escape' && !event.defaultPrevented && !doc.pointerLockElement && !doc.querySelector('dialog[open], [role="dialog"], [role="menu"], [role="listbox"]'))
        close(); });
    const check = () => { if (id === 'denver' && doc.querySelector('#fallback:not([hidden])'))
        onHint('Map edition: explore the numbered landmarks. The 3D view requires WebGL.'); if (id === 'painted' && doc.querySelector('.art-only'))
        onHint('Original-art edition: search the collection and open a painting. The walkable worlds require WebGL.'); if (id === 'fort-collins' && doc.querySelector('.aerial-fallback'))
        onHint('Aerial edition: try Green streets and Compare. The 3D view requires WebGL.'); if (id === 'gravity' && doc.getElementById('stage-status')?.textContent === 'Unable to open the 3D view' && !doc.querySelector('.portfolio-load-error')) {
        onHint('The laboratory could not start. Retry below, or return to the project gallery.');
        const app = doc.getElementById('app');
        const loading = doc.getElementById('loading') || doc.querySelector('.load-message');
        if (app && loading) {
            const panel = doc.createElement('section');
            panel.className = 'portfolio-load-error';
            const title = doc.createElement('h1');
            title.textContent = 'Gravity, Unscripted.';
            panel.appendChild(title);
            loading.className = 'portfolio-error-message';
            panel.appendChild(loading);
            const download = doc.createElement('a');
            download.href = '/demos/gravity/nbody-experiments.zip';
            download.textContent = 'Download the original calculations ↗';
            panel.appendChild(download);
            app.hidden = true;
            doc.body.appendChild(panel);
        }
    } };
    check();
    const observer = new MutationObserver(check);
    observer.observe(doc.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'hidden'] });
    frame.contentWindow?.addEventListener('pagehide', () => observer.disconnect(), { once: true });
}
