import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HERO_IMAGE =
  'https://cdn.poehali.dev/projects/f867a1a7-ccc6-4c83-bda2-adced18fb784/files/f64843e2-2575-4108-909e-d1de64d172ba.jpg';

const features = [
  {
    icon: 'Lock',
    title: 'Конфиденциальность',
    text: 'Ваши истории остаются только внутри кабинета',
  },
  {
    icon: 'BadgeCheck',
    title: 'Доказательный подход',
    text: 'Использую только проверенные методики КПТ и гештальт-терапии',
  },
  {
    icon: 'Globe',
    title: 'Удобный формат',
    text: 'Очные встречи в центре города или онлайн из любой точки мира',
  },
];

const methods = [
  {
    title: 'Тревожные состояния',
    text: 'Работа с паническими атаками, фобиями и постоянным чувством беспокойства.',
  },
  {
    title: 'Отношения',
    text: 'Выход из созависимости, разрешение конфликтов, работа с личными границами.',
  },
  {
    title: 'Самооценка',
    text: 'Поиск самоценности, работа с синдромом самозванца и уверенностью в себе.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/90 py-5">
        <div className="container mx-auto flex items-center justify-between px-5">
          <span className="font-semibold text-lg tracking-widest text-primary">
            ГАРМОНИЯ
          </span>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">
              Обо мне
            </a>
            <a href="#methods" className="hover:text-primary transition-colors">
              Методы
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      <header
        id="about"
        className="container mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl leading-tight mb-6">
            Пространство, где вас слышат
          </h1>
          <p className="text-lg text-muted-foreground mb-9 max-w-lg mx-auto md:mx-0">
            Профессиональная психологическая поддержка в комфортной обстановке.
            Помогу найти ресурс для изменений и внутреннюю опору.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-9 py-6 text-base shadow-lg shadow-primary/20 hover:-translate-y-1 transition-transform"
          >
            <a href="#contact">Начать работу</a>
          </Button>
        </div>
        <div
          className="w-full h-[400px] md:h-[500px] bg-cover bg-center rounded-t-[200px] rounded-b-3xl"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
      </header>

      <section className="container mx-auto px-5 grid md:grid-cols-3 gap-8 py-16">
        {features.map((f) => (
          <div key={f.title} className="text-center px-5 py-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-primary mb-5">
              <Icon name={f.icon} size={26} />
            </div>
            <h3 className="text-xl mb-3">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </section>

      <section id="methods" className="bg-secondary py-24">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-4xl mb-12">Направления работы</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {methods.map((m) => (
              <div
                key={m.title}
                className="bg-card p-10 rounded border-b-4 border-transparent hover:border-primary transition-colors"
              >
                <h3 className="text-xl mb-4">{m.title}</h3>
                <p className="text-muted-foreground">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 text-center">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl md:text-4xl mb-5">Готовы познакомиться?</h2>
          <p className="text-muted-foreground mb-10">
            Первая 20-минутная ознакомительная встреча — бесплатно.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-9 py-6 text-base shadow-lg shadow-primary/20 hover:-translate-y-1 transition-transform"
          >
            <a href="#">
              <Icon name="Send" size={18} className="mr-2" />
              Записаться через Telegram
            </a>
          </Button>
        </div>
      </section>

      <footer className="py-16 text-center bg-foreground text-background">
        <p className="text-sm">
          © 2024 Психолог Мария Иванова. Лицензированный специалист.
        </p>
      </footer>
    </div>
  );
};

export default Index;
