import React from 'react' 



function Meme() {

    const [memeImage, setMemeImage] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',

    })


    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMemeImage(prevMeme => ({
            ...prevMeme, 
            randomImage: url
        }))
    }

    function memeTextHandler(event) {
        const {name, value} = event.target 
        setMemeImage(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    return (
        <main>
            <div className="form"> 
                {/* <label>Top text  {/* label added for accessibility */} 
                    <input 
                    type='text'
                    placeholder='Top text'
                    className='form--input'
                    name='topText'
                    value={memeImage.topText}
                    onChange={memeTextHandler}
                    />
                {/* </label> */}
    
                {/* <label>Bottom text */}
                    <input
                    type='text'
                    placeholder='Bottom text'
                    className='form--input'
                    name='bottomText'
                    value={memeImage.bottomText}
                    onChange={memeTextHandler}/>
                {/* </label> */}
                <button className='form--button'
                onClick={getMemeImage}>
                    Get a new meme image 🖼️
                </button>
            </div >
            <div className='meme'>
                <img src={memeImage.randomImage} className='meme--image'/>
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </main>
       
    )
}

export default Meme