import React from 'react'

export default function Meme() {
    return (
        <main>
            <div>
                <label>Top text  {/* label added for accessibility */}
                    <input 
                    type='text'
                    placeholder='Top text'
                    className='form--input'
                    />
                </label>
            </div>

            <div>
                <label>Bottom text
                    <input
                    type='text'
                    placeholder='Bottom text'
                    className='form--input'/>
                </label>
                <button className='form--button'>Get a new meme image 🖼️</button>
            </div>
        </main>
       
    )
}