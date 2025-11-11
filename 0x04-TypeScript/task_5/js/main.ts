// Interface for MajorCredits with a brand property
export interface MajorCredits {
  credits: number;
  _brand: 'major';
}

// Interface for MinorCredits with a brand property
export interface MinorCredits {
  credits: number;
  _brand: 'minor';
}

// Function to sum two MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: 'major' };
}

// Function to sum two MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: 'minor' };
}


const mathCredits: MajorCredits = { credits: 3, _brand: 'major' };
const physicsCredits: MajorCredits = { credits: 4, _brand: 'major' };

console.log(sumMajorCredits(mathCredits, physicsCredits));
// Output: { credits: 7, _brand: 'major' }

const musicCredits: MinorCredits = { credits: 2, _brand: 'minor' };
const artCredits: MinorCredits = { credits: 1, _brand: 'minor' };

console.log(sumMinorCredits(musicCredits, artCredits));
// Output: { credits: 3, _brand: 'minor' }
