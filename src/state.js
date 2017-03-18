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
            }],
        top_ingredients : [
            {
                id: 1,
                name: 'Sauce tomate'
            },
            {
                id: 2,
                name: 'Fromage'
            }
        ],
        top_pizzas : [
            {
                id: 456,
                name: 'Pep-fro'
            },
            {
                id: 789,
                name: 'Hawaiian'
            }
        ]
    }
});

export let state = default_state;

const _fetchJSON = (url) => {
    const jsonPromise = window.fetch(url, {method: 'GET'})
          .then((response) => {
              return response.json();
          });
    return jsonPromise;
};

export const fetchAbout = () => {
    return _fetchJSON('/contributors');
};

export const fetchPizzaMenu = () => {
    return _fetchJSON('/menu/pizzas');
};

export const fetchTopPizzas = () => {
    return _fetchJSON('/menu/top/pizzas');
};

export const fetchTopIngredients = () => {
    return _fetchJSON('/menu/top/ingredients');
};

export const fetchLikePizza = (pizzaName, like) => {
    const url = '/menu/pizzas/like?name=' + pizzaName + '&like=' + like;
    return fetch(url, {method: 'PUT'}).then(response => response.json());
};