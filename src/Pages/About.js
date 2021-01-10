import React from 'react'
import Greet from '../components/Greet'

function About() {
    return (
        <div>
            <h1>Hello from About page!</h1>
            <Greet name='Angel' heroName='Flash' />
            <Greet name='James' heroName='IronMan' />

        </div>
    )
}

export default About;