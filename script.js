// ══════════════════════════════════
    // SPLASH SCREEN
    // ══════════════════════════════════
    function hideSplash() {
  const splash = document.getElementById('splash');
    if (!splash) return;
    splash.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    splash.style.opacity = '0';
    splash.style.transform = 'scale(1.03)';
    splash.style.pointerEvents = 'none';
    splash.classList.add('hidden');
    setTimeout(function () {
        splash.style.display = 'none';
    animateCounters();
    setTimeout(animateSkills, 600);
  }, 650);
}
    setTimeout(hideSplash, 2000);
    // ══════════════════════════════════
    // GLOBAL SEARCH
    // ══════════════════════════════════
    // Index of all searchable items
    const SEARCH_INDEX = [
    // Pages
    {type: 'page', name: 'الصفحة الرئيسية', ico: '🏠', action: () => spDirect('home') },
    {type: 'page', name: 'بيانات المتدرب — الحمداوي رشيد', ico: '👤', action: () => spDirect('home') },
    {type: 'page', name: 'ملفي التراكمي', ico: '📁', action: () => spDirect('personal') },
    {type: 'page', name: 'المعطيات الشخصية', ico: '📋', action: () => spDirect('personal') },
    {type: 'page', name: 'رسالة التحفيز', ico: '💌', action: () => {spDirect('personal'); setTimeout(() => openPdf('رسالة التحفيز', 'documents/donnees/motivation.pdf'), 100); } },
    {type: 'page', name: 'السيرة الذاتية', ico: '📄', action: () => {spDirect('personal'); setTimeout(() => openPdf('السيرة الذاتية', 'documents/donnees/cv.pdf'), 100); } },
    {type: 'page', name: 'التحليل التركيبي', ico: '📊', action: () => spDirect('analysis') },
    {type: 'page', name: 'تحليل تركيبي لأنشطة التكوين', ico: '📘', action: () => spAndOpen('analysis', 'an-t') },
    {type: 'page', name: 'تحليل تركيبي لأنشطة التداريب', ico: '🏫', action: () => spAndOpen('analysis', 'an-f') },
    {type: 'page', name: 'أنشطة التداريب الميدانية', ico: '🏫', action: () => spDirect('training') },
    {type: 'page', name: 'السنة التكوينية الأولى', ico: '📝', action: () => spAndOpen('training', 'tr-r') },
    {type: 'page', name: 'المرحلة الأولى', ico: '1️⃣', action: () => spAndOpen('training', 'stage-1') },
    {type: 'page', name: 'المرحلة الثانية', ico: '2️⃣', action: () => spAndOpen('training', 'stage-2') },
    {type: 'page', name: 'المرحلة الثالثة', ico: '3️⃣', action: () => spAndOpen('training', 'stage-3') },
    {type: 'page', name: 'المرحلة الرابعة', ico: '4️⃣', action: () => spAndOpen('training', 'stage-4') },
    {type: 'page', name: 'المرحلة الخامسة', ico: '5️⃣', action: () => spAndOpen('training', 'stage-5') },
    {type: 'page', name: 'الإبداعات', ico: '✨', action: () => spDirect('creations') },
    {type: 'page', name: 'إبداعات المجزوءات', ico: '📚', action: () => spAndOpen('creations', 'cr-m') },
    {type: 'page', name: 'إبداعات التداريب الميدانية', ico: '🏫', action: () => spAndOpen('creations', 'cr-f') },
    {type: 'page', name: 'إبداعات التكوين الذاتي', ico: '🎓', action: () => spAndOpen('creations', 'cr-s') },
    {type: 'page', name: 'المجزوءات التكوينية والعروض', ico: '📑', action: () => spDirect('modules') },
    {type: 'page', name: 'نصوص قانونية وتنظيمية', ico: '⚖️', action: () => spDirect('legal') },
    {type: 'page', name: 'الظهائر والقوانين', ico: '📜', action: () => spAndOpen('legal', 'lg-d') },
    {type: 'page', name: 'المراسيم والمناشير', ico: '📃', action: () => spAndOpen('legal', 'lg-m') },
    {type: 'page', name: 'المذكرات', ico: '📑', action: () => spAndOpen('legal', 'lg-mk') },
    {type: 'page', name: 'الدلائل', ico: '📗', action: () => spDirect('guides') },
    {type: 'page', name: 'مطبوعات', ico: '🖨️', action: () => spDirect('prints') },
    {type: 'page', name: 'مواقع مهمة', ico: '🌐', action: () => spDirect('sites') },
    // PDFs
    {type: 'pdf', name: 'تقرير المرحلة الأولى', ico: '📊', path: 'Stages/rapport_1.pdf', action: () => openPdf('تقرير المرحلة الأولى', 'Stages/rapport_1.pdf') },
    {type: 'pdf', name: 'تقرير المرحلة الثانية', ico: '📊', path: 'Stages/rapport_2.pdf', action: () => openPdf('تقرير المرحلة الثانية', 'Stages/rapport_2.pdf') },
    {type: 'pdf', name: 'تقرير المرحلة الثالثة', ico: '📊', path: 'Stages/rapport_3.pdf', action: () => openPdf('تقرير المرحلة الثالثة', 'Stages/rapport_3.pdf') },
    {type: 'pdf', name: 'تقرير المرحلة الرابعة', ico: '📊', path: 'Stages/rapport_4.pdf', action: () => openPdf('تقرير المرحلة الرابعة', 'Stages/rapport_4.pdf') },
    {type: 'pdf', name: 'تقرير المرحلة الخامسة', ico: '📊', path: 'Stages/rapport_5.pdf', action: () => openPdf('تقرير المرحلة الخامسة', 'Stages/rapport_5.pdf') },
    {type: 'pdf', name: 'الظهير الشريف 1.00.206', ico: '📜', path: 'Dahirs_lois/Dahir_1.58.008.pdf', action: () => openPdf('الظهير 1.00.206', 'Dahirs_lois/Dahir_1.58.008.pdf') },
    {type: 'pdf', name: 'دليل الحياة المدرسية', ico: '📗', path: 'Guides/guid 2020.pdf', action: () => openPdf('دليل الحياة المدرسية', 'Guides/guid 2020.pdf') },
    // Images
    {type: 'img', name: 'صورة المرحلة الأولى — 1', ico: '📸', path: 'Images/phase1_1.jpg', action: () => {spAndOpen('training', 'stage-1'); } },
    {type: 'img', name: 'صورة المرحلة الثانية — 1', ico: '📸', path: 'Images/phase2_1.jpg', action: () => spAndOpen('training', 'stage-2') },
    {type: 'img', name: 'صورة المرحلة الثانية — 2', ico: '📸', path: 'Images/phase2_2.jpg', action: () => spAndOpen('training', 'stage-2') },
    {type: 'img', name: 'صورة المرحلة الثالثة', ico: '📸', path: 'Images/phase3_1.jpg', action: () => spAndOpen('training', 'stage-3') },
    {type: 'img', name: 'صورة المرحلة الرابعة', ico: '📸', path: 'Images/phase4_1.jpg', action: () => spAndOpen('training', 'stage-4') },
    {type: 'img', name: 'صورة المرحلة الخامسة', ico: '📸', path: 'Images/phase5_1.jpg', action: () => spAndOpen('training', 'stage-5') },
    {type: 'img', name: 'صورة المركز الجهوي', ico: '🏫', path: 'Images/CRMEF.png', action: () => spDirect('home') },
    {type: 'img', name: 'صورة الحمداوي رشيد', ico: '👤', path: 'Images/rachid.jpg', action: () => spDirect('home') },
    ];

    function highlight(text, q) {
      if (!q) return text;
    const re = new RegExp('(' + q.replace(/[.*+?^${ }()|[\]\\]/g, '\\$&') + ')', 'gi');
    return text.replace(re, '<mark>$1</mark>');
    }

    function globalSearch(q) {
      const box = document.getElementById('search-results');
    const clear = document.getElementById('gsb-clear');
    clear.style.display = q ? 'flex' : 'none';
    if (!q.trim()) {box.classList.remove('show'); return; }
      const matches = SEARCH_INDEX.filter(item =>
    item.name.toLowerCase().includes(q.toLowerCase()) ||
    (item.path && item.path.toLowerCase().includes(q.toLowerCase()))
    ).slice(0, 12);

    if (!matches.length) {
        box.innerHTML = `<div class="sr-empty">🔍 لا توجد نتائج لـ "${q}"</div>`;
    box.classList.add('show'); return;
      }

    const groups = {page: [], pdf: [], img: [] };
      matches.forEach(m => groups[m.type].push(m));

    let html = '';
    const groupNames = {page: '📌 الأقسام والصفحات', pdf: '📄 ملفات PDF', img: '🖼️ الصور' };
      Object.entries(groups).forEach(([type, items]) => {
        if (!items.length) return;
    html += `<div class="sr-group-title">${groupNames[type]}</div>`;
        items.forEach((item, idx) => {
        html += `<div class="sr-item" onclick="runSearch(${SEARCH_INDEX.indexOf(item)})">
            <span class="sr-ico">${item.ico}</span>
            <div class="sr-info">
              <div class="sr-name">${highlight(item.name, q)}</div>
              ${item.path ? `<div class="sr-path">${item.path}</div>` : ''}
            </div>
            <span class="sr-type ${type}">${type === 'page' ? 'قسم' : type === 'pdf' ? 'PDF' : 'صورة'}</span>
          </div>`;
        });
      });

    box.innerHTML = html;
    box.classList.add('show');
    }

    function runSearch(idx) {
        SEARCH_INDEX[idx].action();
    clearGlobalSearch();
    }

    function clearGlobalSearch() {
        document.getElementById('global-input').value = '';
    document.getElementById('search-results').classList.remove('show');
    document.getElementById('gsb-clear').style.display = 'none';
    }

    // Close search on outside click
    document.addEventListener('click', e => {
      if (!e.target.closest('#global-search-wrap')) {
        document.getElementById('search-results').classList.remove('show');
      }
    });


    const PAGES = ['home', 'personal', 'analysis', 'training', 'creations', 'modules', 'legal', 'guides', 'prints', 'sites', 'annexes'];

    function setActivePage(id) {
        PAGES.forEach(p => {
            const pg = document.getElementById('pg-' + p);
            if (pg) pg.classList.toggle('active', p === id);
            const ni = document.getElementById('ni-' + p);
            if (ni) ni.classList.toggle('active', p === id);
        });
        // mark portfolio nav item active when any of its sub-pages are active
        const portfolioPages = ['personal','analysis','training','creations'];
        const niPortfolio = document.getElementById('ni-portfolio');
        if (niPortfolio) niPortfolio.classList.toggle('active', portfolioPages.includes(id));
      // close all sub-views and restore main containers
      document.querySelectorAll('.sv').forEach(s => s.classList.remove('open'));
      ['am', 'tm', 'cm', 'lm'].forEach(m => {
        const el = document.getElementById(m); if (el) el.style.display = '';
      });
    }

    function filterPrints(q) {
      const rows = document.querySelectorAll('#prints-tbody tr');
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(q.toLowerCase()) ? '' : 'none';
      });
    }

    function spDirect(id) {
        closeAllDropdowns();
    setActivePage(id);
    window.scrollTo({top: 0, behavior: 'smooth' });
    if (id === 'elhamdaouy' || id === 'home') setTimeout(animateSkills, 400);
    }

    function spAndOpen(pageId, svId, evalStr) {
        closeAllDropdowns();
    setActivePage(pageId);
    window.scrollTo({top: 0, behavior: 'smooth' });
    if (svId) {
        // show sub-view
        const pg = document.getElementById('pg-' + pageId);
    if (pg) {
        pg.querySelectorAll('.sv').forEach(s => s.classList.remove('open'));
    const mainId = {analysis: 'am', training: 'tm', creations: 'cm', legal: 'lm' }[pageId];
    const m = document.getElementById(mainId);
    if (m) m.style.display = 'none';
    const sv = document.getElementById(svId);
    if (sv) sv.classList.add('open');
        }
      }
      if (evalStr) setTimeout(() => { try {eval(evalStr); } catch (e) { } }, 100);
    }

    // Legacy compat
    function sp(id, el) {spDirect(id); }
    function ssv(parent, svId) {
      const pg = document.getElementById('pg-' + parent);
    if (!pg) return;
      pg.querySelectorAll('.sv').forEach(s => s.classList.remove('open'));
    const mainId = {analysis: 'am', training: 'tm', creations: 'cm', legal: 'lm' }[parent];
    const m = document.getElementById(mainId);
    if (m) m.style.display = 'none';
    const sv = document.getElementById(svId);
    if (sv) sv.classList.add('open');
    }
    function hsv(svId, mainId) {
      const sv = document.getElementById(svId); if (sv) sv.classList.remove('open');
    const m = document.getElementById(mainId); if (m) m.style.display = '';
    }

    // ── DROPDOWN MANAGEMENT ──
    function toggleDropdown(el, pageId) {
      const isOpen = el.classList.contains('dd-open');
    closeAllDropdowns();
    if (!isOpen) el.classList.add('dd-open');
    }

    function closeAllDropdowns() {
        document.querySelectorAll('.nav-item.dd-open').forEach(el => el.classList.remove('dd-open'));
    }

    // Close dropdowns on outside click
    document.addEventListener('click', e => {
      if (!e.target.closest('#navbar')) closeAllDropdowns();
    });

    // ── MOBILE MENU ──
    function toggleMobileMenu() {
      const btn = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    btn.classList.toggle('open');
    menu.classList.toggle('open');
    }

    function closeMobileMenu() {
        document.getElementById('menu-toggle').classList.remove('open');
    document.getElementById('mobile-menu').classList.remove('open');
    }

    function spMob(id) {
        spDirect(id);
    closeMobileMenu();
      // update mobile active states
      document.querySelectorAll('.mob-direct').forEach(el => el.classList.remove('active'));
    const el = document.getElementById('mob-' + id);
    if (el) el.classList.add('active');
    }

    function spMobSv(pageId, svId) {
        spAndOpen(pageId, svId);
    closeMobileMenu();
    }

    function spMobAndEval(pageId, evalStr) {
        spDirect(pageId);
    closeMobileMenu();
      setTimeout(() => { try {eval(evalStr); } catch (e) { } }, 150);
    }

    function toggleMobSection(header) {
      const items = header.nextElementSibling;
    const isOpen = items.classList.contains('open');
    header.classList.toggle('open', !isOpen);
    items.classList.toggle('open', !isOpen);
    }

    // ══════════════════════════════════
    // ANIMATED COUNTERS
    // ══════════════════════════════════
    function animateCounters() {
        document.querySelectorAll('.sn[data-target]').forEach(el => {
            const target = parseInt(el.dataset.target);
            const duration = target > 100 ? 1800 : 900;
            const start = performance.now();
            const startVal = 0;
            function update(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(startVal + (target - startVal) * ease);
                if (progress < 1) requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
        });
    }

    // ══════════════════════════════════
    // SKILLS ANIMATION
    // ══════════════════════════════════
    let skillsAnimated = false;
    function animateSkills() {
      if (skillsAnimated) return;
    skillsAnimated = true;
      document.querySelectorAll('.skill-fill[data-pct]').forEach((bar, i) => {
        setTimeout(() => {
            bar.style.width = bar.dataset.pct + '%';
        }, i * 100);
      });
    }

    // ══════════════════════════════════
    // ROTATING QUOTES
    // ══════════════════════════════════
    const quotes = [
    'القيادة التربوية فن يجمع بين العلم والإنسانية في خدمة المتعلم.',
    'المدير الناجح هو من يحوّل الرؤية إلى واقع ملموس داخل مؤسسته.',
    'التعليم هو السلاح الأقوى الذي يمكنك استخدامه لتغيير العالم. — نيلسون مانديلا',
    'إدارة المؤسسة التعليمية مسؤولية جسيمة تقتضي التكوين المستمر والانفتاح.',
    'التدريب الميداني جسر بين النظرية والممارسة في بناء الكفاءات.',
    ];
    let qIdx = 0;
    setInterval(() => {
        qIdx = (qIdx + 1) % quotes.length;
    const el = document.getElementById('rotating-quote');
    if (el) {el.style.opacity = 0; setTimeout(() => {el.textContent = quotes[qIdx]; el.style.opacity = 1; }, 300); }
    }, 5000);
    const qEl = document.getElementById('rotating-quote');
    if (qEl) qEl.style.transition = 'opacity 0.3s';

    // ══════════════════════════════════
    // PDF VIEWER
    // ══════════════════════════════════
    let _curPath = '';
    function openPdf(title, path) {
        _curPath = path;
    document.getElementById('pm-title').textContent = title;
    document.getElementById('pm-path').textContent = path;
    document.getElementById('pm-phpath').textContent = path;
    document.getElementById('pm-ph').style.display = 'flex';
    document.getElementById('pif').style.display = 'none';
    document.getElementById('pmod').classList.add('open');
    const iframe = document.getElementById('pif');
    iframe.onload = function () {
        try {
        document.getElementById('pm-ph').style.display = 'none';
    iframe.style.display = 'block';
        } catch (e) { }
      };
    iframe.onerror = function () {
        document.getElementById('pm-ph').querySelector('h4').textContent = 'تعذّر تحميل الملف';
      };
      setTimeout(() => {iframe.src = path; }, 80);
    }
    function closePdf() {
        document.getElementById('pmod').classList.remove('open');
    document.getElementById('pif').src = '';
    document.getElementById('pif').style.display = 'none';
    document.getElementById('pm-ph').style.display = 'flex';
    document.getElementById('pm-ph').querySelector('h4').textContent = 'جاري تحميل الملف...';
    }

    function openTab(path) { if (path) window.open(path, '_blank'); }

    document.getElementById('pmod').addEventListener('click', e => { if (e.target === e.currentTarget) closePdf(); });
    document.getElementById('gmod').addEventListener('click', e => { if (e.target === e.currentTarget) document.getElementById('gmod').classList.remove('open'); });

    // ══════════════════════════════════
    // LIGHTBOX
    // ══════════════════════════════════
    let lbImages = [];
    let lbCurrent = 0;

    function initLightbox() {
        document.querySelectorAll('.phs img').forEach((img) => {
            if (!img.getAttribute('src') || img.style.display === 'none') return;
            img.parentElement.addEventListener('click', () => {
                // collect all images from this photog grid
                const grid = img.closest('.photog');
                if (!grid) return;
                lbImages = [];
                grid.querySelectorAll('.phs img').forEach(i => {
                    if (i.src && i.style.display !== 'none') {
                        const cap = i.parentElement.querySelector('.ph-label');
                        lbImages.push({ src: i.src, cap: cap ? cap.textContent.trim() : '' });
                    }
                });
                lbCurrent = lbImages.findIndex(x => x.src === img.src);
                if (lbCurrent < 0) lbCurrent = 0;
                showLb();
            });
        });
    }

    function showLb() {
      if (!lbImages.length) return;
    const item = lbImages[lbCurrent];
    document.getElementById('lb-img').src = item.src;
    document.getElementById('lb-cap').textContent = item.cap;
    document.getElementById('lightbox').classList.add('open');
    }

    function closeLb() {document.getElementById('lightbox').classList.remove('open'); }

    function lbNav(dir) {
        lbCurrent = (lbCurrent + dir + lbImages.length) % lbImages.length;
    showLb();
    }

    document.getElementById('lightbox').addEventListener('click', e => { if (e.target === e.currentTarget) closeLb(); });
    document.addEventListener('keydown', e => {
      if (document.getElementById('lightbox').classList.contains('open')) {
        if (e.key === 'ArrowRight') lbNav(-1);
    if (e.key === 'ArrowLeft') lbNav(1);
    if (e.key === 'Escape') closeLb();
      }
    if (document.getElementById('pmod').classList.contains('open') && e.key === 'Escape') closePdf();
    });

    // Re-init lightbox when photos are visible (after navigation)
    const observer = new MutationObserver(() => initLightbox());
    observer.observe(document.getElementById('main'), {subtree: true, attributes: true, attributeFilter: ['class'] });
    setTimeout(initLightbox, 500);

    // ══════════════════════════════════
    // VIDEO PLAYER
    // ══════════════════════════════════
    function openVid(src, title) {
        document.getElementById('vm-title').textContent = '🎬 ' + title;
    const player = document.getElementById('video-player');
    player.src = src;
    player.load();
    document.getElementById('vmod').classList.add('open');
      setTimeout(() => player.play().catch(() => { }), 300);
    }

    function closeVid() {
        document.getElementById('vmod').classList.remove('open');
    const p = document.getElementById('video-player');
    p.pause(); p.src = '';
    }

    document.getElementById('vmod').addEventListener('click', e => { if (e.target === e.currentTarget) closeVid(); });

    // ══════════════════════════════════
    // PRINT
    // ══════════════════════════════════
    function printProfile() {
        window.print();
    }

    // ══════════════════════════════════
    // BACK TO TOP
    // ══════════════════════════════════
    window.addEventListener('scroll', () => {
      const btt = document.getElementById('btt');
      if (window.scrollY > 300) btt.classList.add('visible');
    else btt.classList.remove('visible');
    });

    // ══════════════════════════════════
    // FOOTER
    // ══════════════════════════════════
    document.getElementById('footer-year').textContent = new Date().getFullYear();

    function sendContact() {
      const name = document.getElementById('fc-name').value.trim();
    const email = document.getElementById('fc-email').value.trim();
    const msg = document.getElementById('fc-msg').value.trim();
    if (!name || !email || !msg) {toast('⚠️ يرجى ملء جميع الحقول'); return; }
    // Open mailto with pre-filled content
    const subject = encodeURIComponent('رسالة من: ' + name);
    const body = encodeURIComponent('الاسم: ' + name + '\nالبريد: ' + email + '\n\n' + msg);
    window.location.href = `mailto:hamadaoui.rachid@edu.gov.ma?subject=${subject}&body=${body}`;
    document.getElementById('fc-name').value = '';
    document.getElementById('fc-email').value = '';
    document.getElementById('fc-msg').value = '';
    toast('✅ جاري فتح تطبيق البريد الإلكتروني...');
    }

    // ══════════════════════════════════
    // TOAST
    // ══════════════════════════════════
    function toast(msg) {
      const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 2800);
    }

    // ══════════════════════════════════
    // MODULES / SLIDES DROPDOWN
    // ══════════════════════════════════
function switchDdTab(tab) {
    const targetTab = document.querySelector('.dd-tab.' + tab);
    const targetPanel = document.getElementById('panel-' + tab);

    if (targetTab && targetPanel) {
        document.querySelectorAll('.dd-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.dd-panel').forEach(p => p.classList.remove('active'));
        
        targetTab.classList.add('active');
        targetPanel.classList.add('active');
    }
}
    function toggleDdGroup(groupId) {
      const group = document.getElementById(groupId);
    const header = group.querySelector('.dd-group-header');
    const items = group.querySelector('.dd-items');
    const isOpen = items.classList.contains('open');
    const parent = group.closest('#modules-list, #slides-list');
    if (parent) {
        parent.querySelectorAll('.dd-items.open').forEach(el => el.classList.remove('open'));
        parent.querySelectorAll('.dd-group-header.open').forEach(el => el.classList.remove('open'));
      }
    if (!isOpen) {items.classList.add('open'); header.classList.add('open'); }
    }

    function filterDd(input, type) {
      const q = input.value.trim().toLowerCase();
    const listId = type === 'modules' ? 'modules-list' : 'slides-list';
    const sel = type === 'modules' ? '.dd-item' : '.slide-item';
    const list = document.getElementById(listId);
      list.querySelectorAll(sel).forEach(item => {
        const text = (item.dataset.search || item.textContent).toLowerCase();
    item.style.display = (!q || text.includes(q)) ? '' : 'none';
      });
      list.querySelectorAll('.dd-group').forEach(g => {
        const visible = [...g.querySelectorAll(sel)].some(el => el.style.display !== 'none');
    g.style.display = visible ? '' : 'none';
    if (q && visible) {
        g.querySelector('.dd-items').classList.add('open');
    g.querySelector('.dd-group-header').classList.add('open');
        }
      });
    }
      // ── فلترة جدول الامتحانات ──
    function filterExamens(q) {
      const rows = document.querySelectorAll('#examens-tbody tr');
      let visible = 0;
      rows.forEach(row => {
        const match = row.textContent.toLowerCase().includes(q.toLowerCase());
        row.style.display = match ? '' : 'none';
        if (match) visible++;
      });
      const cnt = document.getElementById('exam-count');
      if (cnt) cnt.textContent = q ? `${visible} نتيجة` : `${rows.length} ملف`;
    }
    // عداد عند فتح الصفحة
    document.addEventListener('DOMContentLoaded', () => {
      const cnt = document.getElementById('exam-count');
      const rows = document.querySelectorAll('#examens-tbody tr');
      if (cnt && rows.length) cnt.textContent = `${rows.length} ملف`;
    });