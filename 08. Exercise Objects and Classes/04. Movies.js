function solve(input) {
    const movies = [];

    for (const row of input) {
        const addMovieCommand = 'addMovie';
        const directedByCommand = 'directedBy';
        const onDateCommand = 'ondate';
        
        if (row.includes(addMovieCommand)) {
            const movie = {
                name: row.substring(addMovieCommand.length + 1),
            };

            movies.push(movie);
        } else if (row.includes(directedByCommand)) {
            const [movieName, director] = row.split(` ${directedByCommand} `)
            const movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.director = director;
            }
            
        } else if (row.includes(onDateCommand)) {
            const [movieName, date] = row.split(` ${onDateCommand} `)
            const movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.date = date;
            }
        }
    }

    console.log(JSON.stringify(movies));
}