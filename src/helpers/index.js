export function setQuery(params) {
  const qs =
    Object.keys(params)
      .map(key => [key, params[key]].join('='))
      .join('&');
  return qs ? `?${qs}` : '';
}

export function dustColorSettings(value, type = 'fine') {
  const dustValue = Number(value);
  if(type === 'fine') {
    if (0 <= dustValue && dustValue <= 30) return '#00D8FF';
    else if (dustValue <= 80) return '#ABF200';
    else if (dustValue <= 150) return '#FFBB00';
    else if (150 < dustValue) return '#FF0000';
  } else {
    if (0 <= dustValue && dustValue <= 15) return '#00D8FF';
    else if (dustValue <= 35) return '#ABF200';
    else if (dustValue <= 75) return '#FFBB00';
    else if (75 < dustValue) return 'FF0000';
  }

}