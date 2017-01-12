import React from 'react'
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl'


const AboutContributor = ({login, avatar_url, html_url, contributions}) => {
    const style = {backgroundImage: 'url(' + avatar_url + ')'}
    const buttonOnClick = () => {location.href = html_url};
    return (
        <Cell col={4}>
            <Card className='card'>
                <CardTitle className='card-title' expand style={style}>{login}</CardTitle>
                <CardText>
                    Number of commits: {contributions}
                </CardText>
                <CardActions border>
                    <Button colored type='button' onClick={buttonOnClick}>View profile</Button>
                </CardActions>
            </Card>
        </Cell>
    )
};


const About = ({state}) => (
    <Grid>
    {state.get('contributors').toSeq().map(contributor =>
        <AboutContributor
        key={contributor.get('id')}
        {...contributor.toJS()}
        />)}
    </Grid>
);

export default About;
