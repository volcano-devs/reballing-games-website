import Image from 'next/image'

import Link from 'next/link'

export interface LogoProps {
  className?: string
  href?: string
}

export default function Logo({className, href}: LogoProps) {
  return (
    <Link href={href ?? '/'}>
      <div className={`h-10 ${className}`}>
        <span className="sr-only">Home</span>
        <Image
          priority
          src="/logo.png"
          alt="Reballing games"
          width={160}
          height={40}
          className="h-full w-full object-contain"
        />
      </div>
    </Link>
  )
}
