type Props = {
    direction?: 'up' | 'down';
    className?: string;
  };
  
  export default function ArrowIcon({ direction = 'up', className = 'w-12 h-6' }: Props) {
    const rotation = direction === 'down' ? 'rotate-180' : '';
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} stroke-current transform ${rotation}`}
      >
        <path
          d="M8 14L12 10L16 14"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  