import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export class Details extends React.Component {
	constructor() {
		super();
		this.state = {
			results: null
		};
	}

	componentDidMount = () => {
		fetch("https://swapi.dev/api/people/" + this.props.match.params.theid + "?format=json")
			.then(res => res.json())
			.then(response => {
				//console.log("Success:", typeof response);
				//	console.log(response);
				if (typeof response === typeof {}) {
					this.setState({ results: response });
					//console.log(this.state);
				} else {
					this.setState({ results: [] });
				}
			})
			.catch(error => console.error("Error:", error));
	};

	render() {
		if (!this.state.results) return <p className="p-5">Loading...</p>;
		return (
			<div className="container">
				<div className="row">
					<div className="col-6">
						<img src="http://via.placeholder.com/800x600" className="w-100" />
					</div>
					<div className="col-6">
						<div className="text-center m-3">
							<h2>{this.state.results.name}</h2>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
								architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
								sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
								voluptatem sequi
							</p>
						</div>
					</div>
				</div>
				<div className="row ml-1 mr-1 background border-top border-danger">
					<div className="col-12 d-flex justify-content-between text-danger text-center">
						<div className="appearances p-2 m-3">
							<h6>Name</h6>
							<p>{this.state.results.name}</p>
						</div>
						<div className="affiliations m-3 p-2">
							<h6>Birth Year</h6>
							<p className="text-center">{this.state.results.birth_year}</p>
						</div>
						<div className="locations p-2 m-3">
							<h6>Gender</h6>
							<p>{this.state.results.gender}</p>
						</div>
						<div className="gender p-2 m-3">
							<h6>Height</h6>
							<p>{this.state.results.height}</p>
						</div>
						<div className="dimensions p-2 m-3">
							<h6>Skin Color</h6>
							<p className="text-center">{this.state.results.skin_color}</p>
						</div>
						<div className="species p-2 m-3">
							<h6>Eye Color</h6>
							<p>{this.state.results.eye_color}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Details.propTypes = {
	match: PropTypes.object,
	name: PropTypes.string,
	results: PropTypes.object
};
