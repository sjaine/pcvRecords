// src/components/icons/VinylIcon.tsx
export default function VinylIcon({ className = "" }: { className?: string }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        className={className}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16,8c0,4.4-3.6,8-8,8S0,12.4,0,8,3.6,0,8,0s8,3.6,8,8M10,8c0-1.1-.9-2-2-2s-2,.9-2,2,.9,2,2,2,2-.9,2-2M4,8c0-2.2,1.8-4,4-4s.5-.2.5-.5-.2-.5-.5-.5c-2.8,0-5,2.2-5,5s.2.5.5.5.5-.2.5-.5M13,8c0-.3-.2-.5-.5-.5s-.5.2-.5.5c0,2.2-1.8,4-4,4s-.5.2-.5.5.2.5.5.5c2.8,0,5-2.2,5-5"
        />
      </svg>
    );
  }
  