import React from "react";
import "../../styles/home.scss";
import { CardPeople } from "../component/cardPeople";
import { CardPlanets } from "../component/cardPlanets";

export const Home = () => (
	<div className="container testimonial-group">
		<h1>Characters</h1>
		<div className="row">
			<CardPeople />
		</div>
		<h1>Planets</h1>
		<div className="row">
			<CardPlanets />
		</div>
	</div>
);
