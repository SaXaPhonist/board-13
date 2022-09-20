declare module '*.png' {
  const content: string;
  export default content;
}
declare module '*.jpg' {
  const content: string;
  export default content;
}
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.woff' {
  const content: string;
  export default content;
}

declare module '*.woff2' {
  const content: string;
  export default content;
}

declare module '*.ttf' {
  const content: string;
  export default content;
}

declare module '*.tsx';

declare namespace ChartTypes {
  type Data = {
    id: string;
    category: string;
    value: string;
    fillColor: string;
  };

  type ForceData = Data & {
    value: number;
  };

  type ForceDataSimulated = ForceData & {
    x: number;
    y: number;
    v: number;
  };
}
