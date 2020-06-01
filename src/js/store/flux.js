const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			people: [],
			planets: [],
			favorites: []
		},
		actions: {
			loadSomePeople: () => {
				const store = getStore();
				fetch("https://swapi.dev/api/people/")
					.then(response => response.json())
					.then(data => {
						setStore({ people: data.results });
					});
			},

			loadSomePlanets: () => {
				const store = getStore();
				fetch("https://swapi.dev/api/planets/")
					.then(response => response.json())
					.then(data => {
						setStore({ planets: data.results });
					});
			},

			saveFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},

			/*
			saveFavorites: people => {
				let store = getStore();
				const temp = store.favorites.concat([people]);
				setStore({
					favorites: temp
				});
            },
            */

			savePlanets: planet => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, planet] });
			},
			deleteFav: i => {
				const store = getStore();
				const favorites = store.favorites.filter((item, index) => {
					return i !== index;
				});
				setStore({ favorites: [...favorites] });
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};
export default getState;
