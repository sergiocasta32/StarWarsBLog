import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardPeople = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			{store.people.map((item, index) => {
				return (
					<div key={index} className="col-4">
						<div className="card" style={{ width: "18rem" }}>
							<Link to={`/detailCardPeople/${index}`} style={{ color: "red" }}>
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
								<i className="fab fa-jedi-order" />
							</Link>
							<img
								className="cardimg-img-top"
								src="data:image/jpeg;base64,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"
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">Gender: {item.gender}</p>
								<p>Height: {item.height}</p>
								<p>Mass: {item.mass}</p>
								{item.isfav ? (
									<i
										className="fas fa-heart"
										id="likeIcon"
										onClick={() => actions.saveFavorites(index)}
										style={{ fontSize: "2rem" }}
									/>
								) : (
									<i
										className="far fa-heart"
										id="likeIcon"
										onClick={() => actions.saveFavorites(index)}
										style={{ fontSize: "2rem" }}
									/>
								)}
							</div>
						</div>
					</div>
				);
			})}
			<button
				className="btn btn-success"
				type="button"
				onClick={e => {
					console.log("clicked for nextPeople: ", store.peopleNext);
					actions.getData("people", store.peopleNext);
				}}>
				{"Show more results!"}
			</button>
		</>
	);
};
// <i class="fas fa-heart"></i>
