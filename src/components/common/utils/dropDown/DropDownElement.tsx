export type DropDownElementProps = {
	title: string;
	index: number;
	elements: Array<DropDownInnerElement>;
};

type DropDownInnerElement = {
	icon: string;
	title: string;
};

function DropDownElement(props: DropDownElementProps) {
	return (
		<div tabIndex={props.index} className="collapse collapse-arrow bg-base-100 border-base-300 border">
			<div className="collapse-title font-semibold">{props.title}</div>
			<div className="collapse-content text-sm">
				{props.elements.map((_, index) => {
					return (
						<div className="flex">
							<img src={props.elements[index].icon} alt="DropDown Element Icon" />
							<h3>{props.elements[index].title}</h3>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default DropDownElement;
