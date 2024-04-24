import "./footer.css"
export default function Footer(){
         const year=new Date().getFullYear();
         return(
                  
                  <>
                  <footer>
                           <div className="footer_container">
                                    <div className="footr_details_one">
                                             <h3>Get To know Us</h3>
                                             <p>About Us </p>
                                             <p>Career </p>
                                             <p>press realse</p>
                                             <p>Amazon career</p>
                                    </div>

                                    <div className="footer_details_one">
                                             <h3>Get To know Us</h3>
                                             <p>About Us </p>
                                             <p>Career </p>
                                             <p>press realse</p>
                                             <p>Amazon career</p>
                                    </div>
                                    <div className="footer_details_one forres">
                                             <h3>Get To know Us</h3>
                                             <p>About Us </p>
                                             <p>Career </p>
                                             <p>press realse</p>
                                             <p>Amazon career</p>
                                    </div>
                                    <div className="footer_details_one forres">
                                             <h3>Get To know Us</h3>
                                             <p>About Us </p>
                                             <p>Career </p>
                                             <p>press realse</p>
                                             <p>Amazon career</p>
                                    </div>
                                   
                           </div>
                           <div className="lastdetails">
                                             <img src="./amazon_PNG25.png" alt="" />
                                             <p>Conditions of Use & Sale &nbsp; &nbsp; &nbsp;      Privacy Notice&nbsp; &nbsp; &nbsp;      Interest-Based Ads&nbsp; &nbsp; &nbsp;      © 1996-{year}, Amazon.com, Inc. or its affiliates</p>
                                    </div>
                  </footer>
                  </>
         )
}