import React from 'react';
import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <main style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Spline scene="https://prod.spline.design/kgQb2vdqLxGuaQnc/scene.splinecode" />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', textAlign: 'center' }}>
        <h1>KIPYEGON Dashboard</h1>
        <p>Welcome to your personal finance management tool</p>
      </div>
    </main>
  );
}
