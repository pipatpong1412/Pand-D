import Image from 'next/image'
import React from 'react'

export default function BackgroundImage() {
    return (
        <Image
            src="/images/pan-d-background.jpg"
            fill
            // objectFit='cover'
            style={{ objectFit: 'cover' }}
            alt="Background image"
        />
    )
}
