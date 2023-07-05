import { faker } from '@faker-js/faker';
import { Factory /*, trait */ } from 'miragejs';

let productNdcPairs = [
  {
    productName: 'ADVATE 0250U BAXJECT III SPD',
    ndc: '00944-3051-02',
    uom: 'EA',
    sku: '565800',
  },
  {
    productName: 'ADVATE 0250U BAXJECT III SPD',
    ndc: '00944-3051-02',
    uom: 'EA',
    sku: '565800',
  },
  {
    productName: 'ADVATE 0250U BAXJECT III SPD',
    ndc: '00944-3051-02',
    uom: 'EA',
    sku: '565800',
  },
  {
    productName: 'ADVATE 0500U BAXJECT III SPD',
    ndc: '00944-3051-02',
    uom: 'EA',
    sku: '565801',
  },
  {
    productName: 'ADVATE 0500U BAXJECT III SPD',
    ndc: '00944-3051-02',
    uom: 'EA',
    sku: '565801',
  },
  {
    productName: 'ADVATE 1138U BAXJECT III SPD',
    ndc: '00944-3051-02',
    uom: 'EA',
    sku: '565802',
  },
  {
    productName: 'Benefix RT 1111iu',
    ndc: '58394-0635-03',
    uom: 'EA',
    sku: '565900',
  },
  {
    productName: 'Benefix RT 2222iu',
    ndc: '58394-0635-03',
    uom: 'EA',
    sku: '565901',
  },
  {
    productName: 'BERINERT 500U SPD',
    ndc: '63833-0825-02',
    uom: 'EA',
    sku: '566000',
  },
  {
    productName: 'FEIBA NF 1000U HIFLO SPD',
    ndc: '64193-0424-02',
    uom: 'EA',
    sku: '566100',
  },
  {
    productName: 'HELIXATE FS 0770U SPD',
    ndc: '00053-8132-02',
    uom: 'EA',
    sku: '566200',
  },
];

export default Factory.extend({
  id(i) {
    return i;
  },

  ndc(i) {
    return productNdcPairs[i % productNdcPairs.length].ndc;
  },

  productName(i) {
    return productNdcPairs[i % productNdcPairs.length].productName;
  },

  uom(i) {
    return productNdcPairs[i % productNdcPairs.length].uom;
  },

  sku(i) {
    return productNdcPairs[i % productNdcPairs.length].sku;
  },

  serialNumber() {
    return (
      faker.datatype.number({ min: 100000, max: 999999 }) +
      'D' +
      faker.datatype.number({ min: 10000000, max: 99999999 })
    );
  },

  modifiedTime() {
    return faker.date.past().getTime();
  },

  manufacturer() {
    return faker.random.word();
  },

  lotNumber() {
    return faker.random.alphaNumeric(10);
  },

  expirationDate() {
    return faker.date.future().getTime();
  },

  manifest() {
    return null;
  },

  patient() {
    return null;
  },

  inInventory() {
    return true;
  },

  // consignmentTrait: trait({
  //   afterCreate(lineItem, server) {
  //     lineItem.update({
  //       lineItemSegment: server.schema.itemSegments.find(itemSegments.consignment),
  //     })
  //   }
  // }),
  // siteOwnedTrait: trait({
  //   afterCreate(lineItem, server) {
  //     lineItem.update({
  //       lineItemSegment: server.schema.itemSegments.find(itemSegments.buyBill),
  //     })
  //   }
  // }),
  // samplesTrait: trait({
  //   afterCreate(lineItem, server) {
  //     lineItem.update({
  //       lineItemSegment: server.schema.itemSegments.find(itemSegments.samples),
  //     })
  //   }
  // }),
  // patientAssistTrait: trait({
  //   afterCreate(lineItem, server) {
  //     lineItem.update({
  //       lineItemSegment: server.schema.itemSegments.find(itemSegments.patientAssist),
  //     })
  //   }
  // }),
  // specialtyTrait: trait({
  //   afterCreate(lineItem, server) {
  //     lineItem.update({
  //       lineItemSegment: server.schema.itemSegments.find(itemSegments.whiteBag),
  //     })
  //   }
  // })
});
