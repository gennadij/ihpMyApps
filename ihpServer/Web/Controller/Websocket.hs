module Web.Controller.Websocket where 

import Web.Controller.Prelude

instance WSApp WebsocketController where 
    initialState = WebsocketController 

    run = do 
        sendTextData("Websocket send " :: Text)