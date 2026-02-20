const useDate = ({ settings }) => {
  const { nexora_app_date_format } = settings;

  const dateFormat = nexora_app_date_format;

  return {
    dateFormat,
  };
};

module.exports = useDate;
