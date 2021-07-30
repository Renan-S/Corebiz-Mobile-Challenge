export const StarWarsServiceFactory = async (url: string): Promise<any> => {
  try {
    const starWarsList = await fetch(url);
    return starWarsList.json();
  } catch (error) {
    throw new Error(error);
  }
};
