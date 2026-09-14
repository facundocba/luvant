/*
 * Materia del expediente: los filtros SVG que le dan fibra al papel, manchas de
 * humedad a la foja y borde comido a la tinta del sello.
 *
 * Los filtros se declaran una sola vez por página (<FiltrosPapel />) y el resto
 * de los componentes los referencia por id. Sólo aparecen en intensidad alta
 * (home y landings); en intensidad baja la identidad la sostiene la traza.
 */

export function FiltrosPapel() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      style={{ position: "absolute" }}
    >
      <defs>
        <filter id="ppFibra">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves={4}
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <filter id="ppManchas">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves={3}
            seed={7}
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" intercept="-0.16" />
          </feComponentTransfer>
        </filter>
        <filter id="ppTinta">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.055"
            numOctaves={3}
            seed={3}
            result="n"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale={2.6}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id="ppBirome">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.09"
            numOctaves={2}
            seed={11}
            result="n"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="n"
            scale={1.3}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

/* Grano de fibra que se estira sobre cualquier contenedor con position:relative */
export function Fibra({ opacity = 0.09 }: { opacity?: number }) {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity, mixBlendMode: "multiply" }}
    >
      <rect width="100%" height="100%" filter="url(#ppFibra)" />
    </svg>
  );
}

/* Manchas de humedad: irregulares, nunca centradas */
export function Manchas() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity: 0.45, mixBlendMode: "multiply" }}
      preserveAspectRatio="none"
      viewBox="0 0 640 1200"
    >
      <g filter="url(#ppManchas)" fill="#c9b48c">
        <ellipse cx="580" cy="110" rx="105" ry="80" />
        <ellipse cx="60" cy="900" rx="130" ry="95" />
      </g>
    </svg>
  );
}

/* Clip metálico que pisa el borde superior de la foja */
export function Clip({ className = "" }: { className?: string }) {
  return (
    <svg
      width="52"
      height="100"
      viewBox="0 0 66 128"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ filter: "drop-shadow(0 2px 3px rgba(30,42,35,0.35))" }}
    >
      <path
        d="M22 116 V34 C22 18 32 9 43 9 C54 9 62 18 62 32 V104 C62 114 55 120 47 120 C39 120 33 114 33 104 V40 C33 33 37 29 42 29 C47 29 51 33 51 40 V108"
        stroke="#9AA0A6"
        strokeWidth="4.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M22 116 V34 C22 18 32 9 43 9 C54 9 62 18 62 32 V104"
        stroke="#C8CDD2"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Perforaciones del margen de encuadernación */
export function Perforaciones() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[26px] top-0 hidden h-full flex-col justify-around py-40 lg:flex"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="block h-5 w-5 rounded-full"
          style={{
            background: "#d7cdb2",
            boxShadow: "inset 0 2px 3px rgba(30,42,35,0.28)",
          }}
        />
      ))}
    </div>
  );
}

/* Margen de encuadernación: la línea doble que parte la página en dos */
export function MargenEncuadernado() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[72px] top-0 hidden h-full w-[5px] lg:block"
      style={{
        borderLeft: "1px solid #d6a093",
        borderRight: "1px solid #e7c3b9",
      }}
    />
  );
}
