import './Ad.css'

interface AdProp {
    flavor : String;
    fontSize : String;
    darkTheme : boolean;    
}

export function Ad(  {{ flavor } , {fontiSize} , {darkTheme} }: AdProp ) {
return ( 
        <h1 className="Ad"> Welcome {user} </h1>
       )
}