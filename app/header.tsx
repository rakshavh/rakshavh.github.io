'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
          <Image
            src="/profile-photo.jpg"
            alt="Raksha Hungund"
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Raksha Hungund
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Open to Research Assistant opportunities
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
