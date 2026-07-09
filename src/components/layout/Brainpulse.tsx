"use client";

// Auto-generated overlay: traces the circuit lines in blue-brain.png and
// animates small glowing pulses traveling along each real path.
// Sits directly on top of the <Image> in the background layer.
const BrainPulseOverlay = () => {
  return (
    <svg
      viewBox="0 0 780 581"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
    <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2.2" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
      <g filter="url(#pulseGlow)">
        
    
  <path d="M 549.0,248.0 L 547.0,220.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="9.8 37.9">
    <animate attributeName="stroke-dashoffset"
             from="37.9" to="-9.8"
             dur="1.00s" begin="5.75s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="5.75s" repeatCount="indefinite"/>
  </path>
  <path d="M 359.0,218.0 L 410.0,219.0 L 412.0,221.0 L 412.0,241.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="25.8 99.7">
    <animate attributeName="stroke-dashoffset"
             from="99.7" to="-25.8"
             dur="1.34s" begin="0.23s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.34s" begin="0.23s" repeatCount="indefinite"/>
  </path>
  <path d="M 419.0,260.0 L 349.0,260.0 L 320.0,229.0 L 321.0,212.0 L 339.0,196.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="53.7 207.3">
    <animate attributeName="stroke-dashoffset"
             from="207.3" to="-53.7"
             dur="2.79s" begin="2.48s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="2.79s" begin="2.48s" repeatCount="indefinite"/>
  </path>
  <path d="M 530.0,308.0 L 530.0,332.0 L 503.0,359.0 L 491.0,360.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="26.0 100.2">
    <animate attributeName="stroke-dashoffset"
             from="100.2" to="-26.0"
             dur="1.35s" begin="2.01s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.35s" begin="2.01s" repeatCount="indefinite"/>
  </path>
  <path d="M 382.0,149.0 L 369.0,161.0 L 332.0,162.0 L 310.0,181.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="29.3 113.1">
    <animate attributeName="stroke-dashoffset"
             from="113.1" to="-29.3"
             dur="1.52s" begin="6.63s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.52s" begin="6.63s" repeatCount="indefinite"/>
  </path>
  <path d="M 482.0,348.0 L 441.0,381.0 L 441.0,434.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="37.0 142.6">
    <animate attributeName="stroke-dashoffset"
             from="142.6" to="-37.0"
             dur="1.92s" begin="6.09s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.92s" begin="6.09s" repeatCount="indefinite"/>
  </path>
  <path d="M 342.0,294.0 L 328.0,294.0 L 318.0,300.0 L 280.0,301.0 L 253.0,271.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="36.4 140.4">
    <animate attributeName="stroke-dashoffset"
             from="140.4" to="-36.4"
             dur="1.89s" begin="8.03s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.89s" begin="8.03s" repeatCount="indefinite"/>
  </path>
  <path d="M 438.0,359.0 L 466.0,337.0 L 441.0,317.0 L 419.0,317.0 L 409.0,326.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="36.1 139.2">
    <animate attributeName="stroke-dashoffset"
             from="139.2" to="-36.1"
             dur="1.87s" begin="0.78s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.87s" begin="0.78s" repeatCount="indefinite"/>
  </path>
  <path d="M 514.0,269.0 L 453.0,268.0 L 453.0,284.0 L 467.0,297.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="33.6 129.8">
    <animate attributeName="stroke-dashoffset"
             from="129.8" to="-33.6"
             dur="1.75s" begin="3.8s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.75s" begin="3.8s" repeatCount="indefinite"/>
  </path>
  <path d="M 366.0,196.0 L 336.0,219.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="13.2 51.0">
    <animate attributeName="stroke-dashoffset"
             from="51.0" to="-13.2"
             dur="1.00s" begin="0.27s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="0.27s" repeatCount="indefinite"/>
  </path>
  <path d="M 437.0,134.0 L 369.0,133.0 L 354.0,144.0 L 351.0,149.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="32.4 124.8">
    <animate attributeName="stroke-dashoffset"
             from="124.8" to="-32.4"
             dur="1.68s" begin="1.97s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.68s" begin="1.97s" repeatCount="indefinite"/>
  </path>
  <path d="M 288.0,195.0 L 281.0,169.0 L 302.0,145.0 L 333.0,146.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="31.4 121.3">
    <animate attributeName="stroke-dashoffset"
             from="121.3" to="-31.4"
             dur="1.63s" begin="4.55s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.63s" begin="4.55s" repeatCount="indefinite"/>
  </path>
  <path d="M 502.0,251.0 L 500.0,253.0 L 447.0,252.0 L 434.0,264.0 L 434.0,290.0 L 459.0,312.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="46.5 179.3">
    <animate attributeName="stroke-dashoffset"
             from="179.3" to="-46.5"
             dur="2.42s" begin="0.24s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="2.42s" begin="0.24s" repeatCount="indefinite"/>
  </path>
  <path d="M 459.0,179.0 L 436.0,164.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="9.6 37.1">
    <animate attributeName="stroke-dashoffset"
             from="37.1" to="-9.6"
             dur="1.00s" begin="1.79s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="1.79s" repeatCount="indefinite"/>
  </path>
  <path d="M 367.0,326.0 L 391.0,302.0 L 392.0,285.0 L 390.0,283.0 L 367.0,283.0 L 362.0,286.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="28.9 111.6">
    <animate attributeName="stroke-dashoffset"
             from="111.6" to="-28.9"
             dur="1.50s" begin="5.85s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.50s" begin="5.85s" repeatCount="indefinite"/>
  </path>
  <path d="M 356.0,237.0 L 391.0,237.0 L 392.0,247.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="15.8 60.8">
    <animate attributeName="stroke-dashoffset"
             from="60.8" to="-15.8"
             dur="1.00s" begin="4.9s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="4.9s" repeatCount="indefinite"/>
  </path>
  <path d="M 495.0,175.0 L 473.0,174.0 L 444.0,148.0 L 418.0,150.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="30.5 117.5">
    <animate attributeName="stroke-dashoffset"
             from="117.5" to="-30.5"
             dur="1.58s" begin="1.98s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.58s" begin="1.98s" repeatCount="indefinite"/>
  </path>
  <path d="M 550.0,309.0 L 549.0,277.0 L 534.0,260.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="19.1 73.8">
    <animate attributeName="stroke-dashoffset"
             from="73.8" to="-19.1"
             dur="1.00s" begin="5.3s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="5.3s" repeatCount="indefinite"/>
  </path>
  <path d="M 304.0,254.0 L 318.0,271.0 L 348.0,272.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="18.2 70.3">
    <animate attributeName="stroke-dashoffset"
             from="70.3" to="-18.2"
             dur="1.00s" begin="7.28s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="7.28s" repeatCount="indefinite"/>
  </path>
  <path d="M 507.0,183.0 L 528.0,182.0 L 538.0,194.0 L 539.0,238.0 L 537.0,240.0 L 514.0,239.0 L 499.0,221.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="45.5 175.4">
    <animate attributeName="stroke-dashoffset"
             from="175.4" to="-45.5"
             dur="2.36s" begin="0.06s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="2.36s" begin="0.06s" repeatCount="indefinite"/>
  </path>
  <path d="M 468.0,213.0 L 453.0,213.0 L 429.0,194.0 L 385.0,194.0 L 376.0,203.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="35.8 138.2">
    <animate attributeName="stroke-dashoffset"
             from="138.2" to="-35.8"
             dur="1.86s" begin="7.25s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.86s" begin="7.25s" repeatCount="indefinite"/>
  </path>
  <path d="M 285.0,237.0 L 251.0,238.0 L 249.0,236.0 L 250.0,215.0 L 266.0,196.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="28.9 111.7">
    <animate attributeName="stroke-dashoffset"
             from="111.7" to="-28.9"
             dur="1.50s" begin="6.28s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.50s" begin="6.28s" repeatCount="indefinite"/>
  </path>
  <path d="M 305.0,286.0 L 281.0,260.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="12.4 47.8">
    <animate attributeName="stroke-dashoffset"
             from="47.8" to="-12.4"
             dur="1.00s" begin="3.06s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="3.06s" repeatCount="indefinite"/>
  </path>
  <path d="M 291.0,174.0 L 312.0,156.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="9.7 37.3">
    <animate attributeName="stroke-dashoffset"
             from="37.3" to="-9.7"
             dur="1.00s" begin="1.4s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="1.4s" repeatCount="indefinite"/>
  </path>
  <path d="M 510.0,195.0 L 482.0,194.0 L 482.0,219.0 L 479.0,223.0 L 468.0,229.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="24.7 95.2">
    <animate attributeName="stroke-dashoffset"
             from="95.2" to="-24.7"
             dur="1.28s" begin="8.61s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.28s" begin="8.61s" repeatCount="indefinite"/>
  </path>
  <path d="M 472.0,193.0 L 452.0,193.0 L 427.0,173.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="18.2 70.2">
    <animate attributeName="stroke-dashoffset"
             from="70.2" to="-18.2"
             dur="1.00s" begin="3.03s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="3.03s" repeatCount="indefinite"/>
  </path>
  <path d="M 424.0,304.0 L 408.0,304.0 L 391.0,320.0 L 393.0,349.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="23.9 92.4">
    <animate attributeName="stroke-dashoffset"
             from="92.4" to="-23.9"
             dur="1.24s" begin="0.83s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.24s" begin="0.83s" repeatCount="indefinite"/>
  </path>
  <path d="M 306.0,203.0 L 337.0,180.0 L 374.0,179.0 L 394.0,158.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="36.6 141.2">
    <animate attributeName="stroke-dashoffset"
             from="141.2" to="-36.6"
             dur="1.90s" begin="0.87s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.90s" begin="0.87s" repeatCount="indefinite"/>
  </path>
  <path d="M 503.0,333.0 L 502.0,297.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="12.6 48.6">
    <animate attributeName="stroke-dashoffset"
             from="48.6" to="-12.6"
             dur="1.00s" begin="7.63s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="7.63s" repeatCount="indefinite"/>
  </path>
  <path d="M 452.0,396.0 L 450.0,388.0 L 475.0,373.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="13.1 50.5">
    <animate attributeName="stroke-dashoffset"
             from="50.5" to="-13.1"
             dur="1.00s" begin="5.43s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="5.43s" repeatCount="indefinite"/>
  </path>
  <path d="M 263.0,251.0 L 234.0,254.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="10.2 39.4">
    <animate attributeName="stroke-dashoffset"
             from="39.4" to="-10.2"
             dur="1.00s" begin="7.26s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="7.26s" repeatCount="indefinite"/>
  </path>
  <path d="M 262.0,226.0 L 301.0,226.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="13.6 52.6">
    <animate attributeName="stroke-dashoffset"
             from="52.6" to="-13.6"
             dur="1.00s" begin="6.57s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="6.57s" repeatCount="indefinite"/>
  </path>
  <path d="M 540.0,320.0 L 539.0,290.0 L 541.0,285.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="12.4 47.8">
    <animate attributeName="stroke-dashoffset"
             from="47.8" to="-12.4"
             dur="1.00s" begin="4.83s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="4.83s" repeatCount="indefinite"/>
  </path>
  <path d="M 452.0,434.0 L 453.0,411.0 L 475.0,398.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="17.0 65.6">
    <animate attributeName="stroke-dashoffset"
             from="65.6" to="-17.0"
             dur="1.00s" begin="8.76s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="8.76s" repeatCount="indefinite"/>
  </path>
  <path d="M 514.0,296.0 L 514.0,332.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="12.6 48.6">
    <animate attributeName="stroke-dashoffset"
             from="48.6" to="-12.6"
             dur="1.00s" begin="3.41s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="3.41s" repeatCount="indefinite"/>
  </path>
  <path d="M 268.0,268.0 L 289.0,288.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="10.1 39.1">
    <animate attributeName="stroke-dashoffset"
             from="39.1" to="-10.1"
             dur="1.00s" begin="4.97s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="4.97s" repeatCount="indefinite"/>
  </path>
  <path d="M 490.0,332.0 L 491.0,296.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="12.6 48.6">
    <animate attributeName="stroke-dashoffset"
             from="48.6" to="-12.6"
             dur="1.00s" begin="7.46s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="7.46s" repeatCount="indefinite"/>
  </path>
  <path d="M 432.0,333.0 L 414.0,346.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="8.0 30.2">
    <animate attributeName="stroke-dashoffset"
             from="30.2" to="-8.0"
             dur="1.00s" begin="5.57s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="5.57s" repeatCount="indefinite"/>
  </path>
  <path d="M 409.0,274.0 L 376.0,275.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="11.6 44.6">
    <animate attributeName="stroke-dashoffset"
             from="44.6" to="-11.6"
             dur="1.00s" begin="7.76s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="7.76s" repeatCount="indefinite"/>
  </path>
  <path d="M 487.0,239.0 L 452.0,241.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="12.3 47.3">
    <animate attributeName="stroke-dashoffset"
             from="47.3" to="-12.3"
             dur="1.00s" begin="5.2s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="5.2s" repeatCount="indefinite"/>
  </path>
  <path d="M 431.0,451.0 L 429.0,449.0 L 430.0,399.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="18.5 71.3">
    <animate attributeName="stroke-dashoffset"
             from="71.3" to="-18.5"
             dur="1.00s" begin="6.34s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="6.34s" repeatCount="indefinite"/>
  </path>
  <path d="M 419.0,406.0 L 420.0,369.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="13.0 50.0">
    <animate attributeName="stroke-dashoffset"
             from="50.0" to="-13.0"
             dur="1.00s" begin="0.41s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="0.41s" repeatCount="indefinite"/>
  </path>
  <path d="M 410.0,157.0 L 394.0,173.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="8.0 30.6">
    <animate attributeName="stroke-dashoffset"
             from="30.6" to="-8.0"
             dur="1.00s" begin="2.05s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="2.05s" repeatCount="indefinite"/>
  </path>
  <path d="M 528.0,227.0 L 513.0,210.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="8.0 30.7">
    <animate attributeName="stroke-dashoffset"
             from="30.7" to="-8.0"
             dur="1.00s" begin="2.6s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="2.6s" repeatCount="indefinite"/>
  </path>
  <path d="M 447.0,334.0 L 429.0,346.0" fill="none" stroke="#7fe8ff" stroke-width="2.4"
        stroke-linecap="round" opacity="0"
        stroke-dasharray="8.0 29.6">
    <animate attributeName="stroke-dashoffset"
             from="29.6" to="-8.0"
             dur="1.00s" begin="0.72s" repeatCount="indefinite"/>
    <animate attributeName="opacity"
             values="0;1;1;0" keyTimes="0;0.05;0.85;1"
             dur="1.00s" begin="0.72s" repeatCount="indefinite"/>
  </path>
  
      </g>
    </svg>
  );
};

export default BrainPulseOverlay;