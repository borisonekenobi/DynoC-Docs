export enum OperatingSystem {
  Unknown,
  Windows,
  Linux,
    Debian,
}

export function parseOperatingSystem(os: string): OperatingSystem {
  switch (os.toLowerCase()) {
    case 'windows':
      return OperatingSystem.Windows;
    case 'linux':
      return OperatingSystem.Linux;
    case 'debian':
      return OperatingSystem.Debian;
    default:
      return OperatingSystem.Unknown;
  }
}
