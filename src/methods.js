// mapping genre name to the genre id
export const extractGenre = (id, genres) => {
    const genre = genres.filter(gen => gen.id === id);
    return genre.length?genre[0].name:null;
}