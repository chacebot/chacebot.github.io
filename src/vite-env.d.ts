/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module "*.md" {
  const value: string;
  export default value;
}
