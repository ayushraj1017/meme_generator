import React from 'react'

const Header = () => {
    return (
        <div>
            <header className=" flex justify-center items-center bg-yellow-500">
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFse22nHw43uO46iw76ZSfZ-n5-NVQtdKcQ&usqp=CAU" 
                alt="" 
                className=""

                />
            </header>
            <h1 className=" text-4xl  flex justify-center items-center bg-yellow-500 text-yellow-100">
            <p>Meme Generator</p>

            </h1>
        </div>
    )
}

export default Header
