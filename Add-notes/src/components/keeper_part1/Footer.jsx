 
 const date=new Date();
 const currentDate=date.getFullYear();
 function Footer()
 {

    return(
       
            <footer>
                <p>copyright@{currentDate}</p>
            </footer>
        
    )
 }

 export default Footer;