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
			peopleNext: [],
			planetsNext: [],
			favorites: []
		},
		actions: {
			getData: (name, pageNumber = 1) => {
				let url = "https://swapi.dev/api/" + name + "/?page=" + pageNumber;
				const currentStore = getStore();
				let nameNext = name + "Next";
				fetch(url)
					.then(res => res.json())
					.then(result => {
						let itemList = [];
						if (name in currentStore) {
							itemList = currentStore[name];
							//console.log(itemList);
						}
						for (let item of result.results) {
							// console.log(`this is item.url: ${item.url}`);
							let itemId = item.url.match(/[/][0-9]+[/]/)[0].replace(/[/]/g, "");
							// console.log(`this is itemId: ${itemId}`);
							item.id = itemId;
							itemList.push(item);
						}
						setStore({
							[name]: itemList,
							[nameNext]: result.next.split("=")[1]
						});
					})
					.catch(e => console.error(e));
			},

			loadSomePeople: () => {
				const action = getActions();
				action.getData("people");
			},

			loadSomePlanets: () => {
				const action = getActions();
				action.getData("planets");
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

			/*saveFavorites: index => {
				const store = getStore();
				const action = getActions();
				var arrayPeople = store.people;
				if (arrayPeople[index].isfav) {
					arrayPeople[index] = { ...arrayPeople[index], isfav: false };
					setStore({ people: arrayPeople });
					action.deleteFav(index);
					action.sweetFavRep();
				} else {
					arrayPeople[index] = { ...arrayPeople[index], isfav: true };
					setStore({ people: arrayPeople });
					setStore({ favorites: [...store.favorites, arrayPeople[index].name] });
					action.sweetFav();
				}
				/*
				if (store.favorites.findIndex(element => name == element) == -1) {
					setStore({ favorites: [...store.favorites, index] });
					action.sweetFav();
					
				} else {
					action.sweetFavRep();
                }
                
			},*/

			saveFavorites: (index, category) => {
				const store = getStore();
				const action = getActions();
				var arrayCategory = store[category];
				if (arrayCategory[index].isfav) {
					arrayCategory[index] = { ...arrayCategory[index], isfav: false };
					setStore({ [category]: arrayCategory });
					action.deleteFav(index);
					action.sweetFavRep();
				} else {
					arrayCategory[index] = { ...arrayCategory[index], isfav: true };
					setStore({ [category]: arrayCategory });
					setStore({ favorites: [...store.favorites, arrayCategory[index].name] });
					action.sweetFav();
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
			deleteFav: (i, category) => {
				const action = getActions();
				const store = getStore();
				var arrayCategory = store[category];
				const favorites = store.favorites.filter((item, index) => {
					return i !== index;
				});
				setStore({ favorites: [...favorites] });
				arrayCategory[i] = { ...arrayCategory[i], isfav: false };
				setStore({ [category]: arrayCategory });
				action.sweetDelete();
			}
		}
	};
};
export default getState;
