// LoginForm
// <Segment>
//     <Form size="mini" key="mini"

//     >
//     {/* <Message  /> */}
//     <Form.Group widths="equal">
//         <Form.Input label="username" placeholder="username"
//         name="username"
    
//         />
//         <Form.Input type="password" label="password" placeholder="password"
//         name="password"

//         />
//     </Form.Group>
//     <Button type="submit">Login</Button>
//     </Form>
// </Segment>


// chat_them = [ "https://i.pinimg.com/originals/45/ce/c7/45cec757faf8d07318cc829dcf21c697.jpg",
                // "https://r1.ilikewallpaper.net/iphone-wallpapers/download/37756/Design-flower-line-blue-pattern-iphone-wallpaper-ilikewallpaper_com_200.jpg",
                // "https://i.pinimg.com/564x/9d/5e/cb/9d5ecb23fd81f76798d72d71a2987f49.jpg",
                // "https://iphonewallpaper.pro/wp-content/uploads/2020/05/21/153764/iphone-whatsapp-chat-wallpaper-1080x1920px-1.jpg",
                // "https://www.itl.cat/pngfile/big/238-2386079_background-chat-wallpaper-whatsapp.jpg",
                // "https://cutewallpaper.org/21/whatsapp-wallpaper-for-chat/iPhone-5-wallpaper-Chat-wallpaper-whatsapp,-Light-texture-.jpg",
                // "https://i.pinimg.com/originals/64/f3/1d/64f31d73ae8600fd28c2d48fb398ca32.jpg",
                // "https://i.pinimg.com/736x/23/21/e8/2321e8ff9edc68c762fbb72e2c00cbbc.jpg",
                // "https://www.itl.cat/pngfile/big/1-17488_whatsapp-chat-wallpaper-iphone-cute-wallpapers-iphone-5.jpg",
                // "https://i.pinimg.com/564x/db/79/07/db790798b9c7158db388ef6d106e8c60.jpg"

// ]


// <div className="list-group">           
                    
// <a href="#" className="list-group-item list-group-item-action list-group-item-success">
//     <h2>ThemesContainer</h2>
// </a>



// <a href="#" className="list-group-item list-group-item-action list-group-item-warning"> 
// <Link to="/specialdate"> 
//     <h2>SpecialDate </h2>
//     <SpecialDaysContainer />  
// </Link> 
// </a>

// </div>

//  <a className="header" href= "http://localhost:3000/theme"> </a>
//     



<div>   
<div className="ui placeholder segment">
    <div className="ui two column very relaxed stackable grid">
        <div className="column">
            <form className="ui-form"  onSubmit = {this.handleSubmit}>
            <div className="ui form" >
                <div className="field">
                    <label>Username</label>
                    <div className="ui left icon input">
                        <input type="text" placeholder="Username" name="username"  value= {this.state.username}
                        onChange={this.handleChange}
                        />
                        <i className="user icon"></i>
                    </div>
                </div>
                <div className="field">
                    <label>Password</label>
                    <div className="ui left icon input">
                        <input type="password" name="password"  value= {this.state.password}
                         onChange={this.handleChange}
                        />
                        <i  className="lock icon"></i>
                    </div>
                </div>
                <button className="ui blue submit button" >Login</button>
            </div>
            </form>
        </div>
        <div className="middle aligned column">
            <div className="ui big button">
                <i className="signup icon"></i>
                Sign Up
            </div>
        </div>
    </div>
        <div className="ui vertical divider">
            Or
        </div>
    </div>
</div>






// <Form.Field>
// {/* <div className="ui calendar" id="example2">
//     <div className="ui input left icon">
//     <i className="calendar icon"></i>
//     <input type="text" placeholder="Date" name= "birthday" value= {this.props.currentUser.birthday}/>
//     </div>
// </div> */}

// </Form.Field>


// <div className="item">
//                             <i className="large github middle aligned icon"></i>
//                             <div className="content">
//                                 {/* <Link to="/themes">   <h1> Themes</h1></Link>          */}
//                             </div>
//                         </div>


