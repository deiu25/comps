import { useState } from "react";
import { GoPlus, GoDash } from "react-icons/go";

export const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (nextIndex) => {
    setExpandedIndex(nextIndex);
  };

  const rederedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = <span className="text-2xl">{isExpanded ? <GoDash /> : <GoPlus />}</span>;

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 gb-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        <div>
          {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </div>
      </div>
    );
  });

  return <div className="border-x border-t rouded">{rederedItems}</div>;
};
