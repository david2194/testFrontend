import * as Immutable from 'immutable';

const default_state = Immutable.fromJS({
    about: {
        contributors: [
            {
                id: 123,
                login: 'octocat-1',
                avatar_url: 'https://octodex.github.com/images/Robotocat.png',
                url: 'https://api.github.com/users/octocat',
                html_url: 'https://github.com/octocat',
                type: 'User',
                contributions: 32
            },
            {
                id: 456,
                login: 'octocat-2',
                avatar_url: 'https://octodex.github.com/images/Robotocat.png',
                url: 'https://api.github.com/users/octocat',
                html_url: 'https://github.com/octocat',
                type: 'User',
                contributions: 42
            },
            {
                id: 789,
                login: 'octocat-3',
                avatar_url: 'https://octodex.github.com/images/Robotocat.png',
                url: 'https://api.github.com/users/octocat',
                html_url: 'https://github.com/octocat',
                type: 'User',
                contributions: 12
            }
        ]
    },
    menu: {
        pizzas: [
            {
                id: 456,
                name: 'Pep-fro',
                img: 'https://media2.popsugar-assets.com/files/2016/02/08/898/n/1922398/4c2124bfd07afeca_heart-shaped-pizza-2016.xxxlarge_2x.jpg',
                description: 'Le grand classique à Gilles',
                ingredients: [
                    {
                        id: 1,
                        name: 'Sauce tomate'
                    },
                    {
                        id: 2,
                        name: 'Fromage'
                    }
                ]
            }]
    }
});

export let state = default_state;

export const fetchAbout = () => {
    return window.fetch('/contributors', {method: 'GET'});
};

export const fetchPizzaMenu = () => {
    return window.fetch('/menu/pizzas', {method: 'GET'});
};
