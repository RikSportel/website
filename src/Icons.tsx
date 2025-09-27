import React from 'react';

type IconProps = {
    href: string;
    alt: string;
    src: string;
    size?: number;
};

export const Icon: React.FC<IconProps> = ({ href, alt, src, size = 32 }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: size,
            height: size,
            transition: 'transform 0.2s',
            cursor: 'pointer',
            borderRadius: '50%',
            overflow: 'hidden',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.2)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
        <img src={src} alt={alt} style={{ width: size, height: size }} />
    </a>
);

type IconsProps = {
    children: React.ReactNode;
    gap?: number;
    style?: React.CSSProperties;
};

const Icons: React.FC<IconsProps> = ({ children, gap = 16, style }) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap,
            ...style,
        }}
    >
        {children}
    </div>
);

export default Icons;