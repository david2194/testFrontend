import React from 'react'


const AboutContributor = ({login, avatar_url, html_url, contributions}) => (
    <li>
        <h3><a href={html_url}>{login}</a></h3>
        <img src={avatar_url}/>
        <p>Nombre de commits: {contributions}</p>
    </li>
)


const About = ({contributors}) => (
    <ul>
        {contributors.map(contributor =>
            <AboutContributor
                key=contributor.id
                {...contributor}
             />
         )}
    </ul>
)

export default About
