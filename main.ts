const fs = require('fs');
const path = require('path');

// Roast angle: a fitness tracker that praises the lowest possible effort.
const text = "My smartwatch tracks my sleep, my steps and my stress, then congratulates me for standing up \u2014 the bar is on the floor and it's down there with my motivation.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), text + '\n');