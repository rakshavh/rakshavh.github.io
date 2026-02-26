'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'painpoint', label: 'Painpoint' },
  { id: 'usability-testing', label: 'Usability testing + Insights' },
  { id: 'design-principles', label: 'Design Principles' },
  { id: 'explorations', label: 'Explorations' },
  { id: 'design-decisions', label: 'Design Decisions' },
  { id: 'impact', label: 'Impact' },
  { id: 'reflection', label: 'Reflection' },
] as const

export default function ButternutAICaseStudy() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id)
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id)
          return
        }
      }
      setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.pageYOffset - 100
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div className="relative w-screen -ml-[calc(50vw-50%)]">
      <div className="mx-auto flex max-w-6xl gap-8 px-6 pt-4 pb-24">
        {/* ── Left sidebar ── */}
        <aside className="hidden lg:flex w-44 shrink-0 flex-col sticky top-28 self-start gap-8 text-[13px] text-zinc-500 dark:text-zinc-400">
          <div className="space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              Butternut AI / GenAI co‑creation
            </p>
            <p className="leading-relaxed">
              Redesigning an AI‑powered website editor to help 300k+ small business owners publish customizable websites with ease.
            </p>
          </div>

          <nav className="flex flex-col gap-1.5">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollTo(s.id)}
                className={`text-left text-[13px] transition-colors ${
                  activeSection === s.id
                    ? 'font-medium text-zinc-900 dark:text-zinc-100'
                    : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                }`}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-1.5 text-[13px]">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-left text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
            >
              ↑ Back to top
            </button>
            <Link
              href="/"
              className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
            >
              ← Back home
            </Link>
          </div>
        </aside>

        {/* ── Main content ── */}
        <div className="min-w-0 flex-1 space-y-14">
          {/* Hero */}
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-violet-200 via-amber-100 to-rose-100 dark:from-violet-500/20 dark:via-amber-500/10 dark:to-rose-500/20">
            <div className="flex aspect-video w-full items-center justify-center text-sm text-zinc-500 dark:text-zinc-400">
              Video placeholder
            </div>
          </div>

          {/* Timeline / Context / Impact */}
          <dl className="grid grid-cols-3 gap-6 border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Timeline
              </dt>
              <dd className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                4 months
                <br />
                Team of 5
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Context
              </dt>
              <dd className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Client: Butternut AI
                <br />
                Contract, worked with the CEO, a UX manager, 4 UX Designers
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Impact
              </dt>
              <dd className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Increased website generation and editing satisfaction
                <br />
                Projected 50% increase in adoption rates to publish websites
              </dd>
            </div>
          </dl>

          {/* ── Sections ── */}
          <section id="painpoint" className="space-y-3 scroll-mt-28">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Painpoint
            </p>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Butternut AI generated websites in minutes, but 100K+ users dropped off
            </h2>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              A critical usability gap: users could create sites quickly but lacked the clarity, confidence, and control
              needed to complete the final publish site.
            </p>
          </section>

          <section id="usability-testing" className="space-y-3 scroll-mt-28">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Usability testing + Insights
            </p>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Usability testing + insights
            </h2>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              I led moderated usability sessions and interviews with prospective users to observe how they wrote prompts,
              iterated on drafts, and navigated the editor. We saw users get stuck when prompts felt too open‑ended and
              when important controls were hidden behind dense menus.
            </p>
          </section>

          <section id="design-principles" className="space-y-3 scroll-mt-28">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Design Principles
            </p>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Design principles
            </h2>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              From the research, we defined principles around prompt legibility, reversible AI actions, and continuous
              guidance. The editor should make it clear what the AI will change, show users how to undo any step, and
              keep them oriented in the flow from first idea to publish.
            </p>
          </section>

          <section id="explorations" className="space-y-3 scroll-mt-28">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Explorations
            </p>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Explorations
            </h2>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              I sketched and prototyped multiple flows for onboarding, prompt suggestions, and inline editing. We tested
              variations of the prompt surface—single long prompt versus guided chips—to find a balance between
              flexibility for advanced users and structure for first‑time founders.
            </p>
          </section>

          <section id="design-decisions" className="space-y-3 scroll-mt-28">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Design Decisions
            </p>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Design decisions
            </h2>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              The final design introduced a guided prompt pattern, contextual edit affordances directly on the canvas,
              and clearer status messaging around what the AI was doing. These decisions reduced cognitive load and made
              the editing experience feel more predictable.
            </p>
          </section>

          <section id="impact" className="space-y-3 scroll-mt-28">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Impact
            </p>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Impact
            </h2>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              In follow‑up testing, participants were more likely to reach a publishable draft and described the flow as
              &quot;transparent&quot; and &quot;easy to recover from mistakes.&quot; The team is using these learnings to
              inform future experiments on generative onboarding and editor tooling.
            </p>
          </section>

          <section id="reflection" className="space-y-3 scroll-mt-28">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Reflection
            </p>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Reflection
            </h2>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              This project reinforced the importance of pairing AI capabilities with clear, ability‑based interaction
              patterns. Working closely with engineering and product helped us scope changes that could ship quickly
              while setting a foundation for deeper experimentation.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
