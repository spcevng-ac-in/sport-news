import React, { ReactElement, useState } from "react"
import TabTitle from "./TabTitle"

type Props = {
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className="overflow-auto">
      <div>
        <ul className="flex list-none inline flex justify-between">
          <TabTitle
            key={0}
            title={"You Likes!"}
            index={0}
            setSelectedTab={setSelectedTab}
          />
          {children.map((item, index) => (
            <TabTitle
              key={index + 1}
              title={item.props.title}
              index={index + 1}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </ul>
      </div>
      <div className="h-auto">
        {children[selectedTab]}
      </div>
    </div>
  )
}

export default Tabs