interface AudioPlayer{
    audioVulume:number;
    songDuration:number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVulume: 90,
    songDuration: 36,
    song: "Mess",
    details:{
        author:"Ed Sheeran",
        year:2015
    }
}

const { details } = audioPlayer 
const { author } = details

console.log('Author', author);

const  [p1,p2, trunks = 'Not Found']: string[] = ['Guku','Vegeta','Trunks']

console.log('Personaje 3', trunks,p2,p1 || 'No hay personaje')