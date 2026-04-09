import React, { useState, Children, cloneElement } from 'react';

const Tabs = ({ children, className = '' }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = Children.toArray(children).filter(child => child.type === Tab);
  const panels = Children.toArray(children).filter(child => child.type === TabPanel);

  return (
    <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 ${className}`}>
      {/* Tab Headers */}
      <div className="border-b border-gray-200">
        <div className="flex -mb-px">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`flex-1 relative px-8 py-6 font-bold text-xl transition-all group ${
                activeTab === index 
                  ? 'text-indigo-700 border-b-4 border-indigo-500 bg-indigo-50 shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:shadow-md'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.props.children}
              {activeTab === index && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Panels */}
      <div className="p-0">
        {panels[activeTab]}
      </div>
    </div>
  );
};

const Tab = ({ children }) => <>{children}</>;
Tab.displayName = 'Tab';

const TabPanel = ({ children, className = '' }) => (
  <div className={`p-12 ${className}`}>
    {children}
  </div>
);
TabPanel.displayName = 'TabPanel';

Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;

export default Tabs;

// Usage:
// <Tabs>
//   <Tabs.Tab>Tab 1</Tabs.Tab>
//   <Tabs.TabPanel>Content 1</Tabs.TabPanel>
//   <Tabs.Tab>Tab 2</Tabs.Tab>
//   <Tabs.TabPanel>Content 2</Tabs.TabPanel>
// </Tabs>

