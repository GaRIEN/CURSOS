function getValue<ssas>(value: ssas)  {
    const array: ssas[]=[value]
  return value;
}
getValue<string>('ssas').indexOf;
getValue<number>(1).toFixed();
getValue<boolean>(true).toString();
getValue<number[]>([1,2,5,6]).forEach;