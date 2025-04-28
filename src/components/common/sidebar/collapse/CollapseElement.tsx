import { PageButton, PageButtonProps } from "../buttons/pageButton/PageButton.tsx";

type CollapseElementProps = {
  title: string;
  index: number;
  elements: Array<PageButtonProps>;
};

function CollapseElement(props: CollapseElementProps) {
  return (
    <div tabIndex={props.index} className="collapse collapse-arrow mt-4">
      <input type="checkbox" defaultChecked={true} />
      <div className="collapse-title p-4 text-gray-500">{props.title}</div>
      <div className="collapse-content p-0">
        {props.elements.map((_, index) => {
          return <PageButton key={index} icon={props.elements[index].icon} title={props.elements[index].title} />;
        })}
      </div>
    </div>
  );
}

export default CollapseElement;
