import { useRef } from "react";

const CoffeeScene3D = () => {
  const sceneRef = useRef(null);

  const handlePointerMove = (event) => {
    const scene = sceneRef.current;
    if (!scene) return;

    const rect = scene.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    scene.style.setProperty("--coffee-rotate-x", `${(-y * 18).toFixed(2)}deg`);
    scene.style.setProperty("--coffee-rotate-y", `${(x * 24).toFixed(2)}deg`);
    scene.style.setProperty("--coffee-shift-x", `${(x * 18).toFixed(2)}px`);
    scene.style.setProperty("--coffee-shift-y", `${(y * 14).toFixed(2)}px`);
  };

  const handlePointerLeave = () => {
    const scene = sceneRef.current;
    if (!scene) return;

    scene.style.setProperty("--coffee-rotate-x", "0deg");
    scene.style.setProperty("--coffee-rotate-y", "0deg");
    scene.style.setProperty("--coffee-shift-x", "0px");
    scene.style.setProperty("--coffee-shift-y", "0px");
  };

  const handlePointerDown = (event) => {
    const scene = sceneRef.current;
    if (!scene) return;

    handlePointerMove(event);
    scene.classList.add("is-touching");

    window.setTimeout(() => {
      scene.classList.remove("is-touching");
    }, 360);
  };

  return (
    <div
      ref={sceneRef}
      aria-hidden="true"
      className="coffee-3d-scene"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="coffee-3d-stage">
        <div className="coffee-steam steam-one"></div>
        <div className="coffee-steam steam-two"></div>
        <div className="coffee-steam steam-three"></div>
        <div className="coffee-cup">
          <div className="coffee-rim"></div>
          <div className="coffee-liquid"></div>
          <div className="coffee-handle"></div>
        </div>
        <div className="coffee-saucer"></div>
        <div className="coffee-bean bean-one"></div>
        <div className="coffee-bean bean-two"></div>
        <div className="coffee-bean bean-three"></div>
      </div>
    </div>
  );
};

export default CoffeeScene3D;
