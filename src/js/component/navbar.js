import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand" href="#">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlqRZMjCFdLQauXHu1QRX9TgC2tXBsFgA79_GnoGfiVaO__4-n&s"
					width="100px"
					height="50px"
					alt="star wars"
				/>
			</a>
			<div className="dropdown show dropleft">
				<button
					className="btn btn-dark dropdown-toggle"
					href="#"
					role="button"
					id="dropdownMenuLink"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					<>
						<ul>
							{store.favorites.map((item, index) => {
								return (
									<li key={index} className="dropdown-item" href="#">
										{item}{" "}
										<button
											onClick={() => actions.deleteFav(index)}
											className="float-right  btn btn-danger">
											X
										</button>
									</li>
								);
							})}
						</ul>
					</>
				</div>
			</div>
		</nav>
	);
};
