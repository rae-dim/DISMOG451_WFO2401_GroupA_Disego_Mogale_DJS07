import React from 'react' 



function Meme() {

    const [memeImage, setMemeImage] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',

    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMemeImage(prevMeme => ({
            ...prevMeme, 
            randomImage: url
        }))
    }

    return (
        <main>
            <div className="form"> 
                {/* <label>Top text  {/* label added for accessibility */} 
                    <input 
                    type='text'
                    placeholder='Top text'
                    className='form--input'
                    />
                {/* </label> */}
    
                {/* <label>Bottom text */}
                    <input
                    type='text'
                    placeholder='Bottom text'
                    className='form--input'/>
                {/* </label> */}
                <button className='form--button'
                onClick={getMemeImage}>
                    Get a new meme image 🖼️
                </button>
            </div>
            <img src={memeImage.randomImage} className='meme--image'/>
        </main>
       
    )
}

export default Meme