<svg
  width="36"
  height="36"
  viewBox="0 0 36 36"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>

  <!-- Big icon -->
  <circle cx="18" cy="18" r="18" fill="url(#patternBig)" />

  <!-- Small icon (top-left) -->
  <g transform="translate(0, 0)">
    <circle cx="8" cy="8" r="8" fill="url(#patternSmall)" />
  </g>

  <defs>
    <!-- Big image pattern -->
    <pattern
      id="patternBig"
      patternContentUnits="objectBoundingBox"
      width="1"
      height="1"
    >
      <use
        xlink:href="#imageBig"
        transform="translate(0 -0.00705645) scale(0.00201613)"
      />
    </pattern>

    <image
      id="imageBig"
      width="496"
      height="503"
      preserveAspectRatio="none"
    />

    <!-- Small image pattern -->
    <pattern
      id="patternSmall"
      patternContentUnits="objectBoundingBox"
      width="1"
      height="1"
    >
      <use xlink:href="#imageSmall" transform="scale(0.0005)" />
    </pattern>

    <image
      id="imageSmall"
      width="2000"
      height="2000"
      preserveAspectRatio="none"
    />
  </defs>
</svg>
