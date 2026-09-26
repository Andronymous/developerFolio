import "vitest-canvas-mock";
import "@testing-library/jest-dom/vitest";

// jsdom does not implement IntersectionObserver, which react-awesome-reveal uses
class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
window.IntersectionObserver = IntersectionObserverMock;
