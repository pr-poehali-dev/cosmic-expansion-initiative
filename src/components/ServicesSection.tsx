import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Instagram, Users, Megaphone, Star, FileText } from "lucide-react"

const modules = [
  {
    icon: Star,
    title: "Личный бренд психолога",
    description:
      "Как сформировать уникальное позиционирование, выделиться среди коллег и стать узнаваемым специалистом. Разработка концепции личного бренда и фирменного стиля.",
  },
  {
    icon: Globe,
    title: "Сайт и онлайн-присутствие",
    description:
      "Создание продающего сайта, наполнение контентом, SEO-оптимизация. Как сделать так, чтобы клиенты находили вас в интернете и записывались на консультацию.",
  },
  {
    icon: Instagram,
    title: "Продвижение в социальных сетях",
    description:
      "ВКонтакте, Telegram, Instagram — выбор площадок, стратегия контента, оформление профиля. Как вести соцсети, которые приносят реальных клиентов.",
  },
  {
    icon: FileText,
    title: "Контент-маркетинг",
    description:
      "Создание экспертного контента: статьи, посты, видео, подкасты. Как писать материалы, которые привлекают целевую аудиторию и формируют доверие.",
  },
  {
    icon: Megaphone,
    title: "Платное продвижение и реклама",
    description:
      "Таргетированная реклама, контекстная реклама, работа с агрегаторами специалистов. Как запустить рекламу с минимальным бюджетом и получить первых клиентов.",
  },
  {
    icon: Users,
    title: "Работа с аудиторией и репутацией",
    description:
      "Сбор и работа с отзывами, управление репутацией в сети, нетворкинг и партнёрства с коллегами. Как выстроить долгосрочный поток рекомендаций.",
  },
]

export function ServicesSection() {
  return (
    <section id="program" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Программа курса
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что вы <span className="text-primary">изучите</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          6 модулей, охватывающих все современные инструменты продвижения — от создания личного бренда до запуска рекламы и работы с репутацией.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <module.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{module.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{module.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
