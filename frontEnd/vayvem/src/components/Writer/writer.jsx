import React from 'react'
import Typewriter from 'typewriter-effect'
import './writer.css'

function Writer() {
	return (
    <div className="writer">
		<Typewriter 
			options={{
				strings: ['BEM VINDO, AQUI VOCÊ', 'VAYVEM COM A GENTE', 'VAMOS VIAJAR?'],
				autoStart: true,
				loop: true,
				deleteSpeed: 70,
			}}
		/>
    <div className="writerJapanese"> 
    <Typewriter 
			options={{
				strings: ['BIENVENUE ICI VOUS', 'VAYVEM AVEC NOUS', 'VOYAGEONS?'],
				autoStart: true,
				loop: true,
				deleteSpeed: 70,
        delay: 230,
        
			}}
		/>
    </div>
    </div>
	)
}

export default Writer
