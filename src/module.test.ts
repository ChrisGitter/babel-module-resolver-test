import { runFn } from './module';

jest.mock('./mockedModule', () => () => 'mocked');

it('returns the mocked value', () => {
    const result = runFn();

    expect(result).toBe('mocked');
});
