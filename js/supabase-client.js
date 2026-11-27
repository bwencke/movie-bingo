// Exposes `window.supabaseClient` (null until js/supabase-config.js is filled in).
(function () {
    const { url, anonKey } = window.SUPABASE_CONFIG || {};

    if (!url || !anonKey) {
        console.warn('Supabase is not configured. Set url and anonKey in js/supabase-config.js.');
        window.supabaseClient = null;
        return;
    }

    window.supabaseClient = window.supabase.createClient(url, anonKey);
})();
