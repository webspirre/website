declare module 'react-select-country-list' {
  import { OptionTypeBase } from 'react-select';

  interface CountryOption extends OptionTypeBase {
    value: string;
    label: string;
  }

  function countryList(): { getData: () => CountryOption[] };

  export default countryList;
}
