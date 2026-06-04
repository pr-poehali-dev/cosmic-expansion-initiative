import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Стоимость обучения
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Выберите <span className="text-primary">способ оплаты</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Рассрочка 0% — без переплат, без первого взноса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Рассрочка */}
          <Card className="relative hover:border-primary/50 hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl mb-1">Рассрочка 0%</CardTitle>
              <p className="text-sm text-muted-foreground">На 12 месяцев без первого взноса</p>
              <div className="mt-4">
                <div className="text-4xl font-bold text-primary">2 067 ₽</div>
                <div className="text-sm text-muted-foreground mt-1">в месяц · итого 24 800 ₽</div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                {[
                  "Все видеолекции и материалы курса",
                  "Практические задания и шаблоны",
                  "Удостоверение о повышении квалификации",
                  "Дистанционный формат, учитесь в своём темпе",
                  "Оплата частями — без банка и переплат",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant="outline" asChild>
                <a href="#contact">Оформить рассрочку</a>
              </Button>
            </CardContent>
          </Card>

          {/* Полная оплата */}
          <Card className="relative border-primary shadow-xl bg-gradient-to-b from-background to-primary/5 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
              Выгоднее · до 5 июня
            </div>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl mb-1">Полная оплата</CardTitle>
              <p className="text-sm text-muted-foreground">Дополнительная скидка −5% при оплате на сайте</p>
              <div className="mt-4">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-primary">23 560 ₽</span>
                </div>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="text-sm text-muted-foreground line-through">36 000 ₽</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">−31%</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">без скидки — 24 800 ₽</div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                {[
                  "Все видеолекции и материалы курса",
                  "Практические задания и шаблоны",
                  "Удостоверение о повышении квалификации",
                  "Дистанционный формат, учитесь в своём темпе",
                  "Максимальная экономия — скидка 31%",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full shadow-lg shadow-primary/20" asChild>
                <a href="#contact">Записаться со скидкой</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Все варианты включают{" "}
            <span className="text-primary font-semibold">удостоверение о повышении квалификации</span>{" "}
            государственного образца · Программа прошла экспертизу
          </p>
        </div>
      </div>
    </section>
  )
}
