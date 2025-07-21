<?php

if (!function_exists('config')) {
    function config(string $key, $default = null)
    {
        static $settings = null;

        // Ambil sekali saja, cache di memory
        if ($settings === null) {
            $settingsPath = getcwd() . '/settings.json';

            if (!file_exists($settingsPath)) {
                return $default; // Jika belum init, langsung return default
            }

            $settings = json_decode(file_get_contents($settingsPath), true);
        }

        // Pecah key dengan dot notation (e.g., app.name)
        $keys = explode('.', $key);
        $value = $settings;

        foreach ($keys as $k) {
            if (!isset($value[$k])) {
                return $default;
            }
            $value = $value[$k];
        }

        return $value;
    }
}
