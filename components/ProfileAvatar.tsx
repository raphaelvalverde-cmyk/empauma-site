'use client'

import { useState } from 'react'

interface ProfileAvatarProps {
  src: string
  alt: string
  initial: string
  className?: string
  size?: 'sm' | 'lg'
}

export default function ProfileAvatar({ src, alt, initial, className = '', size = 'sm' }: ProfileAvatarProps) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className={className}>
      <span className={`avatar-initial${size === 'lg' ? ' avatar-initial-lg' : ''}`}>
        {initial}
      </span>
      {!imgFailed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setImgFailed(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            zIndex: 2,
          }}
        />
      )}
    </div>
  )
}
