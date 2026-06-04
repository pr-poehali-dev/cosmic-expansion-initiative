import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "После курса выстроила систему ведения Instagram и за первый месяц получила 4 новых клиента. Раньше соцсети казались чем-то непонятным, теперь это рабочий инструмент.",
    name: "Анна К.",
    role: "Психолог-консультант",
  },
  {
    quote:
      "Наконец-то разобралась, как позиционировать себя и не конкурировать по цене. Создала сайт, написала продающие тексты — всё по шагам из курса. Очень структурировано и практично.",
    name: "Марина С.",
    role: "Семейный психолог",
  },
  {
    quote:
      "Запустила таргет на ВКонтакте буквально через неделю после окончания курса. Результат — 7 заявок в первые две недели. Рекомендую всем коллегам, кто хочет выйти из сарафанного радио.",
    name: "Елена Р.",
    role: "Детский психолог",
  },
  {
    quote:
      "Курс помог мне понять, что я уже эксперт — просто об этом никто не знал. Теперь веду Telegram-канал, есть постоянные читатели и регулярные запросы на консультации.",
    name: "Ирина Д.",
    role: "Клинический психолог",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши выпускники
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Реальные истории специалистов, которые прошли курс и выстроили стабильный поток клиентов.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
