export enum Architecture {
  Unknown,
  x64,
}

export function parseArchitecture(arch: string): Architecture {
  switch (arch.toLowerCase()) {
    case 'x64':
      return Architecture.x64;
    default:
      return Architecture.Unknown;
  }
}
