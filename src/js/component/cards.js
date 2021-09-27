import React from "react";

//create your first component
const Cards = () => {
	return (
		<div className="card">
			<img
				src="https://cdn.pixabay.com/photo/2016/09/10/11/11/jazz-1658886__480.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Stet clita kasd gubergren, no sea takimata sanctus est Lorem
					ipsum dolor sit amet.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Cards;
