const useAppSettings = () => {
  let settings = {};
  settings['nexora_app_email'] = 'noreply@nexoraapp.com';
  settings['nexora_base_url'] = 'https://cloud.nexoraapp.com';
  return settings;
};

module.exports = useAppSettings;
