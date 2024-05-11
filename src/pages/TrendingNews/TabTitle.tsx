import React from "react"

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index }) => {
  // console.log("index:", index, "title:", title)
  
  return (
    <li id={"tab"+index} className="font-bold">
      <button onClick={() => {
        setSelectedTab(index)
        
      }} className="text-nowrap">{title}</button>
    </li>
  )
}

export default TabTitle