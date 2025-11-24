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
      <div className={`h-10 ${className}`}>
        <Image
          priority
          src={ReballingGamesLogo.src}
          alt="Reballing games"
          width={320}
          height={80}
          className="h-full w-full object-contain mix-blend-lighten"
        />
      </div>
      {/* <div className="text-white text-2xl font-bold">LOGO</div> */}
    </Link>
  )
}
