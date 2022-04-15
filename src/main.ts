import './style.css'

// maze size

const maize:Array<number> = [13,8];

const createMaze = function(data:Array<number>, canvas:HTMLCanvasElement) {

    const ctx:CanvasRenderingContext2D = canvas.getContext('2d');
    for( let i=0, iz = data[0]; i<iz; i++ ){
        for( let j=0, jz = data[1]; j<jz; j++ ){
            ctx.fillStyle = (i === 0 && j === 0) ? 'blue' : (i*j === (data[0]-1)*(data[1]-1)) ? 'red' : 'gray';
            ctx.fillRect( i*65, j*65, 55, 55);
            ctx.clearRect( i*65+5, j*65+5, 45, 45);
        }
    }
}

const setMazeToNumber( data:Array<number>, canvas:HTMLCanvasElement) {
    const ctx:CanvasRenderingContext2D = canvas.getContext('2d');
    for( let i=0, iz = data[0]; i<iz; i++ ){
        for( let j=0, jz = data[1]; j<jz; j++ ){
        }
    }

}

const init = function() {
    const app:HTMLElement = document.getElementById('app');
    const canvas:HTMLCanvasElement = app.appendChild(document.createElement('canvas'));
    canvas.setAttribute('width', 1000);
    canvas.setAttribute('height', 800);

    createMaze(maize, canvas);
    setMazeToNumber(maize,canvas);
};


init();
