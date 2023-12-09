import React from 'react'
import Image from 'next/image'


export default function Logo() {
  return (
    <div>
        <Image
            width={200}
            height={25}
            alt='Este es el logo'
            src={'/img/logo.svg'}
        />
    </div>
  )
}
