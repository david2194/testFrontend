import * as Immutable from 'immutable';

const default_state = Immutable.fromJS({
    route: 'about',
    state: {
        about: {
            developpers: [
                {
                    id: 123,
                    avatar_url: 'https://octodex.github.com/images/Robotocat.png',
                    url: 'https://api.github.com/users/octocat',
                    html_url: 'https://github.com/octocat',
                    type: 'User',
                    contributions: 32
                }
            ]
        },
        menu: {
            pizzas: []
        }
    }
});

let state = default_state;

export default state;
