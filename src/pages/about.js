import React from 'react'
import Link from 'next/link'

function About() {
    return (
        <>
            <h1>About</h1>

            <Link legacyBehavior href="/">
                <a>Home</a>
            </Link>

        </>
    )
}

export default About