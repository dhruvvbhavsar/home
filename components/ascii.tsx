"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

const getRandomASCII = () => {
  const specialChars = "!#$%8080:   ";
  return specialChars[Math.floor(Math.random() * specialChars.length)];
};

const getRandomIndices = (
  rows: number,
  cols: number,
  count: number
): string[] => {
  const indices = new Set();
  while (indices.size < count) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);
    indices.add(`${row}-${col}`);
  }
  return Array.from(indices) as string[];
};

export default function ASCII() {
  const [, setDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });
  const [highlightedIndices, setHighlightedIndices] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculateGridSize = useCallback(() => {
    if (containerRef.current) {
      const cellSize = 20; // Increased cell size for larger, spaced characters
      const rows = Math.floor(containerRef.current.clientHeight / cellSize);
      const cols = Math.floor(containerRef.current.clientWidth / cellSize);
      return { rows, cols };
    }
    return { rows: 0, cols: 0 };
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      setGridSize(calculateGridSize());
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => window.removeEventListener("resize", updateDimensions);
  }, [calculateGridSize]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndices(getRandomIndices(gridSize.rows, gridSize.cols, 5));
    }, 500);

    return () => clearInterval(interval);
  }, [gridSize.rows, gridSize.cols]);

  const memoizedGrid = React.useMemo(() => {
    return Array.from({ length: gridSize.rows }, () =>
      Array.from({ length: gridSize.cols }, getRandomASCII)
    );
  }, [gridSize.rows, gridSize.cols]);

  return (
    <main
      ref={containerRef}
      className="font-mono fixed inset-0 h-screen -z-10 bg-white overflow-hidden flex items-center justify-center"
    >
      <div
        className="grid text-blue-400/10 break-words select-none font-normal contain-strict"
        style={{
          gridTemplateColumns: `repeat(${gridSize.cols}, 20px)`,
          gridTemplateRows: `repeat(${gridSize.rows}, 20px)`,
          gap: "1px",
        }}
      >
        {memoizedGrid.map((row, rowIndex) =>
          row.map((char, colIndex) => {
            const key = `${rowIndex}-${colIndex}`;
            const isHighlighted = highlightedIndices.includes(key);
            return (
                <span
                key={key}
                className={`flex items-center justify-center text-lg transition-all duration-500 ${
                  isHighlighted ? "text-blue-400/70 animate-fade" : ""
                } hover:text-blue-400/70`}
                >
                {char}
                </span>
            );
          })
        )}
      </div>
    </main>
  );
}
