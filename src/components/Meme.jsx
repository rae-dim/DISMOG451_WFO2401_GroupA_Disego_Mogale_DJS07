import React from 'react' 




function Meme() {
    return (
        <main>
            <div className="form"> 
                <label>Top text  {/* label added for accessibility */}
                    <input 
                    type='text'
                    placeholder='Top text'
                    className='form--input'
                    />
                </label>
    
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

export default Meme