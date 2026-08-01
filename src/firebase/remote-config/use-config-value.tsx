'use client';

import { useState, useEffect } from 'react';
import { fetchAndActivate, getValue } from 'firebase/remote-config';
import { useRemoteConfig } from '@/firebase/provider';

/**
 * Hook to retrieve a boolean value from Firebase Remote Config.
 * It automatically handles fetching and activating the configuration.
 * 
 * @param key The Remote Config parameter key.
 * @param defaultValue The fallback value if the remote value is unavailable.
 * @returns The boolean value for the specified key.
 */
export function useRemoteConfigBoolean(key: string, defaultValue: boolean = false) {
  const remoteConfig = useRemoteConfig();
  const [value, setValue] = useState<boolean>(defaultValue);

  useEffect(() => {
    if (!remoteConfig) return;

    // Set minimum fetch interval for development to 0 to see changes instantly
    // In production, the default is usually 12 hours.
    remoteConfig.settings.minimumFetchIntervalMillis = 0;

    const fetchConfig = async () => {
      try {
        await fetchAndActivate(remoteConfig);
        const configValue = getValue(remoteConfig, key);
        setValue(configValue.asBoolean());
      } catch (error) {
        console.error('Remote Config fetch failed:', error);
      }
    };

    fetchConfig();
  }, [remoteConfig, key]);

  return value;
}

/**
 * Hook to retrieve a string value from Firebase Remote Config.
 * 
 * @param key The Remote Config parameter key.
 * @param defaultValue The fallback value if the remote value is unavailable.
 * @returns The string value for the specified key.
 */
export function useRemoteConfigString(key: string, defaultValue: string = '') {
  const remoteConfig = useRemoteConfig();
  const [value, setValue] = useState<string>(defaultValue);

  useEffect(() => {
    if (!remoteConfig) return;
    
    remoteConfig.settings.minimumFetchIntervalMillis = 0;

    const fetchConfig = async () => {
      try {
        await fetchAndActivate(remoteConfig);
        const configValue = getValue(remoteConfig, key);
        setValue(configValue.asString());
      } catch (error) {
        console.error('Remote Config fetch failed:', error);
      }
    };
    fetchConfig();
  }, [remoteConfig, key]);

  return value;
}
