
import React from 'react';

interface ActionButtonProps {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode;
  variant: 'primary' | 'secondary';
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, onClick, icon, variant }) => {
  const baseClasses = "w-full flex items-center justify-center px-4 py-3 rounded-lg font-semibold text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800";
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-500 focus:ring-blue-500",
    secondary: "bg-slate-700 text-slate-200 hover:bg-slate-600 focus:ring-slate-500"
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]}`}>
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
};

export default ActionButton;
