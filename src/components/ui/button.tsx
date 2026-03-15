import { Button } from 'shadcn/ui';
import React from 'react';

interface LuxuryButtonProps {
    label: string;
    onClick: () => void;
}

const LuxuryButton: React.FC<LuxuryButtonProps> = ({ label, onClick }) => {
    return (
        <Button 
            className="luxury-button"
            onClick={onClick} 
            style={{
                backgroundColor: '#FFD700', // Gold color for luxury theme
                color: 'white',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
            }}
        >
            {label}
        </Button>
    );
};

export default LuxuryButton;