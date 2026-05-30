import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const IMG_HERO =
  'https://cdn.poehali.dev/projects/f867a1a7-ccc6-4c83-bda2-adced18fb784/files/ecfb3eb4-b27e-4447-983d-26e99d165843.jpg';
const IMG_SECOND =
  'https://cdn.poehali.dev/projects/f867a1a7-ccc6-4c83-bda2-adced18fb784/files/11e8e71a-cd8b-4839-b71e-03ec193a7fb9.jpg';

const manifest = [
  {
    no: '01',
    icon: 'Shapes',
    title: 'Форма ломает функцию',
    text: 'Мы отказываемся от чистоты модернизма. Хаос, ирония и коллаж — наш язык.',
  },
  {
    no: '02',
    icon: 'Layers',
    title: 'Слой поверх слоя',
    text: 'Смыслы наслаиваются друг на друга. Нет одной правды — есть множество прочтений.',
  },
  {
    no: '03',
    icon: 'Quote',
    title: 'Цитата вместо оригинала',
    text: 'Прошлое и будущее сталкиваются в одной точке. Эклектика как метод.',
  },
];

const works = [
  { tag: 'ТИПОГРАФИКА', title: 'Distorted Grid', year: '2024' },
  { tag: 'КОЛЛАЖ', title: 'Fragments of Sense', year: '2024' },
  { tag: 'ИНСТАЛЛЯЦИЯ', title: 'Concrete Dreams', year: '2023' },
  { tag: 'ПЛАКАТ', title: 'Anti-Manifesto', year: '2023' },
];

const Index = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') !== 'light';
    setDark(saved);
    document.documentElement.classList.toggle('dark', saved);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors overflow-x-hidden">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-5 py-5">
          <span className="font-[Archivo_Black] text-xl tracking-tighter uppercase">
            POST<span className="text-primary">/</span>MOD
          </span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
              <a href="#manifest" className="hover:text-primary transition-colors">
                Манифест
              </a>
              <a href="#works" className="hover:text-primary transition-colors">
                Работы
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Контакт
              </a>
            </div>
            <button
              onClick={toggleTheme}
              aria-label="Переключить тему"
              className="inline-flex items-center justify-center w-10 h-10 border border-border text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Icon name={dark ? 'Sun' : 'Moon'} size={18} />
            </button>
          </div>
        </div>
      </nav>

      <header className="container mx-auto px-5 pt-16 pb-24 md:pt-24 relative">
        <p className="uppercase tracking-[0.4em] text-xs text-muted-foreground mb-8">
          Студия визуального бунта — с 2019
        </p>
        <h1 className="text-[15vw] md:text-[11vw] leading-[0.82] uppercase">
          Хаос
          <span className="block text-primary ml-[12vw]">это</span>
          <span className="block text-right">метод</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10 mt-16 items-end">
          <div
            className="w-full h-[320px] md:h-[440px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${IMG_HERO})`,
              transform: 'rotate(-2deg)',
            }}
          />
          <div className="md:pb-8">
            <p className="text-lg md:text-xl leading-relaxed max-w-md mb-8">
              Мы создаём визуальные высказывания на стыке иронии, цитаты и
              деконструкции. Ни одного правила, которое нельзя сломать.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-none px-9 py-6 text-base uppercase tracking-widest hover:translate-x-2 transition-transform"
            >
              <a href="#works">
                Смотреть работы
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <section id="manifest" className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl md:text-6xl uppercase mb-16">Манифест</h2>
          <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/20">
            {manifest.map((m) => (
              <div key={m.no} className="bg-primary p-8 md:p-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-5xl font-[Archivo_Black] opacity-30">
                    {m.no}
                  </span>
                  <Icon name={m.icon} size={32} />
                </div>
                <h3 className="text-2xl uppercase mb-4 leading-tight">
                  {m.title}
                </h3>
                <p className="opacity-80 leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="container mx-auto px-5 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl md:text-6xl uppercase">
            Избранные
            <br />
            работы
          </h2>
          <p className="text-muted-foreground max-w-sm">
            Фрагменты, плакаты, инсталляции и эксперименты на грани читаемости.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {works.map((w, i) => (
            <div
              key={w.title}
              className="bg-card p-10 md:p-14 group hover:bg-secondary transition-colors"
              style={{ marginTop: i % 2 ? '0' : '0' }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-primary">
                {w.tag}
              </span>
              <h3 className="text-3xl md:text-5xl uppercase mt-4 mb-6 group-hover:translate-x-2 transition-transform">
                {w.title}
              </h3>
              <div className="flex items-center justify-between text-muted-foreground">
                <span>{w.year}</span>
                <Icon name="ArrowUpRight" size={28} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative">
        <div
          className="w-full h-[360px] md:h-[520px] bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG_SECOND})` }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-5">
            <p className="text-3xl md:text-6xl uppercase max-w-3xl leading-tight text-background mix-blend-difference">
              «Нет смысла — есть только его бесконечная интерпретация»
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="container mx-auto px-5 py-28 text-center">
        <p className="uppercase tracking-[0.4em] text-xs text-muted-foreground mb-8">
          Начнём диалог
        </p>
        <h2 className="text-5xl md:text-8xl uppercase mb-12">
          Сломаем
          <span className="text-primary"> вместе</span>
        </h2>
        <Button
          asChild
          size="lg"
          className="rounded-none px-10 py-7 text-base uppercase tracking-widest hover:translate-x-2 transition-transform"
        >
          <a href="#">
            <Icon name="Send" size={18} className="mr-2" />
            Написать нам
          </a>
        </Button>
      </section>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm uppercase tracking-widest text-muted-foreground">
          <span className="font-[Archivo_Black] text-foreground tracking-tighter">
            POST/MOD
          </span>
          <span>© 2024 — Студия визуального бунта</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
