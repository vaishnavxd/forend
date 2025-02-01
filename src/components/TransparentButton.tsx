export const TransparentButton = ({ 
    children, 
    onClick 
  }: { 
    children: React.ReactNode, 
    onClick: () => void 
  }) => {
    return (
      <button
        onClick={onClick}
        className="
          bg-transparent
          hover:bg-gray-100
          text-gray-800
          font-bold
          py-2
          px-4
          rounded
          transition-colors
          duration-200
          focus:outline-none
          focus:ring-2
          focus:ring-gray-400
          focus:ring-offset-2
          inline-block // Added for content-based width
        "
      >
        {children}
      </button>
    );
  };