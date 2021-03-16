const { addElement } = require('../AddElement');
const lut = require('../../../lookup-tables/lib/classes/Service');

const serviceObj = {
  identifier: 'string',
  type: 'string',
};

const generateService = (classData, payload) => {
  const obj = {};
  let modelObj = serviceObj;
  let serviceType = 'Simple';

  if (classData.length > 1) {
    serviceType = classData[1];
  }
  addElement(modelObj, obj, 'type', serviceType);

  Object.keys(payload).forEach((k) => {
    if (lut[k.toLowerCase()] !== undefined)
      addElement(modelObj, obj, lut[k.toLowerCase()], payload[k], k);
    else if (k !== '@type') addElement(modelObj, obj, 'extra', payload[k], k);
  });

  return obj;
};

module.exports = { generateService };