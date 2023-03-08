export type Config = {
  gender?: 'a' | 'o';
  capitalize?: boolean;
};

const decimalsToTen = [
  '',
  'primeir',
  'segund',
  'terceir',
  'quart',
  'quint',
  'sext',
  'sétim',
  'oitav',
  'non',
];

const decimalsPlusTen = [
  '',
  'décim',
  'vigésim',
  'trigésim',
  'quadragésim',
  'quinquagésim',
  'sexagésim',
  'septuagésim',
  'octogésim',
  'nonagésim',
];

const hundredths = [
  '',
  'centésim',
  'ducentésim',
  'trecentésim',
  'quadrigentésim',
  'quingentésim',
  'sexcentésim',
  'septigentésim',
  'octigentésim',
  'nongentésim',
];

export default function numberToOrdinal(value: number, config?: Config) {
  if (!Number.isInteger(value) || value > 999 || value < 1) {
    console.warn('It`s not possible to handle this number.');
    return value;
  }

  const gender = config?.gender ?? 'o';
  const txtHandler = config?.capitalize ? capitalize : (txt: string) => txt;

  let pow = 3;
  const ordinals = [decimalsToTen, decimalsPlusTen, hundredths];
  const textArray: Array<string> = [];

  while (pow--) {
    const radix = 10 ** pow;
    const raw = Math.floor(value / radix);
    const lastDigit = raw % 10;

    if (lastDigit) {
      const prefix = ordinals[pow][lastDigit];
      textArray.push(`${prefix}${gender}`);
    }
  }

  return txtHandler(textArray.join(' '));
}

function capitalize(text: string) {
  return text.split(' ').map(capitalizeWord).join(' ');
}

function capitalizeWord(text: string) {
  return text.replace(text[0], text[0].toUpperCase())
}