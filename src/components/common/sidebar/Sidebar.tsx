import logoImg from "../../../assets/newLogo.svg";

function Sidebar() {
	return (
		<>
			<div className="h-svh w-85 bg-gray-100 p-10 border-r border-gray-200">
				<img src={logoImg} alt="LogoImg" />
				<nav>
					<ul></ul>
				</nav>
			</div>
		</>
	);
}

export default Sidebar;
