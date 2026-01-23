// jest-dom adds custom jest matchers for asserting on DOM nodes.
// https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock IntersectionObserver for jsdom environment
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;

// Mock scrollTo for jsdom environment
window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;

// Mock HTMLMediaElement methods for jsdom environment
window.HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue(undefined);
window.HTMLMediaElement.prototype.pause = vi.fn();
