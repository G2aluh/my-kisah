import { useEffect, useRef, useCallback } from 'react';

const TRAIL_LENGTH = 8;

const CursorEffect = () => {
    const cursorRef = useRef(null);
    const trailRefs = useRef([]);
    const mousePos = useRef({ x: -100, y: -100 });
    const trailPositions = useRef(Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 })));
    const animFrameRef = useRef(null);

    const animate = useCallback(() => {
        if (cursorRef.current) {
            cursorRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px)`;
        }

        for (let i = 0; i < TRAIL_LENGTH; i++) {
            const target = i === 0 ? mousePos.current : trailPositions.current[i - 1];
            trailPositions.current[i].x += (target.x - trailPositions.current[i].x) * 0.4;
            trailPositions.current[i].y += (target.y - trailPositions.current[i].y) * 0.4;

            if (trailRefs.current[i]) {
                trailRefs.current[i].style.transform = `translate(${trailPositions.current[i].x}px, ${trailPositions.current[i].y}px)`;
            }
        }
        animFrameRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        document.body.style.cursor = 'none';
        window.addEventListener('mousemove', handleMouseMove);
        animFrameRef.current = requestAnimationFrame(animate);

        return () => {
            document.body.style.cursor = 'auto';
            window.removeEventListener('mousemove', handleMouseMove);
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, [animate]);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#2d1b2e',
                    boxShadow: '2px 2px 0px #fff',
                }}
            />
            {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (trailRefs.current[i] = el)}
                    className="fixed top-0 left-0 pointer-events-none z-[9998]"
                    style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: `rgba(251, 113, 133, ${1 - i * 0.1})`,
                    }}
                />
            ))}
        </>
    );
};

export default CursorEffect;
