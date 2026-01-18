import {OperatingSystem} from './operating-system';
import {Architecture} from './architecture';

export interface DevicePlatform {
  os: OperatingSystem;
  arch: Architecture;
}

export function parseDevicePlatform(): DevicePlatform {
  const ua: string = navigator.userAgent.toLowerCase();
  const platform: string = navigator.platform.toLowerCase();

  let devicePlatform: DevicePlatform = {
    os: OperatingSystem.Unknown,
    arch: Architecture.Unknown,
  };

  if (ua.includes('win')) devicePlatform.os = OperatingSystem.Windows;
  else if (ua.includes('linux')) devicePlatform.os = OperatingSystem.Linux;

  if (platform.includes('x86_64') || platform.includes('amd64') || platform.includes('win64'))
    devicePlatform.arch = Architecture.x64;

  return devicePlatform;
}
