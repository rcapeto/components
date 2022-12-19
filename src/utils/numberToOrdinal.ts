export type Config = {
  gender?: 'a' | 'o';
  uppercase?: boolean;
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
  'décimo',
  'vig',
  'trig',
  'quadrag',
  'quinquag',
  'sexag',
  'septuag',
  'octog',
  'nonag',
];
const hundredths = [
  '',
  'cent',
  'ducent',
  'trecent',
  'quadrigent',
  'quingent',
  'sexcent',
  'septigent',
  'octigent',
  'nongent',
];

function lessThan10(number: number, gender: string): string {
  const textPrefix = decimalsToTen[number];
  return textPrefix ? `${textPrefix}${gender}` : '';
}

function upperThan10(number: number, gender: string): string {
  const numberDivider10 = Math.floor(number / 10);
  const textPrefix = decimalsPlusTen[numberDivider10];
  const result = number - (numberDivider10 * 10);
  const sufix = numberDivider10 > 1 ? `ésim${gender}` : "";

  return `${textPrefix}${sufix} ${lessThan10(result, gender)}`
}

export default function numberToOrdinal(value: number, config?: Config) {
  if(!Number.isInteger(value)) {
      throw new Error("Não implementado para números não inteiros.")
  } else if(value > 999) {
      throw new Error("Não implementado para números maiores que 999.")
  } else if(value < 1) {
      throw new Error("Não implementado para números negativos.")
  }

  const gender = config?.gender ?? 'o';
  const uppercase = config?.uppercase ?? false;

  let text = ""

  const isHundredthHouse = value < 1000 && value > 99;
  const isDecimal = value < 100 && value > 9;
  const isLowerThan10 = value < 10 && value > 0;

  if (isHundredthHouse) {
    const numberDivider100 = Math.floor(value / 100);
    const result = value - (numberDivider100 * 100);
    const textPrefix = hundredths[numberDivider100];
    const currentFnc = result > 9 ? upperThan10 : lessThan10;

    text = `${textPrefix}ésim${gender} ${currentFnc(result, gender)}`
  }

  if (isDecimal) text = upperThan10(value, gender);
  if(isLowerThan10) text = lessThan10(value, gender);
  
  return uppercase ? toUpperCase(text) : text;
}

function toUpperCase(text: string) {
  const words = text.trim().split(' ');
  const upper = words.map(word => word.replace(word[0], word[0].toUpperCase()))
  return upper.join(' ');
}
