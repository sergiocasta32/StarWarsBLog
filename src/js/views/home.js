import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { CardPeople } from "../component/cardPeople";
import { CardPlanets } from "../component/cardPlanets";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container testimonial-group">
			<h1>Characters</h1>
			<div className="row">
				<CardPeople />
			</div>
			<div>
				<button
					className="btn btn-success"
					type="button"
					onClick={e => {
						console.log("clicked for nextPeople: ", store.peopleNext);
						actions.getData("people", store.peopleNext);
					}}>
					{"Show more results!"}
				</button>
			</div>
			<h1>Planets</h1>
			<div className="row">
				<CardPlanets />
			</div>
			<div>
				<button
					className="btn btn-success"
					type="button"
					onClick={e => {
						console.log("clicked for nextPlanets: ", store.planetsNext);
						actions.getData("planets", store.planetsNext);
					}}>
					{"Show more results!"}
				</button>
			</div>
		</div>
	);
};
