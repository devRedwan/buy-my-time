import React from "react";
import Collapsible from "react-collapsible";

const AccordianMenu = ({ title, children }) => (
  <Collapsible
    className="accordianMenu"
    open={true}
    openedClassName="accordianMenu active"
    triggerClassName="accordianMenu-title"
    triggerOpenedClassName="accordianMenu-title active"
    triggerTagName="button"
    contentInnerClassName="accordianMenu-content"
    trigger={title}
    transitionTime={300}
    easing="ease-out">
    {children}
  </Collapsible>
);

export default AccordianMenu;
