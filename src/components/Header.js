import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Web3 from 'web3';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			web3: 0
		};
		this.connectWallet = this.connectWallet.bind(this);
	}

	connectWallet = async () => {
		const web3Prov = new Web3(window.ethereum);
		window.ethereum.enable().catch((error) => {
			// User denied account access
			console.log(error);
		});
		this.setState({
			web3: web3Prov
		});
	}

	render() {
		const navLinks = [
			{ path: '/', text: 'Home' },
			{ path: '/presale', text: 'Presale' },
			{ path: '/agora', text: 'Agora' },
			{ path: '/faq', text: 'Faq' }
		];

		return (
			<div className="fixed w-full top-0 bg-white z-10">
				{/* Announcement */}
				<div className="bg-black h-16 flex justify-center items-center">
					<span className="font-body text-white">
						<strong className="uppercase">Announcement: </strong>
						New region is opened 0Xa34...A334
					</span>
				</div>
				{/* Navigation */}
				<nav className="bg-black">
					<div className="w-full mx-auto px-4">
						<div className="flex items-center h-16">
							<div className="w-full flex justify-between items-center">
								<NavLink
									className="flex-shrink-0"
									exact
									to="/"
								>
									<span className="font-sans-sc font-bold text-white uppercase">Rome Finance</span>
								</NavLink>
								<div>
									<div className="flex items-center">
										{navLinks.map((link) => (
											<NavLink
												key={link.path}
												className="font-sans-sc font-bold uppercase text-white mx-4"
												activeClassName="font-sans-sc font-bold uppercase text-rf-yellow-200 mx-4"
												exact
												to={link.path}
											>
												{link.text}
											</NavLink>
										))}
									</div>
								</div>
								<button
									type="button"
									className="btn btn-primary"
									onClick={this.connectWallet}
								>
									Connect
								</button>
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
