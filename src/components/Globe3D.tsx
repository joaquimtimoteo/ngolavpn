'use client'

export default function Globe3D() {
  return (
    <div className="relative w-full max-w-5xl mx-auto globe-container">
      {/* Glow Effect Behind Globe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[400px] bg-secondary/15 rounded-full blur-[120px]" />
      
      {/* Globe Container */}
      <div className="relative aspect-[16/8] flex items-end justify-center overflow-hidden">
        <svg 
          viewBox="0 0 800 400" 
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 0 60px rgba(0, 166, 80, 0.2))' }}
        >
          <defs>
            {/* Gradient for globe fill */}
            <radialGradient id="globeGradient" cx="50%" cy="20%" r="80%">
              <stop offset="0%" stopColor="#00A650" stopOpacity="0.12" />
              <stop offset="40%" stopColor="#00A650" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#0A0F0A" stopOpacity="0" />
            </radialGradient>
            
            {/* Gradient for the bottom glow */}
            <radialGradient id="glowGradient" cx="50%" cy="100%" r="60%">
              <stop offset="0%" stopColor="#00A650" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#00A650" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#00A650" stopOpacity="0" />
            </radialGradient>

            {/* Orbital gradient */}
            <linearGradient id="orbitalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00A650" stopOpacity="0" />
              <stop offset="20%" stopColor="#00A650" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#C4E538" stopOpacity="1" />
              <stop offset="80%" stopColor="#00A650" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00A650" stopOpacity="0" />
            </linearGradient>

            {/* Clip path for globe */}
            <clipPath id="globeClip">
              <ellipse cx="400" cy="400" rx="320" ry="320" />
            </clipPath>
          </defs>

          {/* Background glow */}
          <ellipse cx="400" cy="400" rx="350" ry="180" fill="url(#glowGradient)" />

          {/* Globe sphere */}
          <ellipse 
            cx="400" 
            cy="400" 
            rx="320" 
            ry="320" 
            fill="url(#globeGradient)"
          />
          
          {/* Globe outline */}
          <ellipse 
            cx="400" 
            cy="400" 
            rx="320" 
            ry="320" 
            fill="none"
            stroke="#00A650"
            strokeWidth="1"
            strokeOpacity="0.3"
          />

          {/* Globe grid lines */}
          <g clipPath="url(#globeClip)" opacity="0.5">
            {/* Latitude lines */}
            <ellipse cx="400" cy="400" rx="320" ry="80" fill="none" stroke="#00A650" strokeWidth="0.5" strokeOpacity="0.3" />
            <ellipse cx="400" cy="400" rx="320" ry="160" fill="none" stroke="#00A650" strokeWidth="0.5" strokeOpacity="0.3" />
            <ellipse cx="400" cy="400" rx="320" ry="240" fill="none" stroke="#00A650" strokeWidth="0.5" strokeOpacity="0.3" />
            
            {/* Longitude lines */}
            <ellipse cx="400" cy="400" rx="40" ry="320" fill="none" stroke="#00A650" strokeWidth="0.5" strokeOpacity="0.3" />
            <ellipse cx="400" cy="400" rx="120" ry="320" fill="none" stroke="#00A650" strokeWidth="0.5" strokeOpacity="0.3" />
            <ellipse cx="400" cy="400" rx="200" ry="320" fill="none" stroke="#00A650" strokeWidth="0.5" strokeOpacity="0.3" />
            <ellipse cx="400" cy="400" rx="280" ry="320" fill="none" stroke="#00A650" strokeWidth="0.5" strokeOpacity="0.3" />
          </g>

          {/* Continents - Africa centered view */}
          <g clipPath="url(#globeClip)">
            {/* Africa - Main continent (highlighted) */}
            <path
              d="M370 130 
                 L385 125 L405 125 L425 130 L440 140
                 L455 155 L460 175 L458 200
                 L462 230 L465 260 L460 290
                 L450 320 L435 345 L415 360
                 L390 365 L370 355 L355 335
                 L345 305 L340 270 L342 235
                 L345 200 L350 170 L355 150
                 L360 135 Z"
              fill="none"
              stroke="#00A650"
              strokeWidth="1.5"
              opacity="0.9"
            />
            {/* Madagascar */}
            <path
              d="M480 290 L485 310 L480 335 L472 330 L475 305 Z"
              fill="none"
              stroke="#00A650"
              strokeWidth="1"
              opacity="0.7"
            />
            
            {/* Europe */}
            <path
              d="M340 95
                 L360 90 L385 88 L410 90 L435 95
                 L455 105 L465 118 L460 130
                 L445 135 L420 132 L395 128
                 L370 125 L350 118 L340 108 Z"
              fill="none"
              stroke="#00A650"
              strokeWidth="1.2"
              opacity="0.7"
            />
            {/* UK */}
            <path
              d="M320 85 L330 80 L335 90 L325 95 Z"
              fill="none"
              stroke="#00A650"
              strokeWidth="1"
              opacity="0.6"
            />

            {/* Middle East / Arabia */}
            <path
              d="M470 140
                 L490 145 L505 160 L510 185
                 L500 210 L480 220 L465 210
                 L460 185 L462 160 Z"
              fill="none"
              stroke="#00A650"
              strokeWidth="1.2"
              opacity="0.7"
            />

            {/* South America (partial view) */}
            <path
              d="M240 180
                 L255 170 L270 175 L280 195
                 L285 230 L282 270 L275 310
                 L260 350 L245 370 L235 365
                 L230 330 L228 290 L232 250
                 L235 210 Z"
              fill="none"
              stroke="#00A650"
              strokeWidth="1.2"
              opacity="0.5"
            />

            {/* Asia (partial - India region) */}
            <path
              d="M520 150
                 L550 145 L575 160 L585 190
                 L580 225 L560 250 L535 255
                 L520 240 L515 210 L518 180 Z"
              fill="none"
              stroke="#00A650"
              strokeWidth="1.2"
              opacity="0.5"
            />

            {/* North America (edge) */}
            <path
              d="M180 100
                 L200 90 L225 95 L240 110
                 L245 130 L240 155 L230 170
                 L210 165 L190 150 L180 130 Z"
              fill="none"
              stroke="#00A650"
              strokeWidth="1"
              opacity="0.3"
            />
          </g>

          {/* Orbital ring */}
          <ellipse 
            cx="400" 
            cy="380" 
            rx="380" 
            ry="70" 
            fill="none" 
            stroke="url(#orbitalGradient)"
            strokeWidth="1.5"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0 2400;2400 0;0 2400"
              dur="15s"
              repeatCount="indefinite"
            />
          </ellipse>

          {/* Glowing dots - Connection points */}
          <g>
            {/* Angola - Main highlight with pulse */}
            <circle cx="385" cy="280" r="6" fill="#C4E538">
              <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="385" cy="280" r="12" fill="none" stroke="#C4E538" strokeWidth="2" opacity="0.5">
              <animate attributeName="r" values="12;24;12" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="385" cy="280" r="20" fill="none" stroke="#C4E538" strokeWidth="1" opacity="0.3">
              <animate attributeName="r" values="20;36;20" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
            </circle>

            {/* Europe connection */}
            <circle cx="390" cy="110" r="3" fill="#00A650" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* South America connection */}
            <circle cx="260" cy="250" r="3" fill="#00A650" opacity="0.6">
              <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2.5s" repeatCount="indefinite" />
            </circle>

            {/* Middle East connection */}
            <circle cx="490" cy="175" r="3" fill="#00A650" opacity="0.7">
              <animate attributeName="opacity" values="0.7;0.35;0.7" dur="2.8s" repeatCount="indefinite" />
            </circle>

            {/* Asia connection */}
            <circle cx="550" cy="200" r="2" fill="#00A650" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.2;0.5" dur="3.2s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Connection lines from Angola */}
          <g opacity="0.3">
            <line x1="385" y1="280" x2="390" y2="110" stroke="#00A650" strokeWidth="0.5" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" values="0;8" dur="0.5s" repeatCount="indefinite" />
            </line>
            <line x1="385" y1="280" x2="490" y2="175" stroke="#00A650" strokeWidth="0.5" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" values="0;8" dur="0.5s" repeatCount="indefinite" />
            </line>
            <line x1="385" y1="280" x2="260" y2="250" stroke="#00A650" strokeWidth="0.5" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" values="0;8" dur="0.5s" repeatCount="indefinite" />
            </line>
          </g>
        </svg>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0F0A] to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
