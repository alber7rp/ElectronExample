// Controla el ciclo de vida de la aplicación

var { app, BrowserWindow } = require('electron')



// Permite el reporte de errores




// Referencia global a la ventana principal

var mainWindow = null;



// Terminamos el proceso de la aplicación cuando todas las ventanas se han cerrado

app.on('window-all-closed', function() {

  if (process.platform != 'darwin')

    app.quit();

});



// Cuando todo se haya cargado, mediante el evento ready empezaremos a definir la aplicación

app.on('ready', function() {

  // Creamos una nueva ventana de 800x600

  mainWindow = new BrowserWindow({

        width: 800,

        height: 600});



  // Vinculamos el index.html a dicha ventana

  mainWindow.loadURL('file://' + __dirname + '/index.html');
  
  //mainWindow.openDevTools();




  // Cuando la ventana principal se cierre...

  mainWindow.on('closed', function() {

    // Liberamos los recursos referentes a la ventana

    mainWindow = null;

  });

});

