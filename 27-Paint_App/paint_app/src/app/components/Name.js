import React, { useState } from 'react'

export default function Name() {
    const [name, setName ] = ""

    return (
        <label className="header-name">
            <input 
                value={name}
                onchange={e => setName(e.target.value)}
                onClick={e => e.target.setSelectionRange(0, e.target.value.length)}
                placeholder="Untitled"
            />

        </label>
    )
}