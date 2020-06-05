import { element } from "prop-types";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const urlBase = "https://swapi.dev/api/";
let result = [];
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [],
			people: [],
			planets: [],
			favorites: []
		},
		actions: {
			loadDataSWapi: async (urlComplemento, section) => {
				const store = getStore();
				var urlNext = "1";
				var page = "";
				while (urlNext != null) {
					let response = await fetch(urlBase + urlComplemento + "?" + page);
					let data = await response.json();
					if (data.next != null) {
						page = data.next.split("?")[1];
					}
					urlNext = data.next;

					/*
					switch (section) {
						case people:
							result = store[section];
							data.results.forEach(item => result.push(item));
							setStore({ people: result });

							break;

						case planets:
							result = store[section];
							data.results.forEach(item => result.push(item));
							setStore({ planets: result });

							break;

						default:
							break;
                    }
                    */

					result = store[section];
					data.results.forEach(item => result.push(item));
					setStore({ section: result });
				}
			},

			loadSomePeople: () => {
				const action = getActions();
				action.loadDataSWapi("people/", "people");
			},

			loadSomePlanets: () => {
				const action = getActions();
				action.loadDataSWapi("planets/", "planets");
				/*
				fetch("https://swapi.dev/api/planets/")
					.then(response => response.json())
					.then(data => {
						setStore({ planets: data.results });
                    });*/
			},

			/*

			checkFavorites(favorite) {
				favorite.target.state = favorite.target.value.trim().length ? "valid" : "invalid";
			},

			saveFavorites: name => {
				const store = getStore();
				const action = getActions();

				if (store.favorites.findIndex(element => name == element) == -1) {
					setStore({ favorites: [...store.favorites, name] });
					action.sweetFav();
				} else {
					action.sweetFavRep();
				}
			},

			/*
                saveFavorites: name => {
				const store = getStore();

				if (store.favorites.findIndex(element => name == element) == -1) {
					setStore({ favorites: [...store.favorites, name] });
					alert("Se ha guardado a favoritos");
				} else {
					alert("Ya se agregó a favoritos");
				}
			},
            */

			//this.state.animals.find(ani => ani !== animal )

			saveFavorites: name => {
				const store = getStore();
				const action = getActions();

				if (store.favorites.findIndex(element => name == element) == -1) {
					setStore({ favorites: [...store.favorites, name] });
					action.sweetFav();
				} else {
					action.sweetFavRep();
				}
			},

			/*
			saveFavorites: name => {
				const store = getStore();
				if (store.favorites.lenght < 1) {
					setStore({ favorites: [...store.favorites, name] });
				} else {
					const checkDuplicate = store.favorites.map(item => {
						return Object.values(item)[0];
					});
					if (!checkDuplicate.includes(Object.values(name)[0])) {
						setStore({ favorites: [...store.favorites, name] });
					}
				}
            },
            */
			savePlanets: planet => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, planet] });
			},
			sweetDelete() {
				Swal.fire({
					type: "error",
					icon: "error",
					title: "Oops...",
					text: "Se ha eliminado de favoritos"
				});
			},
			sweetFav() {
				Swal.fire({
					type: "success",
					icon: "success",
					title: "Wiiii...",
					text: "Se ha añadido a favoritos"
				});
			},
			sweetFavRep() {
				Swal.fire({
					type: "warning",
					icon: "warning",
					title: "Wiiii...",
					text: "Ya se encuentra en favoritos"
				});
			},
			deleteFav: i => {
				const action = getActions();
				const store = getStore();
				const favorites = store.favorites.filter((item, index) => {
					return i !== index;
				});
				setStore({ favorites: [...favorites] });
				action.sweetDelete();
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
