export type PageButtonProps = {
  icon: string;
  title: string;
};

export function PageButton(props: PageButtonProps) {
  return (
    <button className="flex items-center rounded-2xl w-full min-h-12 cursor-pointer hover:bg-white w-full px-4">
      <img className="mr-3" src={props.icon} alt="AccordionElementIcon" />
      <h3>{props.title}</h3>
    </button>
  );
}
