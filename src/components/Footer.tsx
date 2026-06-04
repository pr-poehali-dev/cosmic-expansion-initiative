export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">НАДПО</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Национальная академия дополнительного профессионального образования. Работаем с 1997 года.
            </p>
            <p className="text-xs text-muted-foreground">© 2025 НАДПО. Все права защищены.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#program" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Программа курса
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Результаты обучения
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Стоимость
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Записаться
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">8 800 707-49-04 (бесплатно)</li>
              <li className="text-sm text-muted-foreground">info@nadpo.ru</li>
              <li className="text-sm text-muted-foreground">Пн–Пт: 9:00–18:00</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
