export const GET_COUNTRIES = 'GET_COUNTRIES';

// List all available countries
export function getCountries() {
  return {
    type: GET_COUNTRIES,
  };
}