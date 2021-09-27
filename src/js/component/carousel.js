import React, { Fragment } from "react";

//create your first component
const Carousel = () => {
	return (
		<Fragment classNameName="text-center mt-5">
			<div
				id="carouselExampleIndicators"
				className="carousel carousel slide"
				data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="1"
						aria-label="Slide 2"></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="2"
						aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://cdn.pixabay.com/photo/2021/02/01/20/16/yachts-5971866__480.jpg"
							className="d-block w-100"
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://cdn.pixabay.com/photo/2021/02/01/20/16/yachts-5971866__480.jpg"
							className="d-block w-100"
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://cdn.pixabay.com/photo/2021/02/01/20/16/yachts-5971866__480.jpg"
							className="d-block w-100"
							alt="..."
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="prev">
					<span
						className="carousel-control-prev-icon rounded"
						aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next "
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="next">
					<span
						className="carousel-control-next-icon rounded"
						aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</Fragment>
	);
};

export default Carousel;
