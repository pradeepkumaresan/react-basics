import React, { useState, useEffect } from 'react';
import Tree from 'react-d3-tree';

const CapabilityGraph = () => {
  // Define your hierarchy data
  const [data, setData] = useState({
    name: 'Root',
    children: [
      {
        name: 'Capability A',
        children: [
          { name: 'Sub Capability A1' },
          { name: 'Sub Capability A2' },
        ],
      },
      {
        name: 'Capability B',
        children: [
          { name: 'Sub Capability B1' },
          { name: 'Sub Capability B2' },
        ],
      },
    ],
  });

  // Define tree configuration
  const [treeConfig, setTreeConfig] = useState({
    nodeSize: { x: 200, y: 100 },
    separation: { siblings: 1, nonSiblings: 1 },
    transitionDuration: 0,
  });

  // Adjusting tree dimensions
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resizeListener = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set dimensions on mount
    resizeListener();

    // Add resize listener
    window.addEventListener('resize', resizeListener);

    // Remove resize listener on component unmount
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Tree
        data={data}
        orientation="vertical"
        translate={{ x: dimensions.width / 2, y: 50 }}
        zoom={0.6}
        zoomable={true}
        separation={treeConfig.separation}
        nodeSize={treeConfig.nodeSize}
        transitionDuration={treeConfig.transitionDuration}
        onClick={(_, nodeData) => {
          console.log('Clicked:', nodeData.name);
        }}
      />
    </div>
  );
};

export default CapabilityGraph;
