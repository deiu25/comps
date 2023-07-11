import { useState } from 'react'
import { GoPlus, GoDash } from 'react-icons/go'

export const Accordion = ({ items }) => {

    const [expandedIndex, setExpandedIndex] = useState(0)

    const handleClick = (nextIndex) => {
        setExpandedIndex(nextIndex)
    }

    const rederedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex
        
        const icon = <span>
            {isExpanded ? <GoDash /> : <GoPlus /> }
        </span>

        return (
            <div key={item.id}>
            <div onClick={() => handleClick(index)}>{icon}{item.label}</div>
            <div>{isExpanded && <div>{item.content}</div>}</div>
            </div>
        )
    })

  return <div>
        {rederedItems}
  </div>
}
