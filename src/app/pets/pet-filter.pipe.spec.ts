import { PetFilterPipe } from './pet-filter.pipe';

describe('PetFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new PetFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
