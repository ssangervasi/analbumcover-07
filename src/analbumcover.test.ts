import * as Spelling from './spelling';
import { rephrase } from './analbumcover'

describe('rephrase', () => {
  let nodehun : Spelling.Nodehun, spelling : Spelling.Spelling;

  beforeAll(async () => {
    nodehun = await Spelling.initNodehun();
  });

  beforeEach(() => {
    spelling = new Spelling.NodehunSpelling(nodehun);
  });

  describe('with Spelling isCorrect=true', () => {
    test('it should do a thing', () => {
      expect(rephrase('do a thing', spelling)).toBe('rabbit');
    });
  });
})
