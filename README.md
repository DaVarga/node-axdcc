#Node.js advanced XDCC library.
example requires Node.js IRC library. (`npm install irc`)



##Usage

    var Axdcc = require('./lib/axdcc');
    var request = new Axdcc(client, args);
    request.emit("start");

Requests an XDCC from `{client}` based on `{args}`

`{client}` IRC client (from IRC library)

`{opts}` Information about the XDCC pack
    
##Options
    opts = {
         pack: 0,       // {int} XDCC Pack ID
         nick: "",      // {string} XDCC Bot Nick
         path: "",      // {string} Destination directory
         resume: true,  // {boolean} resume files instead overwrite
         ssl: false,    // {boolean} uses ssl encrypted file transfer via XDCC SSEND.
         unencryptedFallback: false,    // {boolean} uses unencrypted file transfer via XDCC SEND if bot don't supports SSL or SSL version is not compatible with nodejs.
         progressThreshold: 1024        // {int} emit progress every x Byte received
    }

##Events

    request.on('connect', pack);
Emitted when an XDCC transfer starts

`{pack}`      XDCC pack information, see `Pack format` below

-------

    request.on('progress', pack);
Emitted when an XDCC transfer receives data

`{pack}`      XDCC pack information, see `Pack format` below
 
-------
 
    request.on('complete', pack);
Emitted when an XDCC transfer is complete

`{pack}`      XDCC pack information, see `Pack format` below

-------

    request.on('dlerror', pack, error);
Emitted when an XDCC transfer encounters an error

`{pack}`      XDCC pack information, see `Pack format` below

`{error}`     error data
 
 -------
 
     request.on('message', pack, msg);
 Emitted on message
 
 `{pack}`      XDCC pack information, see `Pack format` below
 
 `{msg}`       message data
  
 
##Listeners

    request.emit('start');
When emitted, XDCC transfer starts.

-------

    request.emit('cancel');
When emitted, all XDCC transfers are cancelled.

-------

    request.emit('kill');
Removes all listeners

##Pack format
    pack = {
        status    : "", //status of pack (connected/canceled...)
        fileName  : "", //filename
        ip        : "", //ip
        port      : 0,  //port
        received  : 0,  //received bytes
        fileSize  : 0,  //size of requested file
        resumePos : 0,  //Resume position of the file
        type      : "" //xdcc mode (SEND/SSEND/ACCEPT)
    }
    