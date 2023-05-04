import "./Header.css"


interface HeaderProps {
    user: String;
}

export function Header(  { user } : HeaderProps ) {
return (
        <div className="Header">
            
            <h1> Ice Cream Wars</h1>
            <h1> Weclcome {user} </h1>
            
        </div>
       )
}