import Logo from "@/logo.png";

export function Order() {
  return (
    // Contenedor principal: relativo para que el fondo absoluto funcione
    <div className="relative w-full bg-primary h-96"> 
      
      {/* 1. Fondo con Opacidad: Elemento Absoluto */}
      <div
        className="absolute inset-0 z-0" // Ocupa todo el espacio y queda detrás (z-0)
        style={{
          backgroundImage: `url(${Logo})`,
          backgroundSize: "50px 50px",
          backgroundColor: "white",
          opacity: 0.5, // Solo el fondo tiene 50% de opacidad
        }}
      />
      
      {/* 2. Contenido de Texto: Elemento Relativo con Opacidad 100% */}
      <div className="relative z-10 py-52 text-center text-gray-800"> 
        <h1 className="text-4xl font-bold">Ready to order?</h1>
        <h2 className="text-xl mt-2">Join us and take your order today!</h2>
      </div>
      
    </div>
  );
}