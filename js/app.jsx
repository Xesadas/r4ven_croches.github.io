// Main app for both variants. Theme is passed via window.__THEME ('rosa' or 'gotico').
const { useState, useEffect, useRef, useMemo } = React;

const THEME = window.__THEME || 'rosa';
const isDark = THEME === 'gotico';
const altUrl = isDark ? 'index.html' : 'gotico.html';
const altLabel = isDark ? 'modo rosa' : 'modo noir';

// ============ HEADER ============
function Header({ onNav }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`mm-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#topo" className="logo" onClick={(e) => {e.preventDefault();onNav('topo');}}>
          <span className="logo-mark">✦</span>
          <span className="logo-text">Raven Crochês</span>
        </a>
        <nav className="main-nav">
          {[
          ['sobre', 'a artesã'],
          ['galeria', 'o clã'],
          ['processo', 'o feitiço'],
          ['amada', 'amadas'],
          ['contato', 'invocar']].
          map(([id, label]) =>
          <a key={id} href={`#${id}`} onClick={(e) => {e.preventDefault();onNav(id);}} data-cursor-hover>
              {label}
            </a>
          )}
        </nav>
        <div className="header-right">
          <a href={altUrl} className="vibe-toggle" data-cursor-hover title="trocar de vibe">
            <Moon size={14} color="currentColor" />
            <span>{altLabel}</span>
          </a>
          <a href={window.MM_DATA.artist.igUrl} target="_blank" rel="noreferrer" className="icon-btn" aria-label="Instagram" data-cursor-hover>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a href={window.MM_DATA.artist.waUrl} target="_blank" rel="noreferrer" className="icon-btn" aria-label="WhatsApp" data-cursor-hover>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20.5 12a8.5 8.5 0 0 1-12.7 7.4L3 21l1.6-4.7A8.5 8.5 0 1 1 20.5 12z" />
              <path d="M8.5 10c.5 2 2.5 4 4.5 4.5l1.5-1.3 2.5 1.2-.5 2-2 .3c-3.5-.3-6.5-3.3-6.8-6.8l.3-2 2-.5 1.2 2.5L8.5 10z" />
            </svg>
          </a>
        </div>
      </div>
    </header>);

}

// ============ HERO ============
function Hero({ easterEgg, onEasterEgg }) {
  const [hoverFeature, setHoverFeature] = useState(false);
  return (
    <section id="topo" className="hero">
      {/* corner ornaments */}
      <div className="corner-ornament tl">
        <Star size={14} color="var(--ink)" />
        <span className="caveat">desde 2023 ⋅ Goiânia / GO</span>
      </div>
      <div className="corner-ornament tr">
        <span className="caveat">um amigurumi nunca volta sozinho ✦</span>
        <Cross size={14} color="var(--ink)" />
      </div>

      <div className="hero-inner">
        <div className="hero-left">
          <div className="kicker">
            <Sparkle size={11} color="var(--accent)" />
            <span>artesanato com alma</span>
            <Sparkle size={11} color="var(--accent)" />
          </div>
          <h1 className="display-title">
            <span className="line">Raven</span>
            <span className="line italic">Crochês</span>
          </h1>
          <p className="hero-sub">
            amigurumis, broches e croché feito à mão por uma estudante de arte do IFG.
            <br />
            <span className="caveat">cada bicho carrega um pedacinho de mim — e some um pedacinho de você.</span>
          </p>
          <div className="hero-cta">
            <a href={window.MM_DATA.artist.waUrl} target="_blank" rel="noreferrer" className="btn-primary" data-cursor-hover>
              <Heart size={14} color="currentColor" />
              encomendar uma peça
            </a>
            <a href="#galeria" className="btn-ghost" data-cursor-hover>
              ver o clã
              <span style={{ marginLeft: 8 }}>→</span>
            </a>
          </div>
          <div className="hero-stats">
            <div><strong>+240</strong><span>bichinhos adotados</span></div>
            <div><strong>3-9</strong><span>dias por peça</span></div>
            <div><strong>100%</strong><span>fio premium</span></div>
          </div>
        </div>

        <div className="hero-right">
          <div className={`hero-feature ${hoverFeature ? 'hovered' : ''}`}
          onMouseEnter={() => setHoverFeature(true)}
          onMouseLeave={() => setHoverFeature(false)}
          data-cursor-hover>
            <div className="feature-frame">
              {/* decoration ring */}
              <div className="feature-ring">
                {Array.from({ length: 18 }).map((_, i) =>
                <span key={i} style={{ transform: `rotate(${i * 20}deg) translateY(-180px)` }}>✦</span>
                )}
              </div>
              <div className="feature-bg"></div>
              <img src="assets/raven-pixel.png" alt="Raven — pixel art" className="feature-pixel" />
              <div className="feature-tag">
                <span className="caveat">a {window.MM_DATA.featured.name}</span>
                <em>{window.MM_DATA.featured.year}</em>
              </div>
              <button className="feature-poke" onClick={onEasterEgg} aria-label="cutucar">
                <span style={{ fontSize: 18 }}>{easterEgg ? '✦' : '·'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line"></div>
        <span className="caveat">role pra ver o clã todo</span>
      </div>
    </section>);

}

// ============ SOBRE ============
function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="section-head">
        <span className="section-num">i.</span>
        <h2 className="section-title">a artesã</h2>
        <p className="section-deck caveat">a alma por trás do fio</p>
      </div>

      <div className="sobre-grid">
        <div className="sobre-photo">
          <div className="photo-placeholder photo-filled">
            <img src="assets/raven.jpg" alt="Raven — a artesã por trás do Raven Crochês" className="photo-img" />
            <div className="photo-tape tape-1"></div>
            <div className="photo-tape tape-2"></div>
          </div>
          <div className="photo-caption caveat">
            "eu, num muro de lambes — fio, tinta e atitude" ✦
          </div>
        </div>
        <div className="sobre-text">
          <p className="lead">
            <span className="drop">R</span>aven — 17 anos, estudante do <strong>IFG</strong>,
            apaixonada por transformar linha em coisa viva, com um pezinho no sombrio e outro no delicado.
          </p>
          <p>
            Aprendi crochê sozinha aos 14 anos, perdida entre vídeos, pausas, fios embolados
            e aquela teimosia bonita de quem queria entender com as próprias mãos. Não tinha
            professora nem receita perfeita, só curiosidade e vontade de criar.
          </p>
          <p>
            Com o tempo, o crochê virou mais do que hobby. Virou linguagem. Cada peça que nasce
            aqui carrega detalhe, textura e personalidade, feita ponto por ponto com cuidado e intenção.
          </p>
          <p>
            Trabalho com encomendas e criações personalizadas. Você traz referência, ideia ou
            só uma vibe perdida no Pinterest. A gente conversa, ajusta e transforma tudo em algo
            que pareça ter saído direto da imaginação.
          </p>
          <ul className="obsessoes">
            <li><Star size={12} color="var(--accent)" /> filmes de terror & goticismo</li>
            <li><Heart size={12} color="var(--accent)" /> crochê, arte e coisas feitas à mão</li>
            <li><Moon size={12} color="var(--accent)" /> playlists dramáticas pra criar</li>
            <li><Cross size={12} color="var(--accent)" /> energético geladinho na madrugada</li>
          </ul>
        </div>
      </div>
      <LaceDivider color="var(--ink)" />
    </section>);

}

// ============ GALERIA ============
function Galeria({ onSelect }) {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="galeria" className="galeria">
      <div className="section-head">
        <span className="section-num">ii.</span>
        <h2 className="section-title">o catálogo</h2>
        <p className="section-deck caveat">cada uma com seu nome, sua sina</p>
        <div className="pricing-note">
          <Sparkle size={10} color="var(--accent)" />
          <span><strong>{window.MM_DATA.pricing.formula}.</strong> {window.MM_DATA.pricing.note}</span>
          <Sparkle size={10} color="var(--accent)" />
        </div>
      </div>

      <div className="creatures-grid">
        {window.MM_DATA.creatures.map((c, i) =>
        <article
          key={c.id}
          className={`creature-card ${c.isCustom ? 'creature-card--custom' : ''} ${hovered === c.id ? 'hovered' : ''}`}
          style={{ '--card-idx': i }}
          onMouseEnter={() => setHovered(c.id)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => onSelect(c)}
          data-cursor="grab">
          
            <div className="card-decor">
              <span className="card-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="card-tag">
                {c.priceFrom ?
                  <PriceTag price={c.priceFrom} suffix="+" prefix="a partir de" color="var(--ink)" bg="var(--bg-2)" /> :
                  <PriceTag price="sob medida" color="var(--ink)" bg="var(--bg-2)" />
                }
              </div>
            </div>
            <div className="card-art">
              {c.photo ?
                <img src={c.photo} alt={c.name} className="card-photo" /> :
                <Creature
                  type={c.type}
                  color={c.color}
                  accent={isDark ? '#e91e63' : '#8b1538'}
                  eye={'#fdeaf1'}
                  size={200} />
              }
            </div>
            <div className="card-meta">
              <h3 className="card-name">{c.name}</h3>
              <p className="card-kind">{c.kind}</p>
              <div className="card-note caveat">"{c.note}"</div>
              <div className="card-cta">
                <span>{c.isCustom ? 'me chama' : 'encomendar'}</span>
                <span className="arrow">→</span>
              </div>
            </div>
            <div className="card-ornament">
              <Star size={10} color="var(--accent)" />
            </div>
          </article>
        )}
      </div>

      <p className="galeria-foot caveat">
        ✦ não viu o seu? me chama no DM, a gente desenha do zero ✦
      </p>
      <LaceDivider color="var(--ink)" />
    </section>);

}

// ============ PROCESSO ============
function Processo() {
  return (
    <section id="processo" className="processo">
      <div className="section-head">
        <span className="section-num">iii.</span>
        <h2 className="section-title">o feitiço</h2>
        <p className="section-deck caveat">do DM ao pacotinho na sua porta</p>
      </div>

      <div className="process-steps">
        {window.MM_DATA.process.map((p, i) =>
        <div key={p.n} className="step" style={{ '--step-idx': i }}>
            <div className="step-num">
              <span>{p.n}</span>
              <div className="step-orb"></div>
            </div>
            <h3 className="step-title">{p.title}</h3>
            <p className="step-text">{p.text}</p>
            {i < 3 && <div className="step-thread"></div>}
          </div>
        )}
      </div>

      <div className="process-note">
        <Cross size={16} color="var(--accent)" />
        <p>
          <strong>orçamento:</strong> R$15/hora + custo da linha ⋅ <strong>envio:</strong> Correios pra todo Brasil ⋅
          <strong> entrega em mãos:</strong> Goiânia/Aparecida combinamos no DM
        </p>
        <Cross size={16} color="var(--accent)" />
      </div>
      <LaceDivider color="var(--ink)" />
    </section>);

}

// ============ DEPOIMENTOS ============
function Depoimentos() {
  const data = window.MM_DATA.testimonials;
  return (
    <section id="amada" className="depoimentos">
      <div className="section-head">
        <span className="section-num">iv.</span>
        <h2 className="section-title">as amadas dizem</h2>
        <p className="section-deck caveat">o que ouço depois que vão pra casa</p>
      </div>

      <div className="testimonials-grid">
        {data.map((t, i) =>
        <figure key={i} className="testimonial" style={{ '--t-idx': i }}>
            <div className="quote-mark">"</div>
            <blockquote>{t.text}</blockquote>
            <figcaption>
              <strong>{t.name}</strong>
              <span>levou a <em>{t.piece}</em> ⋅ {t.city}</span>
            </figcaption>
            <div className="tape-yellow"></div>
          </figure>
        )}
      </div>
      <LaceDivider color="var(--ink)" />
    </section>);

}

// ============ CONTATO ============
function Contato() {
  return (
    <section id="contato" className="contato">
      <div className="contato-inner">
        <div className="contato-pre caveat">vamos invocar algo juntas? ✦</div>
        <h2 className="contato-title">
          <span>me chama</span>
          <span className="italic">na DM</span>
        </h2>
        <p className="contato-sub">
          encomendas via Instagram ou WhatsApp.
          <br />
          respondo na ordem que chega, normalmente no mesmo dia.
        </p>

        <div className="contato-buttons">
          <a href={window.MM_DATA.artist.igUrl} target="_blank" rel="noreferrer" className="big-btn ig" data-cursor-hover>
            <div className="big-btn-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </div>
            <div className="big-btn-text">
              <span className="big-btn-label caveat">Instagram</span>
              <strong>{window.MM_DATA.artist.handle}</strong>
              <em>mande DM com a sua ideia</em>
            </div>
            <span className="big-btn-arrow">→</span>
          </a>
          <a href={window.MM_DATA.artist.waUrl} target="_blank" rel="noreferrer" className="big-btn wa" data-cursor-hover>
            <div className="big-btn-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M20.5 12a8.5 8.5 0 0 1-12.7 7.4L3 21l1.6-4.7A8.5 8.5 0 1 1 20.5 12z" />
              </svg>
            </div>
            <div className="big-btn-text">
              <span className="big-btn-label caveat">WhatsApp</span>
              <strong>conversar direto</strong>
              <em>respondo no mesmo dia</em>
            </div>
            <span className="big-btn-arrow">→</span>
          </a>
        </div>

        <div className="contato-bottom">
          <Star size={14} color="var(--ink)" />
          <span className="caveat">não trabalho com formulário — gosto de conversar</span>
          <Star size={14} color="var(--ink)" />
        </div>
      </div>
    </section>);

}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="mm-footer">
      <div className="footer-band">
        {Array.from({ length: 14 }).map((_, i) =>
        <span key={i}>
            ✦ Raven Crochês ✦ amigurumis ✦ feito com fio e carinho ✦ Goiânia/GO
          </span>
        )}
      </div>
      <div className="footer-inner">
        <div className="footer-logo">
          <span style={{ fontSize: 28 }}>✦</span>
          <strong>Raven Crochês</strong>
        </div>
        <div className="footer-links">
          <a href={window.MM_DATA.artist.igUrl} target="_blank" rel="noreferrer">{window.MM_DATA.artist.handle}</a>
          <a href={window.MM_DATA.artist.waUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={altUrl}>{altLabel}</a>
        </div>
        <p className="footer-fine">
          © 2026 — todos os bichinhos têm direitos autorais e sonhos próprios.
          <br />
          site feito com café preto, fio rosa e um pouco de feitiço.
        </p>
      </div>
    </footer>);

}

// ============ CREATURE MODAL ============
function CreatureModal({ creature, onClose }) {
  useEffect(() => {
    if (!creature) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [creature, onClose]);

  if (!creature) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} data-cursor-hover>✕</button>
        <div className="modal-art">
          {creature.photo ?
            <img src={creature.photo} alt={creature.name} className="modal-photo" /> :
            <Creature type={creature.type} color={creature.color} accent={isDark ? '#e91e63' : '#8b1538'} eye="#fdeaf1" size={280} />
          }
        </div>
        <div className="modal-info">
          <div className="modal-kicker caveat">{creature.isCustom ? 'sua própria peça' : `criação · ${creature.id}`}</div>
          <h3 className="modal-name">{creature.name}</h3>
          <p className="modal-kind">{creature.kind}</p>
          <p className="modal-note caveat">"{creature.note}"</p>
          {creature.desc && <p className="modal-desc">{creature.desc}</p>}
          <dl className="modal-meta">
            <div><dt>preço</dt><dd>{creature.priceFrom ? `a partir de R$ ${creature.priceFrom}` : 'sob medida'}</dd></div>
            <div><dt>tempo</dt><dd>{creature.hours || `${creature.days} dias`}</dd></div>
            <div><dt>tamanho</dt><dd>{creature.size || '~ 18cm'}</dd></div>
            <div><dt>fio</dt><dd>{creature.yarn || 'amigurumi premium'}</dd></div>
          </dl>
          <div className="modal-cta">
            <a href={`${window.MM_DATA.artist.waUrl.split('?')[0]}?text=Oi%20Raven!%20${creature.isCustom ? 'Queria%20encomendar%20algo%20sob%20medida%20%E2%9C%A6' : `Queria%20encomendar%20${encodeURIComponent(creature.name)}%20%E2%9C%A6`}`}
            target="_blank" rel="noreferrer" className="btn-primary big" data-cursor-hover>
              {creature.isCustom ? 'começar a conversa' : `encomendar a ${creature.name}`}
              <span>→</span>
            </a>
            <small>R$15/hora + linha ✦ orçamento sem compromisso</small>
          </div>
        </div>
      </div>
    </div>);

}

// ============ EASTER EGG ============
function EasterEggOverlay({ onClose }) {
  return (
    <div className="egg-overlay" onClick={onClose}>
      <div className="egg-inner" onClick={(e) => e.stopPropagation()}>
        <div className="egg-stars">
          {Array.from({ length: 40 }).map((_, i) =>
          <span key={i} style={{
            left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${10 + Math.random() * 20}px`
          }}>✦</span>
          )}
        </div>
        <Creature type="bat" color="var(--ink)" accent="var(--accent)" eye="var(--bg)" size={140} />
        <h3 className="caveat" style={{ fontSize: 42, color: 'var(--ink)', margin: '12px 0' }}>
          você achou a Sabrina! ✦
        </h3>
        <p style={{ maxWidth: 360, textAlign: 'center', fontFamily: 'DM Sans, sans-serif', color: 'var(--ink)', opacity: 0.85 }}>
          cupom secreto pra quem leu até aqui:
          <br />
          <strong style={{ letterSpacing: '0.2em', fontSize: 22, display: 'inline-block', margin: '8px 0', padding: '6px 18px', border: '1.5px dashed var(--accent)', color: 'var(--accent)' }}>RAVEN10</strong>
          <br />
          10% off na sua primeira encomenda. válido pra sempre porque eu esqueci de colocar prazo.
        </p>
        <button onClick={onClose} className="btn-ghost" style={{ marginTop: 18 }} data-cursor-hover>
          obrigada Raven 🖤
        </button>
      </div>
    </div>);

}

// ============ APP ============
function App() {
  const [selected, setSelected] = useState(null);
  const [easter, setEaster] = useState(false);
  const [eggCount, setEggCount] = useState(0);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
  };

  const onEgg = () => {
    const n = eggCount + 1;
    setEggCount(n);
    if (n >= 3) {
      setEaster(true);
      setEggCount(0);
    }
  };

  // Scroll fade-in observer
  useEffect(() => {
    const els = document.querySelectorAll('[data-fade]');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="mm-app" data-theme={THEME}>
      <CrochetCursor theme={THEME} />
      <Header onNav={scrollTo} />
      <main>
        <Hero easterEgg={eggCount > 0} onEasterEgg={onEgg} />
        <div data-fade><Sobre /></div>
        <div data-fade><Galeria onSelect={setSelected} /></div>
        <div data-fade><Processo /></div>
        <div data-fade><Depoimentos /></div>
        <div data-fade><Contato /></div>
      </main>
      <Footer />
      <CreatureModal creature={selected} onClose={() => setSelected(null)} />
      {easter && <EasterEggOverlay onClose={() => setEaster(false)} />}
    </div>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);