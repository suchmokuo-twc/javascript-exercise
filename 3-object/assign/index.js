export default function addSerialNumber(source) {
  Object.assign(source.properties, {
    status: 'processed'
  });

  return Object.assign(source, {
    serialNumber: '12345'
  });
}
