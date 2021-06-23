import React, { useState, useEffect, useRef } from "react";
import { useClickOutside } from "common/hooks/useClickOutside";
import { Icon } from "common/components/Icon";
import "./SidePanel.scss";

export function SidePanel({ title, children, onClose }) {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setOpen(Boolean(children));
  }, [children]);

  useClickOutside(ref, close);

  function close() {
    if (!isOpen) return;
    setOpen(false);
    onClose();
  }

  return (
    <div ref={ref} className={`sidePanel ${!isOpen && "sidePanel_hide"}`}>
      <header className="sidePanel__header">
        <h2 className="sidePanel__title">{title}</h2>
        <div>
          <button className="button button_icon" onClick={close}>
            <Icon name="close" />
          </button>
        </div>
      </header>
      <div className="sidePanel__content">{children}</div>
    </div>
  );
}
