import Image from 'next/image'

import ReballingGamesLogo from '@app/logo.png'
import Link from 'next/link'

export interface LogoProps {
  className?: string
  href?: string
}

export default function Logo({className, href}: LogoProps) {
  return (
    <Link href={href ?? '/'}>
      <div className={`w-32 md:w-44 bg-background ${className}`}>
        <Image
          priority
          src={ReballingGamesLogo.src}
          alt="Reballing games"
          width={320}
          height={100}
          className="h-full w-full mix-blend-lighten object-cover"
        />
      </div>
    </Link>
  )
}
