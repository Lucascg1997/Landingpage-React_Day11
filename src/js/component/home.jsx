import React, { Fragment } from "react";
import Header from "./header";
import Cards from "./cards";
import Carousel from "./carousel";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<Fragment className="text-center mt-5">
			<Header />
			<Carousel />
			<div className="container">
				<div className="row">
					<div className="col">
						<Cards />
					</div>
					<div className="col">
						<Cards />
					</div>
					<div className="col">
						<Cards />
					</div>
					<div className="col">
						<Cards />
					</div>
					<div className="col">
						<Cards />
					</div>
					<div className="col">
						<Cards />
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

export default Home;
